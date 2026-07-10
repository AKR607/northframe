import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X } from 'lucide-react';

const cases = [
  {
    title: 'Alex Hormozi Style Concept',
    category: 'Business Coach',
    type: 'Spec Edit',
    overview: 'A demonstration of transforming a static speaking clip into a high-retention asset with dynamic pacing and motion graphics. Re-edited for portfolio demonstration.',
    objective: 'Increase viewer retention, emphasize key takeaways, and match the energy of top-performing industry content.',
    editingFocus: 'Pacing, Motion Graphics, Hook Optimization',
    deliverables: ['1x 60s High-Retention Short', 'Project File', 'Thumbnail'],
    improvements: ['Hook Optimization', 'Professional Captions', 'Retention Editing'],
    software: 'Premiere Pro, After Effects',
    turnaround: '48 Hours',
  },
  {
    title: 'Marketing Strategy Teaser',
    category: 'Marketing Consultant',
    type: 'Concept Edit',
    overview: 'Extracting the most valuable 60 seconds from a 2-hour interview with seamless transitions. Re-edited for portfolio demonstration.',
    objective: 'Deliver a concise, punchy asset perfect for LinkedIn and Twitter audiences.',
    editingFocus: 'Narrative Structure, B-Roll Integration, Sound Design',
    deliverables: ['1x 60s Teaser', 'Transcription', 'SRT File'],
    improvements: ['B-Roll Integration', 'Sound Design', 'Visual Storytelling'],
    software: 'Premiere Pro',
    turnaround: '24 Hours',
  },
  {
    title: 'Sales Mastery Module',
    category: 'Sales Coach',
    type: 'Spec Edit',
    overview: 'Elevating educational content with visual aids and premium color grading to match brand authority. Re-edited for portfolio demonstration.',
    objective: 'Create an authoritative, visually appealing module that justifies premium course pricing.',
    editingFocus: 'Color Grading, Visual Aids, Pacing',
    deliverables: ['1x 3m Educational Module', 'Custom LUT'],
    improvements: ['Retention Editing', 'Motion Graphics', 'Sound Design'],
    software: 'DaVinci Resolve',
    turnaround: '48 Hours',
  },
  {
    title: 'Startup Journey Snapshot',
    category: 'Founder Story',
    type: 'Concept Edit',
    overview: 'A polished, documentary-style short that builds trust and highlights client transformations. Re-edited for portfolio demonstration.',
    objective: 'Elicit an emotional response and build immediate trust with potential investors or clients.',
    editingFocus: 'Documentary Styling, Emotional Pacing, Audio Mixing',
    deliverables: ['1x 90s Documentary Short', 'Audio Mixdown'],
    improvements: ['B-Roll Integration', 'Visual Storytelling', 'Hook Optimization'],
    software: 'Premiere Pro',
    turnaround: '72 Hours',
  },
  {
    title: 'Deep Dive Discussion',
    category: 'Podcast Clip',
    type: 'Spec Edit',
    overview: 'Intensifying emotional impact through strategic sound design and cinematic b-roll integration. Re-edited for portfolio demonstration.',
    objective: 'Design a clip that stops the scroll through superior audio-visual quality.',
    editingFocus: 'Sound Design, Cinematic B-Roll, Captions',
    deliverables: ['1x 60s Podcast Clip', 'Square/Vertical Versions'],
    improvements: ['Sound Design', 'Platform Optimization', 'Professional Captions'],
    software: 'Premiere Pro, Audition',
    turnaround: '24 Hours',
  },
  {
    title: 'Authority Building Asset',
    category: 'Personal Brand',
    type: 'Concept Edit',
    overview: 'A fast-paced, luxury showcase designed to capture attention in the first 3 seconds. Re-edited for portfolio demonstration.',
    objective: 'Position the creator as an elite authority through flawless pacing and aesthetic.',
    editingFocus: 'Hook Retention, Dynamic Transitions',
    deliverables: ['1x 45s Authority Short', 'Thumbnail Concept'],
    improvements: ['Hook Optimization', 'Retention Editing', 'Platform Optimization'],
    software: 'Premiere Pro, After Effects',
    turnaround: '48 Hours',
  },
];

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof cases[0] | null>(null);

  return (
    <section id="portfolio" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">Featured Case Studies</h2>
            <p className="text-brand-text-muted text-lg lg:text-xl leading-[1.8]">
              A selection of editing projects demonstrating storytelling, retention, pacing, and visual communication.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {cases.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative w-full aspect-[4/5] bg-brand-card rounded-[28px] border border-brand-border overflow-hidden mb-6 group-hover:-translate-y-2 group-hover:shadow-[0_15px_50px_rgba(212,175,55,0.2)] group-hover:border-brand-accent group-hover:scale-[1.02] transition-all duration-500 ease-[0.22,1,0.36,1]">
                {/* Video Placeholder Area */}
                <div className="absolute inset-0">
                  {/* Before Section */}
                  <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-brand-secondary border-r border-brand-border/50 flex items-center justify-center transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:w-0 overflow-hidden z-10">
                    <span className="absolute top-4 left-4 text-xs font-medium text-brand-text-muted tracking-widest uppercase bg-brand-primary/80 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap opacity-100 group-hover:opacity-0 transition-opacity duration-500">Before</span>
                    <div className="opacity-30 shrink-0">
                       <Play className="w-8 h-8 text-brand-text-muted" />
                    </div>
                  </div>
                  
                  {/* After Section */}
                  <div className="absolute top-0 bottom-0 right-0 w-1/2 bg-brand-primary flex items-center justify-center overflow-hidden transition-all duration-500 ease-[0.22,1,0.36,1] group-hover:w-full z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-4 right-4 text-xs font-medium text-brand-accent tracking-widest uppercase bg-brand-card/80 border border-brand-accent/20 px-2 py-1 rounded backdrop-blur-sm z-10 whitespace-nowrap">After</span>
                    <div className="opacity-80 group-hover:scale-125 transition-transform duration-500 shrink-0">
                       <Play className="w-10 h-10 text-brand-accent drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 bg-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20 backdrop-blur-[2px]">
                  <span className="px-8 py-4 rounded-full bg-brand-accent text-brand-primary font-bold shadow-[0_10px_30px_rgba(212,175,55,0.3)] translate-y-8 group-hover:translate-y-0 transition-all duration-500 ease-[0.22,1,0.36,1]">
                    View Project Details
                  </span>
                </div>
              </div>

              <div className="space-y-4 flex-grow px-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-brand-accent tracking-widest uppercase bg-brand-accent/10 px-2 py-0.5 rounded border border-brand-accent/20">
                      {project.type}
                    </span>
                    <span className="text-xs font-medium text-brand-text-muted px-2 py-0.5 bg-brand-secondary rounded border border-brand-border">
                      {project.software}
                    </span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  </div>
                </div>
                
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.improvements.map((improvement) => (
                    <span
                      key={improvement}
                      className="text-xs font-medium text-brand-text/80 bg-brand-card px-3 py-1.5 rounded-full border border-brand-border/60"
                    >
                      {improvement}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-brand-primary/90 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl max-h-full overflow-y-auto bg-brand-card border border-brand-border rounded-[28px] shadow-2xl p-6 sm:p-10 z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-brand-secondary hover:bg-brand-border transition-colors text-brand-text-muted hover:text-brand-text"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid lg:grid-cols-2 gap-10">
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-semibold text-brand-accent tracking-widest uppercase bg-brand-accent/10 px-3 py-1 rounded-full border border-brand-accent/20">
                        {selectedProject.type}
                      </span>
                      <span className="text-xs text-brand-text-muted bg-brand-secondary px-3 py-1 rounded-full border border-brand-border">
                        {selectedProject.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-extrabold mb-4">{selectedProject.title}</h3>
                    <p className="text-brand-text-muted leading-relaxed text-lg">
                      {selectedProject.overview}
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-brand-text mb-2 tracking-wide uppercase">Objective</h4>
                      <p className="text-brand-text-muted">{selectedProject.objective}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-brand-text mb-2 tracking-wide uppercase">Editing Focus</h4>
                      <p className="text-brand-text-muted">{selectedProject.editingFocus}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand-border">
                    <div>
                      <h4 className="text-xs font-semibold text-brand-text-muted mb-1 tracking-wide uppercase">Software Used</h4>
                      <p className="text-brand-text font-medium">{selectedProject.software}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-brand-text-muted mb-1 tracking-wide uppercase">Estimated Turnaround</h4>
                      <p className="text-brand-text font-medium">{selectedProject.turnaround}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Before / After Placeholder */}
                  <div className="aspect-[4/5] bg-brand-secondary rounded-2xl border border-brand-border overflow-hidden relative flex">
                     {/* Before */}
                    <div className="w-1/2 h-full border-r border-brand-border relative flex flex-col items-center justify-center p-6 text-center">
                      <span className="absolute top-4 left-4 text-xs font-medium text-brand-text-muted tracking-widest uppercase bg-brand-primary/80 px-3 py-1.5 rounded-md backdrop-blur-sm">Before</span>
                      <Play className="w-12 h-12 text-brand-text-muted/30 mb-4" />
                      <p className="text-sm text-brand-text-muted/60">Original raw footage</p>
                    </div>
                    
                    {/* After */}
                    <div className="w-1/2 h-full bg-brand-primary relative flex flex-col items-center justify-center p-6 text-center">
                      <span className="absolute top-4 right-4 text-xs font-medium text-brand-accent tracking-widest uppercase bg-brand-card/80 border border-brand-accent/20 px-3 py-1.5 rounded-md backdrop-blur-sm">After</span>
                      <Play className="w-12 h-12 text-brand-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.4)] mb-4" />
                      <p className="text-sm text-brand-text-muted">Final optimized asset</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-brand-text mb-3 tracking-wide uppercase">Deliverables</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.deliverables.map((deliverable) => (
                        <span
                          key={deliverable}
                          className="text-sm text-brand-text bg-brand-primary px-3 py-1.5 rounded border border-brand-border"
                        >
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

