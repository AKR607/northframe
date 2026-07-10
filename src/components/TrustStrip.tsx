import { motion } from 'motion/react';
import { MessageSquare, Clock, LayoutGrid, Scissors, Handshake, Diamond } from 'lucide-react';

const trustItems = [
  {
    title: 'Response Within 24 Hours',
    description: 'Direct access during business hours. No guessing when you will hear back.',
    icon: MessageSquare,
  },
  {
    title: 'Consistent Delivery',
    description: 'Projects delivered exactly when promised. We respect your publishing schedule.',
    icon: Clock,
  },
  {
    title: 'Dedicated Workflow',
    description: 'A structured system for file sharing, review, and final delivery.',
    icon: LayoutGrid,
  },
  {
    title: 'Clear Revision Process',
    description: 'No endless loops. Structured feedback cycles to get it right efficiently.',
    icon: Scissors,
  },
  {
    title: 'Transparent Communication',
    description: 'You will always know exactly where your project is in the pipeline.',
    icon: Handshake,
  },
  {
    title: 'Quality Standards',
    description: 'Thorough QA on pacing, audio, and captions before every delivery.',
    icon: Diamond,
  },
];

export function TrustStrip() {
  return (
    <section className="py-20 bg-brand-secondary border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col p-6 rounded-[24px] bg-brand-card border border-brand-border hover:border-brand-border/80 hover:-translate-y-1 hover:shadow-xl hover:scale-[1.01] transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center mb-4 group-hover:border-brand-accent/50 transition-colors">
                  <Icon className="w-5 h-5 text-brand-text-muted group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-brand-text mb-2">{item.title}</h3>
                <p className="text-sm text-brand-text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
