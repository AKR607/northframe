import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Can I upgrade later?',
    answer: 'Absolutely. Many of our partners begin with the Starter or Growth system and seamlessly transition to a higher volume plan as their content demands scale. We adapt to your business growth.',
  },
  {
    question: 'Can I request custom packages?',
    answer: 'Yes. We understand that established organizations often have unique volume or formatting requirements. We are happy to discuss and design a bespoke content workflow tailored strictly to your internal processes.',
  },
  {
    question: 'What if I need more than 30 videos?',
    answer: 'For businesses requiring high-volume daily output or multiple channels, we construct dedicated retainer agreements. This ensures consistent capacity, priority delivery, and uninterrupted scale for your brand.',
  },
  {
    question: 'How do revisions work?',
    answer: 'We utilize a streamlined, precise feedback system. Depending on your system tier, you receive one or multiple revision passes. Revisions are executed rapidly to ensure your content is ready for publishing without delay.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">Frequently Asked Questions</h2>
          <p className="text-brand-text-muted text-xl">Clear answers about our workflow and partnership structure.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={false}
                animate={{
                  borderColor: isOpen ? 'rgba(212, 175, 55, 0.4)' : 'rgba(28, 28, 28, 1)',
                  backgroundColor: isOpen ? 'rgba(12, 12, 12, 1)' : 'rgba(17, 17, 17, 1)'
                }}
                transition={{ duration: 0.3 }}
                className="border rounded-[24px] overflow-hidden hover:border-brand-border/80"
              >
                <button
                  className="w-full text-left px-8 py-8 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent group"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="text-xl font-bold text-brand-text pr-8 tracking-tight">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`shrink-0 flex items-center justify-center w-10 h-10 rounded-full border transition-colors ${isOpen ? 'border-brand-accent/40 bg-brand-accent/10 text-brand-accent shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-brand-border bg-brand-secondary text-brand-text-muted group-hover:text-brand-text group-hover:border-brand-text-muted/30'}`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 text-brand-text-muted text-lg leading-[1.8] max-w-2xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
