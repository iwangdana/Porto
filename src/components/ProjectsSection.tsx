import React, { useState } from 'react';
import { Language, FeaturedProject } from '../types/portfolio.ts';
import { FEATURED_PROJECTS } from '../data/portfolioData.ts';
import {
  FolderGit2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  X,
  Target,
  Layers,
  FileCode,
} from 'lucide-react';

interface ProjectsSectionProps {
  language: Language;
  onOpenSandbox: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  language,
  onOpenSandbox,
}) => {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);

  return (
    <section id="projects" className="py-16 md:py-24 bg-slate-900/40 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            {language === 'id' ? 'Koleksi Portofolio Unggulan' : 'Featured Case Studies & Systems'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {language === 'id'
              ? 'Proyek Unggulan & Studi Kasus Terapan'
              : 'Featured Projects & Applied Case Studies'}
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            {language === 'id'
              ? 'Implementasi nyata dari evaluasi AI pasar institusional di HEVORA, audit Speech-to-Speech LLM di Outlier AI, infrastruktur data kearsipan desa, dan modul edukasi interaktif.'
              : 'Applied engineering case studies spanning institutional financial AI at HEVORA, Speech-to-Speech LLM auditing at Outlier AI, rural data infrastructure, and interactive courseware engines.'}
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const isHevora = project.id === 'hevora-intelligence';
            const isAiEval = isHevora || project.id === 'speech-to-speech-eval';

            return (
              <div
                key={project.id}
                className={`group rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isHevora
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#061022] border-cyan-500/40 hover:border-cyan-400/80 shadow-xl shadow-cyan-950/30'
                    : isAiEval
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-emerald-500/40 hover:border-emerald-400/80 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-900/80 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Category Pill and Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-1 rounded-md flex items-center gap-1.5 ${
                        isHevora
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                          : isAiEval
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}
                    >
                      {isAiEval && <Sparkles className="w-3.5 h-3.5 text-current" />}
                      {project.category}
                    </span>

                    {project.badge && (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title[language]}
                  </h3>

                  {/* Overview */}
                  <p className="text-slate-300 text-sm leading-relaxed mt-2.5 mb-5 line-clamp-3">
                    {project.overview[language]}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 mb-5">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center">
                        <div className="text-xs sm:text-sm font-mono font-extrabold text-emerald-400 truncate">
                          {metric.value}
                        </div>
                        <div className="text-[10px] text-slate-400 truncate mt-0.5">
                          {metric.label[language]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      <span>{language === 'id' ? 'Detail Kasus & Metrik' : 'Case Study Details'}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/40 text-cyan-300 text-xs font-semibold transition-colors"
                        >
                          <span>{language === 'id' ? 'Buka Web' : 'Live URL'}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}

                      {isAiEval && !project.link && (
                        <button
                          type="button"
                          onClick={onOpenSandbox}
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-semibold transition-colors cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{language === 'id' ? 'Uji Sandbox' : 'Sandbox Demo'}</span>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Deep Dive Project Case Study */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
            <div
              className="relative w-full max-w-3xl rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Category & Title */}
              <div className="mb-4 pr-10">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 inline-block mb-2">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {activeProject.title[language]}
                </h3>
              </div>

              {/* Modal Overview */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-300 text-sm leading-relaxed mb-6">
                {activeProject.overview[language]}
              </div>

              {/* Metrics Grid */}
              <div className="mb-6">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Metrik Performa Kunci:' : 'Key Performance Metrics:'}</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {activeProject.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-center"
                    >
                      <div className="text-base font-extrabold text-emerald-400 font-mono">
                        {m.value}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">
                        {m.label[language]}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodology */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-cyan-400" />
                  <span>{language === 'id' ? 'Metodologi & Pendekatan Teknis:' : 'Engineering Methodology:'}</span>
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-slate-800">
                  {activeProject.methodology[language]}
                </p>
              </div>

              {/* Impact */}
              <div className="mb-6 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{language === 'id' ? 'Dampak Nyata (Measurable Impact):' : 'Measurable Impact:'}</span>
                </h4>
                <p className="text-sm text-emerald-200/90 leading-relaxed bg-emerald-950/30 p-4 rounded-xl border border-emerald-500/30">
                  {activeProject.impact[language]}
                </p>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  {activeProject.link && (
                    <a
                      href={activeProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition-colors"
                    >
                      <span>{language === 'id' ? 'Kunjungi Web Proyek' : 'Visit Live Project'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveProject(null)}
                    className="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {language === 'id' ? 'Tutup' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
