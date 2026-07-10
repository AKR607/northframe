import { motion } from 'motion/react';
import { Target, Activity, ShieldCheck, Zap, Crown, BarChart3 } from 'lucide-react';

const reasons = [
  {
    label: 'Strategic Content',
    description: 'We edit with intent. Every cut serves to retain attention and drive your core message forward.',
    icon: Target,
  },
  {
    label: 'Platform-Ready',
    description: 'Content formatted precisely for the unique demands of TikTok, Reels, and YouTube Shorts.',
    icon: Activity,
  },
  {
    label: 'Brand Protection',
    description: 'Rigorous quality checks ensure your visual identity and tone remain consistent.',
    icon: ShieldCheck,
  },
  {
    label: 'Structured Systems',
    description: 'Upload raw files, review seamlessly, and download finalized assets without hassle.',
    icon: Zap,
  },
  {
    label: 'Business Context',
    description: 'Your content is handled by an editor who understands business strategy and marketing.',
    icon: Crown,
  },
  {
    label: 'Data-Driven Choices',
    description: 'We apply insights from top-performing content across your industry to your videos.',
    icon: BarChart3,
  },
];

export function WhyWorkWithUs() {
  return (
    <section className="py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-brand-text mb-6">
            Professional Standards
          </h2>
          <p className="text-brand-text-muted text-xl max-w-2xl mx-auto">
            We operate with a strict process, treating your content as a measurable business asset.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-start text-left p-10 rounded-[32px] bg-brand-card border border-brand-border hover:border-brand-border/80 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-[20px] bg-brand-secondary border border-brand-border flex items-center justify-center mb-8 group-hover:border-brand-accent/50 group-hover:bg-brand-primary transition-all duration-300">
                  <Icon className="w-6 h-6 text-brand-text-muted group-hover:text-brand-accent transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-3">{reason.label}</h3>
                <p className="text-base text-brand-text-muted leading-relaxed">{reason.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
