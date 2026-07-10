import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Minus, Plus } from 'lucide-react';
import { PricingModal } from './PricingModal';

const plans = [
  {
    name: 'Launch™',
    subtitle: 'Professional Editing',
    label: 'FOUNDATION WORKFLOW',
    basePrice: 99,
    description: 'A streamlined production workflow for clean, professional video editing.',
    whoItsFor: 'Creators and founders establishing their video presence.',
    features: [
      'Story-first editing',
      'Basic motion graphics',
      'Color correction',
      'Audio leveling',
      '1 Revision pass'
    ],
    popular: false,
  },
  {
    name: 'Scale™',
    subtitle: 'Growth Editing',
    label: 'BALANCED WORKFLOW',
    basePrice: 149,
    description: 'An elevated editing framework designed to maximize retention and audience growth.',
    whoItsFor: 'Brands and creators actively scaling their content output.',
    features: [
      'Everything in Launch',
      'Advanced motion graphics',
      'B-roll & asset sourcing',
      'Dynamic subtitles',
      '2 Revision passes'
    ],
    popular: true,
  },
  {
    name: 'Authority™',
    subtitle: 'Elite Editing',
    label: 'COMPREHENSIVE WORKFLOW',
    basePrice: 249,
    description: 'A comprehensive creative partnership delivering our highest tier of production value.',
    whoItsFor: 'Established businesses demanding cinematic quality and dedicated resources.',
    features: [
      'Everything in Scale',
      'Custom animations',
      'Premium sound design',
      'Thumbnail design included',
      'Unlimited revisions'
    ],
    popular: false,
  },
];

