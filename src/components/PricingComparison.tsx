import { Check, Minus } from 'lucide-react';
import { motion } from 'motion/react';

export function PricingComparison() {
  const features = [
    { name: 'Professional Story Editing', launch: true, scale: true, authority: true },
    { name: 'Dynamic Captions', launch: true, scale: true, authority: true },
    { name: 'Color Grading', launch: true, scale: true, authority: true },
    { name: 'Audio Enhancement', launch: true, scale: true, authority: true },
    { name: 'Basic Motion Graphics', launch: true, scale: true, authority: true },
    { name: 'Licensed Music', launch: true, scale: true, authority: true },
    { name: 'Advanced Motion Graphics', launch: false, scale: true, authority: true },
    { name: 'Hook Optimization', launch: false, scale: true, authority: true },
    { name: 'Premium B-Roll Research', launch: false, scale: true, authority: true },
    { name: 'Animated Captions', launch: false, scale: true, authority: true },
    { name: 'Brand Consistency', launch: false, scale: true, authority: true },
    { name: 'Cinematic Editing', launch: false, scale: false, authority: true },
    { name: 'Custom Animation', launch: false, scale: false, authority: true },
    { name: 'Premium Sound Design', launch: false, scale: false, authority: true },
    { name: 'Thumbnail Design', launch: false, scale: false, authority: true },
    { name: 'Creative Strategy', launch: false, scale: false, authority: true },
    { name: 'Dedicated Editor', launch: true, scale: true, authority: true },
    { name: 'Project Manager', launch: false, scale: false, authority: true },
    { name: 'Priority Delivery', launch: false, scale: true, authority: true },
    { name: 'Revision Policy', launch: '1 Pass', scale: '2 Passes', authority: 'Unlimited Minor' },
    { name: 'Turnaround', launch: '48 Hours', scale: '48 Hours', authority: 'Fastest' },
  ];

  return (
    <div className="max-w-5xl mx-auto mb-24 overflow-hidden hidden md:block">
      <div className="text-center mb-16">
        <h3 className="text-4xl md:text-5xl font-extrabold text-brand-text mb-4 tracking-tight">Compare Systems</h3>
        <p className="text-brand-text-muted text-lg md:text-xl font-medium max-w-2xl mx-auto">A detailed breakdown of what's included in each workflow.</p>
      </div>
      <div className="bg-brand-primary/40 border border-brand-border rounded-[32px] p-10 lg:p-14 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent"></div>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="py-8 font-semibold text-brand-text-muted text-lg w-[35%] align-bottom pb-10">Features</th>
              <th className="py-8 font-bold text-brand-text text-xl w-[21%] text-center align-bottom pb-10">Launch</th>
              <th className="py-8 text-center w-[23%] align-bottom relative">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-accent/[0.08] to-brand-accent/[0.02] border-x border-t border-brand-accent/30 rounded-t-[24px] border-b-0 pointer-events-none"></div>
                <div className="absolute top-0 inset-x-0 h-[3px] bg-brand-accent rounded-t-[24px] pointer-events-none shadow-[0_0_20px_rgba(212,175,55,0.4)]"></div>
                <div className="relative z-10 pb-10 pt-4">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-[10px] font-bold text-brand-accent uppercase tracking-wider mb-4 shadow-[0_0_10px_rgba(212,175,55,0.1)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    Most Popular
                  </div>
                  <div className="font-extrabold text-brand-text text-2xl tracking-tight">Scale</div>
                </div>
              </th>
              <th className="py-8 font-bold text-brand-text text-xl w-[21%] text-center align-bottom pb-10">Authority</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-brand-border/40">
            {features.map((feature, idx) => (
              <tr key={idx} className="group">
                <td className="py-5 font-medium text-brand-text-muted group-hover:text-brand-text transition-colors">{feature.name}</td>
                <td className="py-5 text-center">
                  {typeof feature.launch === 'boolean' ? (
                    feature.launch ? <Check className="w-5 h-5 text-brand-text/70 mx-auto" /> : <Minus className="w-5 h-5 text-brand-border mx-auto" />
                  ) : (
                    <span className="text-sm font-medium text-brand-text/70">{feature.launch}</span>
                  )}
                </td>
                <td className="py-5 text-center relative">
                  <div className="absolute inset-0 bg-brand-accent/[0.02] border-x border-brand-accent/30 pointer-events-none transition-colors group-hover:bg-brand-accent/[0.05]"></div>
                  <div className="relative z-10">
                    {typeof feature.scale === 'boolean' ? (
                      feature.scale ? <Check className="w-6 h-6 text-brand-accent mx-auto drop-shadow-[0_0_8px_rgba(212,175,55,0.4)]" /> : <Minus className="w-5 h-5 text-brand-border mx-auto" />
                    ) : (
                      <span className="text-sm font-bold text-brand-accent">{feature.scale}</span>
                    )}
                  </div>
                </td>
                <td className="py-5 text-center">
                  {typeof feature.authority === 'boolean' ? (
                    feature.authority ? <Check className="w-5 h-5 text-brand-text/70 mx-auto" /> : <Minus className="w-5 h-5 text-brand-border mx-auto" />
                  ) : (
                    <span className="text-sm font-medium text-brand-text/70">{feature.authority}</span>
                  )}
                </td>
              </tr>
            ))}
            <tr>
              <td className="py-3"></td>
              <td className="py-3"></td>
              <td className="py-3 relative h-8">
                 <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/[0.08] to-brand-accent/[0.02] border-x border-b border-brand-accent/30 rounded-b-[24px] pointer-events-none"></div>
              </td>
              <td className="py-3"></td>
            </tr>
          </tbody>
        </table>
      </div>
      

    </div>
  );
}
