import { motion } from 'motion/react';
import { Layers, CheckCircle2, Shield, CalendarDays } from 'lucide-react';

const values = [
  {
    title: 'Professional Standards',
    description: 'We answer within 24 hours. No guessing, no delays.',
    icon: CalendarDays,
  },
  {
    title: 'Structured Workflow',
    description: 'Every project follows a strict process from upload to delivery.',
    icon: Layers,
  },
  {
    title: 'Quality Review',
    description: 'Every delivery passes rigorous QA before you ever see it.',
    icon: Shield,
  },
  {
    title: 'Clear Communication',
    description: 'Transparent updates from start to finish. You are always in the loop.',
    icon: CheckCircle2,
  }
];

export function SocialProof() {
  return (
    <section className="py-32 bg-brand-secondary border-y border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Measurable Commitments</h2>
          <p className="text-brand-text-muted text-xl">
            Great editing is only half the equation. The other half is a reliable, professional system that respects your time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="p-8 rounded-[24px] bg-brand-card border border-brand-border hover:border-brand-border/80 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-primary border border-brand-border flex items-center justify-center mb-6 group-hover:border-brand-accent/50 transition-colors">
                  <Icon className="w-6 h-6 text-brand-text-muted group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-brand-text-muted leading-relaxed">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
