import { useState, useEffect } from 'react';
import { PageLoader } from './components/PageLoader';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithUs } from './components/WhyWorkWithUs';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { SocialProof } from './components/SocialProof';
import { Pricing } from './components/Pricing';
import { Founder } from './components/Founder';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { NotFound } from './components/NotFound';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  if (currentPath !== '/') {
    return (
      <>
        <CustomCursor />
        <NotFound />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-brand-primary text-brand-text selection:bg-brand-accent selection:text-brand-primary font-sans antialiased overflow-x-hidden">
      <CustomCursor />
      <PageLoader />
      <Navigation />
      <main>
        <Hero />
        <TrustStrip />
        <Portfolio />
        <WhyWorkWithUs />
        <Services />
        <Process />
        <SocialProof />
        <Pricing />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
