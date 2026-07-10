import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';

interface Plan {
  name: string;
  subtitle: string;
  label: string;
  basePrice: number;
  description: string;
  whoItsFor?: string;
  features: string[];
  cta?: string;
  popular: boolean;
}

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPlan: Plan | null;
  volume: number;
}

const industries = [
  'Technology',
  'Finance',
  'Real Estate',
  'Health & Fitness',
  'Education',
  'Entertainment',
  'E-commerce',
  'Other'
];

const contentTypes = [
  'Talking Head',
  'Podcast',
  'Course',
  'Interview',
  'Vlog',
  'Other'
];

export function PricingModal({ isOpen, onClose, selectedPlan, volume }: PricingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    name: '',
    businessName: '',
    email: '',
  });

  // Reset state when modal opens/closes
  if (!isOpen) return null;

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({
        date: '',
        time: '',
        name: '',
        businessName: '',
        email: '',
      });
    }, 300);
  };

  let discount = 0;
  if (volume >= 41 && volume <= 50) discount = 0.10;
  else if (volume >= 31) discount = 0.09;
  else if (volume >= 21) discount = 0.07;
  else if (volume >= 11) discount = 0.05;
  else if (volume >= 6) discount = 0.03;

  const regularMonthlyPrice = selectedPlan ? selectedPlan.basePrice * volume : 0;
  const volumeSavingsAmount = Math.round(regularMonthlyPrice * discount);
  const finalMonthlyInvestment = regularMonthlyPrice - volumeSavingsAmount;

  const handleContinue = () => {
    setStep(2);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleClose}
        className="absolute inset-0 bg-[#000000]/80 backdrop-blur-sm"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-2xl bg-brand-primary border border-brand-border rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-full"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary z-10" />
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border/50 shrink-0">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-brand-text">
              {step === 1 ? 'Review Summary' : step === 2 ? 'Book Discovery Call' : 'Booking Confirmed'}
            </h3>
            {step === 1 && (
              <p className="text-sm text-brand-text-muted mt-1">
                Confirm your package selection before we continue.
              </p>
            )}
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-brand-text-muted hover:text-brand-text bg-brand-secondary rounded-full transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 flex-grow custom-scrollbar">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6 pb-4"
              >
                <div className="rounded-[24px] p-[1px] bg-gradient-to-b from-brand-accent/30 to-brand-border shadow-lg">
                  <div className="bg-[#0C0C0C] rounded-[23px] p-6 sm:p-8 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-accent/5 via-transparent to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <h4 className="text-center text-brand-text-muted text-sm font-semibold uppercase tracking-widest mb-6">
                        Your Monthly Content Plan
                      </h4>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between items-center pb-4 border-b border-brand-border/30">
                          <span className="text-brand-text-muted text-lg">Package</span>
                          <span className="text-xl font-bold text-brand-text">{selectedPlan?.name}</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-brand-border/30">
                          <span className="text-brand-text-muted text-lg">Monthly Shorts</span>
                          <span className="text-xl font-bold text-brand-text">{volume}</span>
                        </div>
                        
                        {discount > 0 && (
                          <div className="pb-4">
                            <div className="bg-brand-success/10 border border-brand-success/20 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-center gap-2">
                              <span className="text-brand-success font-medium text-sm sm:text-base">Your volume qualifies for automatic savings.</span>
                              <div className="flex items-center gap-3">
                                <span className="text-brand-success/80">You Save ({Math.round(discount * 100)}%)</span>
                                <span className="text-xl font-bold text-brand-success">-${volumeSavingsAmount.toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex justify-between items-center pb-4 border-b border-brand-border/30">
                          <span className="text-brand-text-muted text-lg font-medium">Final Monthly Investment</span>
                          <div className="text-right">
                            <span className="text-2xl font-extrabold text-brand-text block">${finalMonthlyInvestment.toLocaleString()}<span className="text-base text-brand-text-muted font-medium ml-1">/month</span></span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-brand-border/30">
                          <span className="text-brand-text-muted text-lg">Delivery Schedule</span>
                          <span className="text-lg font-medium text-brand-text">{volume} Shorts Per Month</span>
                        </div>
                        <div className="flex justify-between items-center pb-4 border-b border-brand-border/30">
                          <span className="text-brand-text-muted text-lg">Revision Policy</span>
                          <span className="text-lg font-medium text-brand-text">{selectedPlan?.features?.[4] || 'Unlimited Revisions'}</span>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-brand-text-muted text-lg">Estimated Start</span>
                          <span className="text-lg font-medium text-brand-text">Within 48 hours</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleSubmit}
                className="space-y-6 pb-4"
              >
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-brand-text mb-3">Your Discovery Call is a free strategy session.</h4>
                  <p className="text-brand-text-muted text-sm sm:text-base mb-6 max-w-lg mx-auto leading-relaxed">
                    We'll understand your goals, recommend the right editing system, and answer every question.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-brand-success font-medium mb-2">
                     <span className="flex items-center justify-center gap-2"><Check className="w-4 h-4"/> No payment.</span>
                     <span className="flex items-center justify-center gap-2"><Check className="w-4 h-4"/> No obligation.</span>
                     <span className="flex items-center justify-center gap-2"><Check className="w-4 h-4"/> No pressure.</span>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brand-text-muted">Select Date</label>
                    <input required type="date" className="w-full p-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-brand-text-muted">Select Time</label>
                    <input required type="time" className="w-full p-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" value={formData.time} onChange={e => setFormData({...formData, time: e.target.value})} />
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-brand-border/50">
                  <label className="block text-sm font-medium text-brand-text-muted">Your Name</label>
                  <input required type="text" className="w-full p-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" placeholder="John Doe" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-brand-text-muted">Business Name</label>
                  <input required type="text" className="w-full p-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" placeholder="Your Company" value={formData.businessName} onChange={e => setFormData({...formData, businessName: e.target.value})} />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-brand-text-muted">Email Address</label>
                  <input required type="email" className="w-full p-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" placeholder="john@company.com" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                </div>
                
                {/* Hidden submit button to trigger form validation on Enter or custom button click */}
                <button type="submit" id="submit-onboarding" className="hidden">Submit</button>
              </motion.form>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8 pb-4 flex flex-col items-center justify-center min-h-[300px]"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-success/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-brand-success/20">
                    <Check className="w-10 h-10 text-brand-success" />
                  </div>
                  <h4 className="text-3xl font-extrabold text-brand-text mb-4">Discovery Call Booked!</h4>
                  <p className="text-brand-text-muted text-lg max-w-sm mx-auto">
                    We've sent a calendar invitation to <strong className="text-brand-text">{formData.email}</strong>. We look forward to speaking with you.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-brand-border/50 shrink-0 bg-brand-primary">
          {step === 1 && (
            <button
              onClick={handleContinue}
              className="w-full py-4 rounded-xl bg-brand-text text-brand-primary font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              Continue to Discovery Call <ArrowRight className="w-5 h-5" />
            </button>
          )}
          {step === 2 && (
            <div className="flex gap-4">
              <button
                onClick={() => setStep(1)}
                className="px-6 py-4 rounded-xl bg-brand-secondary border border-brand-border text-brand-text font-medium hover:border-brand-text-muted transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => {
                  const form = document.getElementById('submit-onboarding') as HTMLButtonElement;
                  if (form) form.click();
                }}
                className="flex-1 py-4 rounded-xl bg-brand-text text-brand-primary font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2"
              >
                Book Discovery Call <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
          {step === 3 && (
            <div className="flex gap-4">
              <button
                onClick={handleClose}
                className="flex-1 py-4 rounded-xl bg-brand-accent text-brand-primary font-bold text-lg hover:opacity-95 shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center gap-2"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