export function Pricing() {
  const [volume, setVolume] = useState<number | string>(20);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const plansContainerRef = useRef<HTMLDivElement>(null);
  
  // Ref for holding interval ID for continuous increment/decrement
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const getNumericVolume = () => {
    const num = typeof volume === 'string' ? parseInt(volume, 10) : volume;
    return isNaN(num) || num < 1 ? 1 : num;
  };

  const currentVol = getNumericVolume();

  const handleIncrement = () => {
    setVolume((prev) => {
      if (prev === '') return 1;
      const v = typeof prev === 'string' ? parseInt(prev, 10) || 1 : prev;
      return v < 51 ? v + 1 : v;
    });
  };

  const handleDecrement = () => {
    setVolume((prev) => {
      if (prev === '') return 1;
      const v = typeof prev === 'string' ? parseInt(prev, 10) || 1 : prev;
      return v > 1 ? v - 1 : v;
    });
  };

  const startContinuous = (action: 'inc' | 'dec') => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);

    action === 'inc' ? handleIncrement() : handleDecrement();

    timeoutRef.current = setTimeout(() => {
      intervalRef.current = setInterval(() => {
        action === 'inc' ? handleIncrement() : handleDecrement();
      }, 100);
    }, 500);
  };

  const stopContinuous = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '') {
      setVolume('');
      return;
    }
    const num = parseInt(val, 10);
    if (!isNaN(num)) {
      setVolume(num);
    }
  };

  const handleInputBlur = () => {
    if (volume === '' || getNumericVolume() < 1) {
      setVolume(1);
    }
  };

  const handleQuickSelect = (val: number | string) => {
    setVolume(val);
  };

  const getRecommendedPlanIndex = () => {
    if (volume === '') return null;
    if (currentVol >= 30) return 2; // Authority
    if (currentVol >= 10) return 1; // Scale
    return 0; // Launch
  };

  const recommendedIndex = getRecommendedPlanIndex();
  const highlightedIndex = selectedPlanIndex !== null ? selectedPlanIndex : recommendedIndex;

  const getHelperBannerText = (vol: number) => {
    const planIndex = highlightedIndex !== null ? highlightedIndex : recommendedIndex;
    const planName = planIndex !== null ? plans[planIndex].name.replace('™', '') : 'Launch';
    
    let message = "";
    if (vol >= 50) {
      message = "For teams and businesses producing content at scale.";
    } else if (vol >= 40) {
      message = "Designed for high-volume publishing.";
    } else if (vol >= 30) {
      message = "Built for creators increasing production.";
    } else if (vol >= 20) {
      message = "Balanced for creators publishing consistently.";
    } else if (vol >= 10) {
      message = "A steady publishing rhythm with room to grow.";
    } else {
      message = "Creators beginning their content journey often start here.";
    }

    return (
      <>
        <span className="block mb-2 text-brand-text font-medium text-lg">
          Based on {vol} Shorts per month, many creators explore the <strong className="text-brand-accent">{planName}</strong> workflow.
        </span>
        <span className="text-brand-text-muted text-base block">{message}</span>
      </>
    );
  };

  const handlePlanClick = (index: number) => {
    setSelectedPlanIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Reset explicit selection when volume changes to maintain matching recommendation
  useEffect(() => {
    setSelectedPlanIndex(null);
  }, [volume]);

  return (
    <section id="pricing" className="py-32 bg-brand-secondary border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-brand-text">Investment</h2>
          <p className="text-brand-text-muted text-xl lg:text-2xl max-w-2xl mx-auto">
            Transparent, predictable pricing for premium video editing.
          </p>
        </div>

        {/* How It Works Card */}
        <div className="max-w-2xl mx-auto mb-16 bg-brand-primary/50 border border-brand-border rounded-[24px] p-6 sm:p-8 shadow-lg">
          <h4 className="text-lg font-bold text-brand-text mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-brand-accent/20 text-brand-accent flex items-center justify-center text-sm">?</span>
            How It Works
          </h4>
          <ol className="space-y-3 text-sm sm:text-base text-brand-text-muted">
            <li className="flex items-start gap-3">
              <span className="font-bold text-brand-text">1.</span>
              <span>Choose how many Shorts you need each month.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-brand-text">2.</span>
              <span>Select a package that fits your workflow.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-brand-text">3.</span>
              <span>Any eligible volume savings are applied automatically.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="font-bold text-brand-text">4.</span>
              <span>Book your free Discovery Call.</span>
            </li>
          </ol>
        </div>

        {/* Volume Savings Table */}
        <div className="max-w-2xl mx-auto mb-16 bg-brand-primary/50 border border-brand-border rounded-[24px] p-6 sm:p-8 shadow-lg">
          <div className="text-center mb-6">
            <h4 className="text-xl font-bold text-brand-text mb-2">Volume Savings</h4>
            <p className="text-brand-text-muted text-sm sm:text-base">The more Shorts you create each month, the more you save.</p>
          </div>
          <div className="overflow-x-auto rounded-xl border border-brand-border/50 mb-4 bg-brand-secondary/30">
            <table className="w-full text-left text-sm sm:text-base">
              <thead className="bg-brand-secondary/50 border-b border-brand-border/50 text-brand-text-muted">
                <tr>
                  <th className="px-4 py-3 font-medium">Monthly Shorts</th>
                  <th className="px-4 py-3 font-medium text-right">Volume Savings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border/50 text-brand-text">
                <tr><td className="px-4 py-3">1–5</td><td className="px-4 py-3 text-right">Standard Price</td></tr>
                <tr><td className="px-4 py-3">6–10</td><td className="px-4 py-3 text-right font-medium text-brand-success">3% OFF</td></tr>
                <tr><td className="px-4 py-3">11–20</td><td className="px-4 py-3 text-right font-medium text-brand-success">5% OFF</td></tr>
                <tr><td className="px-4 py-3">21–30</td><td className="px-4 py-3 text-right font-medium text-brand-success">7% OFF</td></tr>
                <tr><td className="px-4 py-3">31–40</td><td className="px-4 py-3 text-right font-medium text-brand-success">9% OFF</td></tr>
                <tr><td className="px-4 py-3">41–50</td><td className="px-4 py-3 text-right font-medium text-brand-success">10% OFF</td></tr>
                <tr><td className="px-4 py-3">50+</td><td className="px-4 py-3 text-right text-brand-accent">Custom Enterprise Quote</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-brand-text-muted">Volume Savings are applied automatically based on your selected monthly content volume.</p>
        </div>

        {/* Volume Selector */}
        <div className="mb-20 bg-brand-primary border border-brand-border rounded-[32px] p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-border to-transparent" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-text">About how many Shorts do you usually publish each month?</h3>
          <div className="mb-10" />

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
            {[
              { val: 5, label: 'Starting Out' },
              { val: 10, label: 'Consistent Output' },
              { val: 20, label: 'Accelerated Growth' },
              { val: 30, label: 'Scaling Production' },
              { val: 40, label: 'High-Volume' },
              { val: 51, display: '50+', label: 'Enterprise Scale' }
            ].map((option) => {
              const isSelected = volume !== '' && (option.val >= 51 ? currentVol >= 51 : currentVol === option.val);
              return (
                <button
                  key={option.val}
                  onClick={() => handleQuickSelect(option.val)}
                  className={`py-4 px-2 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-1 ${
                    isSelected
                      ? 'bg-brand-accent/10 text-brand-accent border-brand-accent shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                      : 'bg-brand-secondary border-brand-border/50 text-brand-text hover:border-brand-text hover:bg-brand-secondary/80'
                  }`}
                >
                  <span className="text-2xl font-bold">{option.display || option.val}</span>
                  <span className={`text-xs font-medium ${isSelected ? 'text-brand-accent/90' : 'text-brand-text-muted'}`}>{option.label}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-8 pt-8 border-t border-brand-border/50">
            <span className="text-sm font-semibold text-brand-text-muted uppercase tracking-wider block mb-4">OR adjust manually</span>
            <div className="flex justify-center">
              <div className="inline-flex items-center p-2 bg-brand-card rounded-2xl border border-brand-border shadow-inner max-w-full overflow-hidden">
                <button
                  onMouseDown={() => startContinuous('dec')}
                  onMouseUp={stopContinuous}
                  onMouseLeave={stopContinuous}
                  onTouchStart={(e) => { e.preventDefault(); startContinuous('dec'); }}
                  onTouchEnd={(e) => { e.preventDefault(); stopContinuous(); }}
                  disabled={currentVol <= 1 && volume !== ''}
                  className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-50 disabled:hover:border-brand-border disabled:hover:text-brand-text active:scale-95 touch-manipulation select-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <div className="w-32 sm:w-48 md:w-64 mx-2 md:mx-4 text-center shrink">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    placeholder="0"
                    value={volume === 51 ? '50+' : volume}
                    onChange={handleInputChange}
                    onBlur={handleInputBlur}
                    className="w-full text-center bg-transparent text-2xl md:text-4xl font-extrabold text-brand-text focus:outline-none focus:text-brand-accent transition-colors appearance-none placeholder:text-sm md:placeholder:text-base placeholder:font-medium placeholder:text-brand-text-muted placeholder:whitespace-normal"
                    style={{ MozAppearance: 'textfield' }}
                  />
                </div>
                <button
                  onMouseDown={() => startContinuous('inc')}
                  onMouseUp={stopContinuous}
                  onMouseLeave={stopContinuous}
                  onTouchStart={(e) => { e.preventDefault(); startContinuous('inc'); }}
                  onTouchEnd={(e) => { e.preventDefault(); stopContinuous(); }}
                  disabled={currentVol >= 51}
                  className="w-12 h-12 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-50 disabled:hover:border-brand-border disabled:hover:text-brand-text active:scale-95 touch-manipulation select-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>


        {currentVol > 0 && currentVol <= 50 && (
          <div className="max-w-3xl mx-auto mb-16 text-center">
            <div className="inline-block bg-brand-accent/5 border border-brand-accent/20 rounded-2xl p-6 sm:px-10">
              {getHelperBannerText(currentVol)}
              <div className="mt-4 pt-4 border-t border-brand-accent/10">
                <button 
                  onClick={() => {
                    setSelectedPlanIndex(null); // Clear manual selection to re-highlight the matched package
                    setTimeout(() => {
                      const planCards = plansContainerRef.current?.children;
                      const rIndex = getRecommendedPlanIndex();
                      if (planCards && rIndex !== null && planCards[rIndex]) {
                        (planCards[rIndex] as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }, 50);
                  }}
                  className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-accent/80 font-semibold transition-colors"
                >
                  View Matching Package ↓
                </button>
              </div>
            </div>
          </div>
        )}
            <div ref={plansContainerRef} className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto mb-20">
              {plans.map((plan, index) => {
                const isHighlighted = highlightedIndex === index;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex flex-col p-8 md:p-10 rounded-[32px] border transition-all duration-300 group ${
                      isHighlighted
                        ? 'bg-brand-primary border-brand-accent shadow-[0_0_40px_rgba(212,175,55,0.15)] z-10'
                        : 'bg-brand-primary/50 border-brand-border hover:border-brand-border/80 hover:bg-brand-primary'
                    }`}
                  >


                    <div className="mb-8 border-b border-brand-border/50 pb-8 flex-grow">
                      {!isHighlighted && plan.label && (
                        <div className="inline-block px-3 py-1 bg-brand-secondary border border-brand-border rounded-full text-xs font-medium text-brand-text-muted mb-4 uppercase tracking-wider">
                          {plan.label}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-1 text-brand-text">{plan.name}</h3>
                      <p className="text-brand-accent text-sm font-semibold uppercase tracking-wide mb-4">
                        {plan.subtitle}
                      </p>
                      <p className="text-base text-brand-text-muted leading-relaxed mb-4">
                        {plan.description}
                      </p>
                      {plan.whoItsFor && (
                         <div className="bg-brand-secondary p-3 rounded-xl border border-brand-border/50 text-sm text-brand-text">
                           <span className="font-semibold block mb-1">Who it's for:</span>
                           {plan.whoItsFor}
                         </div>
                      )}

                      <div className="mt-6 flex flex-col">
                        <span className="text-sm font-medium text-brand-text-muted mb-1 block">Starting at</span>
                        <div className="flex items-baseline text-brand-text">
                          <span className="text-4xl font-extrabold tracking-tight">${plan.basePrice}</span>
                          <span className="text-brand-text-muted ml-2 font-medium text-lg">/ Short</span>
                        </div>
                      </div>

                      <ul className="mt-8 space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <Check
                              className={`w-5 h-5 mr-3 shrink-0 mt-0.5 ${
                                isHighlighted ? 'text-brand-accent' : 'text-brand-text-muted'
                              }`}
                            />
                            <span className={`text-base leading-relaxed ${isHighlighted ? 'text-brand-text' : 'text-brand-text-muted'}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      className={`w-full py-4 rounded-2xl font-bold text-lg text-center transition-all duration-300 active:scale-[0.98] mt-auto ${
                        selectedPlanIndex === index
                          ? 'bg-brand-accent text-brand-primary hover:opacity-95 shadow-[0_0_30px_rgba(212,175,55,0.15)]'
                          : 'bg-brand-secondary border border-brand-border text-brand-text hover:border-brand-accent hover:text-brand-accent'
                      }`}
                      onClick={() => handlePlanClick(index)}
                    >
                      Explore {plan.name.replace('™', '')}
                    </button>
                  </motion.div>
                );
              })}
            </div>

            <div className="max-w-4xl mx-auto mb-20 text-center">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
                <div className="flex items-center gap-2 text-brand-text-muted text-sm font-medium">
                  <Check className="w-4 h-4 text-brand-success shrink-0" />
                  <span>Discovery Call first</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text-muted text-sm font-medium">
                  <Check className="w-4 h-4 text-brand-success shrink-0" />
                  <span>No payment before we talk</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text-muted text-sm font-medium">
                  <Check className="w-4 h-4 text-brand-success shrink-0" />
                  <span>Flexible monthly plans</span>
                </div>
                <div className="flex items-center gap-2 text-brand-text-muted text-sm font-medium">
                  <Check className="w-4 h-4 text-brand-success shrink-0" />
                  <span>Typical onboarding within 48 hours</span>
                </div>
              </div>

              <div className="bg-brand-secondary/50 border border-brand-border rounded-[24px] p-6 sm:p-8">
                <h4 className="text-xl font-bold text-brand-text mb-3">Not sure which package fits best?</h4>
                <p className="text-brand-text-muted text-base mb-4">
                  Every creator has different goals, budgets and publishing schedules.
                </p>
                <p className="text-brand-text-muted text-base">
                  During your Discovery Call we'll help you choose the option that makes the most sense for your workflow. 
                  There's no obligation and no payment before we speak.
                </p>
              </div>
            </div>

                        {currentVol > 50 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto p-10 md:p-16 rounded-[32px] bg-brand-card border border-brand-accent/30 shadow-[0_0_50px_rgba(212,175,55,0.1)] text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6">Enterprise Content System</h3>
            <p className="text-xl md:text-2xl text-brand-text-muted mb-2 font-medium">Need more than 50 Shorts per month?</p>
            <p className="text-lg text-brand-text-muted mb-12">We'll build a custom workflow for your business.</p>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 max-w-3xl mx-auto">
              {['Dedicated Editor', 'Priority Queue', 'Custom Turnaround', 'Slack/WhatsApp Communication', 'Custom Pricing'].map(
                (feature) => (
                  <div key={feature} className="flex items-center gap-3 bg-brand-primary px-5 py-3 rounded-full border border-brand-border">
                    <Check className="w-5 h-5 text-brand-accent shrink-0" />
                    <span className="text-sm font-semibold text-brand-text tracking-wide">{feature}</span>
                  </div>
                )
              )}
            </div>

            <a
              href="#contact"
              className="inline-flex px-10 md:px-14 py-5 md:py-6 rounded-2xl bg-brand-accent text-brand-primary font-bold hover:opacity-95 hover:-translate-y-1 active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all duration-300 text-lg md:text-xl"
            >
              Request Enterprise Quote
            </a>
          </motion.div>
            )}
      </div>

      <AnimatePresence>
        {isModalOpen && selectedPlanIndex !== null && (
          <PricingModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedPlan={plans[selectedPlanIndex]}
            volume={currentVol}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
