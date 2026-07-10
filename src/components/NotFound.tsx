import { motion } from 'motion/react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-brand-primary text-brand-text flex items-center justify-center overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[150px] pointer-events-none" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center z-10 space-y-8"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-brand-text">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-brand-text-muted">Looks like this page got lost.</h2>
        <a
          href="/"
          className="inline-flex items-center justify-center px-10 py-5 rounded-2xl bg-brand-accent text-brand-primary font-bold hover:opacity-90 hover:-translate-y-1 active:scale-[0.98] shadow-[0_0_40px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_50px_rgba(212,175,55,0.3)] transition-all duration-300 group text-lg mt-8"
        >
          Back to Homepage
        </a>
      </motion.div>
    </div>
  );
}
