export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-20 border-t border-brand-border bg-brand-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4 col-span-1 md:col-span-2">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-brand-text">Northframe</span>
            <span className="text-brand-accent">.</span>
          </div>
          <p className="text-brand-text-muted text-sm max-w-sm leading-relaxed">
            A premium editing studio partnering with founders, coaches, and consultants to build authoritative content systems.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider">Connect</h4>
          <div className="flex flex-col space-y-3 text-sm text-brand-text-muted">
            <a href="mailto:contact@northframe.com" className="hover:text-brand-accent transition-colors">Email</a>
            <a href="#" className="hover:text-brand-accent transition-colors">Instagram</a>
            <a href="#" className="hover:text-brand-accent transition-colors">LinkedIn</a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="text-sm font-semibold text-brand-text uppercase tracking-wider">Availability</h4>
          <div className="flex flex-col space-y-3 text-sm text-brand-text-muted">
            <p>Mon - Fri, 9AM - 5PM EST</p>
            <p>Guaranteed 24h Response</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted/60 relative">
        <div className="absolute top-0 left-6 right-6 lg:left-12 lg:right-12 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent opacity-50" />
        <div>
          &copy; {year} Northframe Studio. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-accent transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
