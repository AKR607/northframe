import { motion } from 'motion/react';

export function Founder() {
  return (
    <section className="py-32 bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-square md:aspect-[4/5] rounded-[32px] bg-brand-secondary border border-brand-border overflow-hidden lg:scale-[1.05]"
          >
            <img 
              src="https://i.ibb.co/9kzYwLMr/file-00000000e1ec720cab7c1cc56b887f0d.png" 
              alt="Professional Portrait"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10 lg:pl-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-8">Meet Your Editing Partner</h2>
              <div className="w-20 h-1.5 bg-brand-accent rounded-full" />
            </div>
            
            <div className="space-y-8 max-w-2xl">
              <p className="text-xl lg:text-2xl text-brand-text font-medium leading-[1.6]">
                As a business owner, you don't just need an editor. You need a reliable partner who understands digital marketing and brand voice.
              </p>
              <p className="text-brand-text-muted text-lg lg:text-xl leading-[1.8]">
                My focus is building long-term, frictionless relationships. From raw footage to final delivery, every step is organized and predictable.
              </p>
            </div>

            <div className="pt-6">
              <p className="text-2xl font-bold tracking-tight text-brand-text">— Aman Joshi</p>
              <p className="text-brand-text-muted text-sm uppercase tracking-widest mt-2 font-medium">Founder • Video Editor • Business Content Specialist</p>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-6 border-t border-brand-border/50">
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                 <span className="text-xs font-semibold text-brand-text tracking-wide uppercase">Replies Within 24 Hours</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                 <span className="text-xs font-semibold text-brand-text tracking-wide uppercase">Works Directly With Every Client</span>
              </div>
              <div className="flex items-center gap-3">
                 <div className="w-2.5 h-2.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(212,175,55,0.5)]" />
                 <span className="text-xs font-semibold text-brand-text tracking-wide uppercase">Structured Workflow</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
