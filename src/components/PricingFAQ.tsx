import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. As your content volume or production needs grow, you can easily transition to a higher-tier package. We'll adjust your workflow seamlessly without disrupting your current publishing schedule."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, all our plans are flexible month-to-month agreements. There are no long-term contracts or hidden cancellation fees. We believe in earning your business every month."
  },
  {
    question: "Can I request a custom editing style?",
    answer: "Yes. During onboarding, we collect your brand guidelines, past successful videos, and visual references. We tailor the pacing, graphics, and color grading specifically to your brand's unique identity."
  },
  {
    question: "How does onboarding work?",
    answer: "After our Discovery Call, you'll receive a custom onboarding portal. We'll gather your brand assets, establish your preferred style guidelines, and set up your dedicated communication channels—typically completed within 24 hours."
  },
  {
    question: "How quickly can we start?",
    answer: "Once onboarding is complete, you can begin submitting footage immediately. For standard packages, your first edited video will be delivered within 48 hours of submission."
  },
  {
    question: "Do you edit long-form videos?",
    answer: "Yes, we offer premium long-form video editing as a custom service. During your Discovery Call, let us know your requirements, and we'll tailor a production workflow that accommodates both short-form and long-form content."
  }
];

export function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto mb-24">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4 tracking-tight">Frequently Asked Questions</h3>
        <p className="text-brand-text-muted text-lg md:text-xl font-medium max-w-2xl mx-auto">Everything you need to know about our production workflows.</p>
      </div>
      <div className="divide-y divide-brand-border/40">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left py-6 flex items-center justify-between focus:outline-none group"
            >
              <span className={`font-bold text-lg md:text-xl pr-4 transition-colors ${openIndex === index ? 'text-brand-text' : 'text-brand-text/80 group-hover:text-brand-accent'}`}>{faq.question}</span>
              <div className={`shrink-0 flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'rotate-180 text-brand-accent' : 'text-brand-text-muted group-hover:text-brand-accent'}`}>
                {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="pb-8 pt-2 text-brand-text-muted leading-relaxed font-medium text-base md:text-lg">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
