import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Minus, Plus } from 'lucide-react';
import { PricingModal } from './PricingModal';
import { PricingComparison } from './PricingComparison';
import { PricingFAQ } from './PricingFAQ';

const plans = [
  {
    name: 'Launch™',
    subtitle: 'Professional Editing',
    label: 'FOUNDATION WORKFLOW',
    basePrice: 99,
    description: 'A streamlined editing workflow for creators building a consistent publishing system.',
    whoItsFor: 'Creators beginning a consistent publishing workflow.',
    features: [
      'Professional Story Editing',
      'Dynamic Captions',
      'Color Grading',
      'Audio Enhancement',
      'Basic Motion Graphics',
      'Licensed Music',
      '1 Revision',
      'Dedicated Editor',
      '48-Hour Turnaround'
    ],
    popular: false,
  },
  {
    name: 'Scale™',
    subtitle: 'Growth Editing',
    label: 'MOST POPULAR',
    basePrice: 149,
    description: 'An elevated editing system designed for brands focused on audience growth and consistency.',
    whoItsFor: 'Brands and creators actively scaling content.',
    features: [
      'Everything in Launch +',
      'Advanced Motion Graphics',
      'Hook Optimization',
      'Premium B-roll Research',
      'Dynamic Animated Captions',
      'Brand Style Consistency',
      'Priority Delivery',
      '2 Revisions',
      'Dedicated Monthly Workflow'
    ],
    popular: true,
  },
  {
    name: 'Authority™',
    subtitle: 'Elite Editing',
    label: 'COMPREHENSIVE WORKFLOW',
    basePrice: 249,
    description: 'A premium creative partnership built for brands demanding cinematic quality and maximum production value.',
    whoItsFor: 'Established businesses requiring premium creative execution.',
    features: [
      'Everything in Scale +',
      'Cinematic Editing',
      'Custom Animations',
      'Premium Sound Design',
      'Thumbnail Design',
      'Creative Strategy Support',
      'Dedicated Project Manager',
      'Unlimited Minor Revisions',
      'Fastest Turnaround'
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


  const getHelperBannerText = (vol: number) => {
    let plan = "Launch";
    let desc = "This volume allows for a streamlined production workflow, keeping the process simple while leaving room to scale.";
    
    if (vol >= 30) {
      plan = "Authority";
      desc = "Higher publishing frequencies benefit from a more structured editing workflow and dedicated creative resources.";
    } else if (vol >= 10) {
      plan = "Scale";
      desc = "This volume requires a balanced production workflow designed to support consistent, reliable content creation.";
    }

    return <>
      <span className="block mb-2 text-brand-text font-medium text-lg">For a publishing rhythm of {vol} Shorts each month, <strong className="text-brand-accent">{plan}</strong> is a strong fit.</span>
      <span className="text-brand-text-muted text-base block">{desc}</span>
    </>;
  };

  const recommendedIndex = getRecommendedPlanIndex();

  const handlePlanClick = (index: number) => {
    setSelectedPlanIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="pricing" className="py-32 bg-brand-secondary border-y border-brand-border relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-brand-text">Investment</h2>
          <p className="text-brand-text-muted text-xl lg:text-2xl max-w-2xl mx-auto">
            Transparent, predictable pricing for premium video editing.
          </p>
        </div>

        {/* Volume Selector */}
        <div className="mb-20 bg-brand-primary border border-brand-border rounded-[32px] p-8 md:p-12 text-center max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-border to-transparent" />
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-text">About how many Shorts do you usually publish each month?</h3>
          <p className="text-brand-text-muted text-base mb-10">
            Higher monthly content volume automatically unlocks better pricing.
          </p>

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
            <span className="text-xs font-bold text-brand-text-muted uppercase tracking-widest block mb-6">OR adjust manually</span>
            <div className="flex justify-center">
              <div className="inline-flex items-center p-2.5 bg-brand-primary/50 rounded-2xl border border-brand-border/60 shadow-inner max-w-full overflow-hidden">
                <button
                  onMouseDown={() => startContinuous('dec')}
                  onMouseUp={stopContinuous}
                  onMouseLeave={stopContinuous}
                  onTouchStart={(e) => { e.preventDefault(); startContinuous('dec'); }}
                  onTouchEnd={(e) => { e.preventDefault(); stopContinuous(); }}
                  disabled={currentVol <= 1 && volume !== ''}
                  className="w-16 h-16 shrink-0 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-50 disabled:hover:border-brand-border disabled:hover:text-brand-text active:scale-95 touch-manipulation select-none"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-6 h-6" />
                </button>
                <div className="w-64 mx-2 md:mx-4 text-center shrink">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    
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
                  className="w-16 h-16 shrink-0 rounded-xl bg-brand-secondary border border-brand-border flex items-center justify-center hover:border-brand-accent hover:text-brand-accent transition-colors disabled:opacity-50 disabled:hover:border-brand-border disabled:hover:text-brand-text active:scale-95 touch-manipulation select-none"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>


        {currentVol > 0 && currentVol <= 50 && (
          <div className="max-w-3xl mx-auto mb-20 text-center">
            <div className="inline-block bg-brand-primary/30 border border-brand-border/60 shadow-xl rounded-[24px] p-8 sm:px-12 backdrop-blur-sm">
              {getHelperBannerText(currentVol)}
              <div className="mt-6 pt-6 border-t border-brand-border/40 space-y-5">
                <p className="text-brand-text-muted text-sm font-medium">
                  You can choose any package below. The suggestion is based only on your estimated monthly publishing volume.
                </p>
                <button 
                  onClick={() => {
                    const planCards = plansContainerRef.current?.children;
                    if (planCards && recommendedIndex !== null && planCards[recommendedIndex]) {
                      const targetCard = planCards[recommendedIndex] as HTMLElement;
                      const rect = targetCard.getBoundingClientRect();
                      const isFullyVisible = (
                        rect.top >= 0 &&
                        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                      );
                      
                      if (!isFullyVisible) {
                        targetCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
                      }
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm text-brand-accent hover:text-brand-accent/80 font-bold tracking-wide transition-colors"
                >
                  View Suggested Plan ↓
                </button>
              </div>
            </div>
          </div>
        )}
            <div className="max-w-6xl mx-auto mb-20 text-center px-4">
            <h4 className="text-xl font-medium text-brand-text-muted mb-8 tracking-wide uppercase text-sm">Every plan includes</h4>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {['Dedicated Editor', '48-Hour Turnaround', 'Flexible Monthly Scaling', 'Secure File Delivery', 'Commercial Usage Rights', 'Discovery Call Before Payment'].map((trustItem, i) => (
                <div key={i} className="flex items-center gap-2 text-brand-text text-sm md:text-base font-semibold">
                  <Check className="w-5 h-5 text-brand-accent shrink-0" />
                  <span>{trustItem}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={plansContainerRef} className="grid lg:grid-cols-3 gap-8 items-stretch max-w-7xl mx-auto mb-20">
              {plans.map((plan, index) => {
                const isRecommended = recommendedIndex === index;

                return (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex flex-col p-8 md:p-10 rounded-[32px] transition-all duration-500 group cursor-pointer ${
                      isRecommended
                        ? 'bg-gradient-to-b from-brand-primary to-brand-primary/90 border border-brand-accent/50 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_30px_rgba(212,175,55,0.15)] z-10 scale-[1.02] md:scale-[1.04]'
                        : 'bg-brand-primary/20 border border-brand-border/40 hover:border-brand-border/80 hover:bg-brand-primary/40 shadow-xl'
                    }`}
                  >
                    {isRecommended && (
                      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
                    )}


                    <div className="mb-8 border-b border-brand-border/50 pb-8 flex-grow">
                      {plan.popular && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-brand-accent/20 to-brand-accent/5 border border-brand-accent/30 rounded-full text-xs font-bold text-brand-accent mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                          {plan.label}
                        </div>
                      )}
                      <h3 className={`text-3xl font-extrabold mb-1 tracking-tight ${isRecommended ? 'text-brand-text' : 'text-brand-text/90'}`}>{plan.name}</h3>
                      <p className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-6">
                        {plan.subtitle}
                      </p>
                      <p className="text-sm md:text-base text-brand-text-muted leading-relaxed mb-6 font-medium">
                        {plan.description}
                      </p>
                      {plan.whoItsFor && (
                         <div className="bg-brand-card/50 p-4 rounded-2xl border border-brand-border/30 text-sm text-brand-text/80 leading-relaxed font-medium">
                           <span className="font-bold text-brand-text block mb-1">Who it's for:</span>
                           {plan.whoItsFor}
                         </div>
                      )}

                      <div className="mt-8 pt-8 border-t border-brand-border/30 flex flex-col">
                        <span className="text-xs font-bold text-brand-text-muted mb-2 uppercase tracking-widest">Starting at</span>
                        <div className="flex items-baseline text-brand-text mb-4">
                          <span className="text-5xl font-extrabold tracking-tighter">${plan.basePrice}</span>
                          <span className="text-brand-text-muted ml-2 font-medium text-lg">/ Short</span>
                        </div>
                        <div className="flex flex-col gap-2 text-xs font-medium text-brand-text-muted/80">
                          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent/60"/>Included in Monthly Content System</span>
                          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent/60"/>No upfront payment</span>
                          <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent/60"/>Discovery Call first</span>
                        </div>
                      </div>

                      <div className="mt-8 pt-8 border-t border-brand-border/30">
                        <span className="text-xs font-bold text-brand-text-muted mb-6 block uppercase tracking-widest">What's Included</span>
                        <ul className="space-y-4">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start group/feature">
                              <Check
                                className={`w-5 h-5 mr-3 shrink-0 mt-0.5 transition-colors ${
                                  isRecommended ? 'text-brand-accent' : 'text-brand-text-muted group-hover/feature:text-brand-accent/70'
                                }`}
                              />
                              <span className={`text-sm md:text-base font-medium leading-snug ${isRecommended ? 'text-brand-text' : 'text-brand-text/70'}`}>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-auto pt-10">
                      <button
                        className={`w-full py-4 rounded-xl font-bold text-base md:text-lg text-center transition-all duration-300 active:scale-[0.98] ${
                          isRecommended
                            ? 'bg-brand-accent text-brand-primary hover:opacity-90 shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)]'
                            : 'bg-brand-card border border-brand-border/60 text-brand-text hover:border-brand-accent/50 hover:bg-brand-accent/5'
                        }`}
                        onClick={() => handlePlanClick(index)}
                      >
                        Book Discovery Call
                      </button>
                      <div className="mt-4 flex flex-col gap-1 text-xs text-brand-text-muted/70 text-center font-medium">
                        <span>No payment today</span>
                        <span>Free strategy session</span>
                        <span>No obligation</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

                        
      
      <PricingComparison />
      <PricingFAQ />
            <div className="max-w-4xl mx-auto mt-32 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[32px] overflow-hidden p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-brand-primary border border-brand-border/50 rounded-[32px] pointer-events-none"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-5xl font-extrabold text-brand-text mb-6 tracking-tight leading-tight max-w-3xl mx-auto">
              Ready to Build Content That Actually Grows Your Brand?
            </h3>
            <p className="text-xl md:text-2xl text-brand-text-muted mb-10 font-medium max-w-2xl mx-auto leading-relaxed">
              Let's discuss your goals and build the right editing system for your business.
            </p>
            
            <div className="flex flex-col items-center justify-center">
              <button
                onClick={() => { setSelectedPlanIndex(0); setIsModalOpen(true); }}
                className="inline-flex items-center justify-center px-10 py-5 md:px-14 md:py-6 rounded-xl bg-brand-accent text-brand-primary font-bold hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-300 text-lg w-full sm:w-auto mb-6"
              >
                Book Discovery Call
              </button>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm font-medium text-brand-text-muted">
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-success" /> No payment today</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-success" /> Free strategy session</span>
                <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-success" /> No obligation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {currentVol > 50 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto p-12 md:p-20 rounded-[32px] bg-gradient-to-b from-brand-primary to-brand-primary/90 border border-brand-accent/40 shadow-[0_20px_50px_rgba(0,0,0,0.5),0_0_40px_rgba(212,175,55,0.15)] text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand-accent to-transparent" />
            
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4 tracking-tight">Enterprise System</h3>
              <p className="text-xl md:text-2xl text-brand-text-muted mb-2 font-medium">Need more than 50 Shorts per month?</p>
              <p className="text-base md:text-lg text-brand-text-muted/80 mb-12">We'll build a custom production workflow tailored to your business.</p>
  
              <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-16 max-w-3xl mx-auto">
                {['Dedicated Production Team', 'Priority Queue', 'Custom Turnaround', 'Slack Communication', 'Custom Pricing'].map(
                  (feature) => (
                    <div key={feature} className="flex items-center gap-2.5 bg-brand-card/50 px-5 py-3 rounded-full border border-brand-border/60 shadow-sm">
                      <Check className="w-5 h-5 text-brand-accent shrink-0" />
                      <span className="text-sm font-bold text-brand-text/90 tracking-wide">{feature}</span>
                    </div>
                  )
                )}
              </div>
  
              <a
                href="#contact"
                className="inline-flex px-10 md:px-14 py-5 md:py-6 rounded-xl bg-brand-accent text-brand-primary font-bold hover:opacity-90 shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_30px_rgba(212,175,55,0.3)] transition-all duration-300 text-lg md:text-xl active:scale-[0.98]"
              >
                Request Enterprise Quote
              </a>
            </div>
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
