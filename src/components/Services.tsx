import { motion } from 'motion/react';

const services = [
  {
    title: 'Pacing & Retention',
    description: 'Structured editing designed to maintain viewer attention without relying on overwhelming effects.',
  },
  {
    title: 'Clean Visuals',
    description: 'Professional motion graphics and readable typography that align with your brand standards.',
  },
  {
    title: 'Hook Optimization',
    description: 'Clear, concise introductions that establish value in the critical first three seconds.',
  },
  {
    title: 'Structured Storytelling',
    description: 'Intentional b-roll and sound design that clarify your message instead of distracting from it.',
  },
  {
    title: 'Long-Form Conversion',
    description: 'Extracting high-value segments from podcasts and interviews into standalone short clips.',
  },
  {
    title: 'Native Formatting',
    description: 'Properly exported files optimized for playback across Shorts, Reels, and TikTok.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-8 sticky top-32">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Capabilities</h2>
            <p className="text-brand-text-muted text-lg lg:text-xl leading-[1.8]">
              Every technique we apply is designed to build trust, retain attention, and drive meaningful business outcomes.
            </p>
            <a
              href="#pricing"
              className="inline-flex items-center space-x-2 text-brand-text hover:text-brand-accent transition-colors font-semibold border-b-2 border-brand-accent/30 hover:border-brand-accent pb-1"
            >
              <span>View our packages</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group p-10 rounded-[32px] bg-brand-card border border-brand-border hover:border-brand-border/80 hover:-translate-y-1 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-border group-hover:bg-brand-accent group-hover:shadow-[0_0_12px_rgba(212,175,55,0.8)] transition-all duration-300 mb-8" />
                <h3 className="text-xl font-bold text-brand-text mb-3">{service.title}</h3>
                <p className="text-base text-brand-text-muted leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
