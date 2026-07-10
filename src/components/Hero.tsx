import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen pt-40 pb-32 flex items-center overflow-hidden">
      {/* Background elegant gradient/glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" 
      />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-text/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
          className="space-y-10"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-border bg-brand-card/50 text-xs font-semibold text-brand-text-muted shadow-sm tracking-wide">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
            <span className="text-brand-text">Trusted by coaches, consultants & founders.</span>
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.15]">
            Premium Short-Form Editing <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-text to-brand-text-muted">That Builds Authority.</span>
          </h1>

          <p className="text-lg lg:text-xl text-brand-text-muted leading-[1.8] max-w-md">
            A reliable content partner. We transform raw recordings into structured short-form assets that build authority and drive engagement.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
            <a
              href="#contact"
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-brand-accent text-brand-primary font-bold hover:opacity-95 hover:-translate-y-1 active:scale-[0.98] shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.35)] transition-all duration-300 flex items-center justify-center group text-lg"
            >
              Book Discovery Call
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
            <a
              href="#portfolio"
              className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-brand-border bg-brand-card/50 hover:bg-brand-primary hover:border-brand-accent text-brand-text font-semibold active:scale-[0.98] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shadow-none hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] text-lg backdrop-blur-sm"
            >
              View Portfolio
            </a>
          </div>

          <div className="pt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-brand-text-muted">Free Discovery Call</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-brand-text-muted">Up to 10% Volume Savings</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium text-brand-text-muted">No Payment Until You Approve</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative lg:h-[700px] flex items-center justify-center"
        >
          {/* Abstract Portfolio Presentation Mockup */}
          <div className="relative w-full max-w-md h-[650px] rounded-[40px] bg-brand-secondary border border-brand-border shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden group p-2 flex flex-col ring-1 ring-white/5">
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-text/5 to-transparent opacity-50" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-brand-primary rounded-b-2xl z-20" />
            
            <div className="bg-brand-primary w-full h-full rounded-[32px] overflow-hidden p-4 flex flex-col relative z-10 border border-brand-border/50">
              {/* Mock UI Header */}
              <div className="flex justify-between items-center mb-6 mt-4">
                <div className="w-20 h-2 rounded-full bg-brand-text/20" />
                <div className="w-8 h-8 rounded-full border border-brand-border bg-brand-card shadow-inner" />
              </div>

              {/* Grid of 6 placeholders */}
              <div className="grid grid-cols-2 gap-3 flex-grow">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-brand-card rounded-2xl border border-brand-border relative overflow-hidden group/item">
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary to-brand-primary" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-brand-primary/90 border border-brand-border flex items-center justify-center backdrop-blur-md group-hover/item:scale-110 group-hover/item:border-brand-accent/50 transition-all duration-300 shadow-lg">
                        <Play className="w-3.5 h-3.5 text-brand-text-muted ml-0.5 group-hover/item:text-brand-accent transition-colors" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Nav Mock */}
              <div className="mt-6 h-14 rounded-2xl border border-brand-border bg-brand-card/80 backdrop-blur-md flex items-center justify-around px-4 shadow-lg">
                 <div className="w-5 h-5 rounded bg-brand-text-muted/30" />
                 <div className="w-5 h-5 rounded bg-brand-text-muted/30" />
                 <div className="w-6 h-6 rounded bg-brand-accent/50 shadow-[0_0_10px_rgba(212,175,55,0.3)]" />
                 <div className="w-5 h-5 rounded bg-brand-text-muted/30" />
              </div>
            </div>
          </div>

          {/* Floating elements to signify scale/system */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-12 w-32 aspect-square rounded-xl bg-brand-card border border-brand-border shadow-2xl p-4 hidden md:flex flex-col justify-between"
          >
            <div className="w-8 h-8 rounded bg-brand-accent/10 flex items-center justify-center">
              <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="space-y-2">
              <div className="w-full h-2 rounded bg-brand-text/20" />
              <div className="w-2/3 h-2 rounded bg-brand-text/10" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1/4 -right-12 w-40 aspect-[4/3] rounded-xl bg-brand-card border border-brand-border shadow-2xl p-4 hidden md:flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="w-1/2 h-2 rounded bg-brand-text-muted" />
              <div className="w-full h-2 rounded bg-brand-text/20" />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-brand-success/20 flex items-center justify-center">
                <svg className="w-3 h-3 text-brand-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-xs text-brand-text-muted">Approved</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
