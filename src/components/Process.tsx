import { motion } from 'motion/react';
import { Upload, FileSearch, Scissors, Eye, Check } from 'lucide-react';

const steps = [
  {
    title: 'Send Footage',
    description: 'Drop your raw recordings into your dedicated client portal. We support bulk uploads and organize everything automatically.',
    icon: Upload,
  },
  {
    title: 'Content Review',
    description: 'Our lead editors review the footage to identify the strongest hooks, core messages, and pacing requirements.',
    icon: FileSearch,
  },
  {
    title: 'Professional Editing',
    description: 'The core process. We apply precision cuts, sound design, motion graphics, and premium color grading.',
    icon: Scissors,
  },
  {
    title: 'Review',
    description: 'You receive a notification to review the drafts in Frame.io, allowing for timestamped, frame-accurate feedback.',
    icon: Eye,
  },
  {
    title: 'Final Delivery',
    description: 'Approved assets are exported in optimal formats for all target platforms, ready for immediate publishing.',
    icon: Check,
  },
];

export function Process() {
  return (
    <section id="process" className="py-32 bg-brand-secondary border-y border-brand-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-32 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Our Workflow</h2>
          <p className="text-brand-text-muted text-xl">
            A reliable, frictionless system designed for busy founders. You record, we handle the rest.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line for Mobile / Desktop Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand-border md:-translate-x-1/2" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ margin: "-20% 0px -20% 0px", once: true }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                  } flex-row group`}
                >
                  {/* Timeline Node */}
                  <motion.div 
                    initial={{ backgroundColor: '#111111', borderColor: '#1C1C1C', scale: 0.8 }}
                    whileInView={{ backgroundColor: '#D4AF37', borderColor: '#D4AF37', scale: 1.2, boxShadow: '0 0 20px rgba(212,175,55,0.4)' }}
                    viewport={{ margin: "-30% 0px -30% 0px" }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-8 md:left-1/2 w-4 h-4 border-2 rounded-full md:-translate-x-1/2 z-10 -translate-x-[7px]" 
                  />

                  {/* Connector Line (Desktop) */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-16 h-[2px] bg-brand-border ${isEven ? 'right-1/2 mr-2' : 'left-1/2 ml-2'}`} />

                  {/* Content Box */}
                  <div className={`ml-14 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
                    <div className="bg-brand-primary p-8 md:p-10 rounded-[32px] border border-brand-border hover:border-brand-border/80 transition-all duration-300">
                      <div className="flex items-center space-x-4 md:space-x-5 mb-5 md:mb-6">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-secondary border border-brand-border flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-text" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-brand-text-muted text-base md:text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
