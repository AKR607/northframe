import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

export function FinalCTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elegant gradient/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl aspect-square bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
              Professional Editing.<br />
              <span className="text-brand-text-muted">Predictable Delivery.</span>
            </h2>
            <p className="text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed">
              If you're looking for a reliable editing partner who understands business content, let's discuss your workflow.
            </p>
          </div>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center px-12 py-5 rounded-2xl bg-brand-accent text-brand-primary font-bold hover:opacity-95 hover:-translate-y-1 active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)] transition-all duration-300 group text-xl"
          >
            Book Discovery Call
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <p className="text-base text-brand-text-muted pt-6">
            No pressure. Just a quick conversation about your content workflow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
