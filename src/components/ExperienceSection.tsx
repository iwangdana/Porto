import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import { WORK_EXPERIENCES } from '../data/portfolioData.ts';
import {
  Briefcase,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  Sparkles,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

interface ExperienceSectionProps {
  language: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>('hevora-technologies');

  const filterOptions = [
    {
      id: 'all',
      label: language === 'id' ? 'Semua Pengalaman' : 'All Roles',
    },
    {
      id: 'ai-finance',
      label: language === 'id' ? 'HEVORA AI (Aktif)' : 'HEVORA AI (Active)',
    },
    {
      id: 'ai-eval',
      label: language === 'id' ? 'Evaluasi AI (Outlier)' : 'AI Evaluation (Outlier)',
    },
    {
      id: 'data-admin',
      label: language === 'id' ? 'Sistem & Data' : 'Data & Systems',
    },
    {
      id: 'lms-instruction',
      label: language === 'id' ? 'LMS & Edukasi' : 'LMS & EdTech',
    },
  ];

  const filteredExperiences = WORK_EXPERIENCES.filter((exp) => {
    if (selectedFilter === 'all') return true;
    return exp.category === selectedFilter;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
          {language === 'id' ? 'Riwayat Karier Profesional' : 'Professional Work History'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Pengalaman Kerja & Tanggung Jawab Nyata'
            : 'Work Experience & Quantifiable Impact'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Rekam jejak spesifik dalam evaluasi kecerdasan buatan di HEVORA Technologies & Outlier AI, arsitektur data administrasi terstandarisasi, dan modul pembelajaran digital.'
            : 'Demonstrated track record spanning AI Engineering at HEVORA Technologies, Speech-to-Speech LLM evaluation at Outlier AI, data systems integrity, and interactive learning media.'}
        </p>
      </div>

      {/* Category Filter Chips */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            type="button"
            onClick={() => setSelectedFilter(opt.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedFilter === opt.id
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-2 ring-emerald-500/50'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-8">
        {filteredExperiences.map((exp) => {
          const isExpanded = expandedId === exp.id;
          const isCurrentHevora = exp.id === 'hevora-technologies';
          const isAi = exp.category === 'ai-finance' || exp.category === 'ai-eval';

          return (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              {/* Dot marker on timeline */}
              <div
                className={`absolute -left-[17px] top-6 w-8 h-8 rounded-full border-4 border-slate-950 flex items-center justify-center transition-transform group-hover:scale-110 ${
                  isCurrentHevora
                    ? 'bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/40 ring-2 ring-cyan-400/50'
                    : isAi
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/40'
                    : 'bg-slate-700 text-slate-300'
                }`}
              >
                {isAi ? <Sparkles className="w-4 h-4 fill-current" /> : <Briefcase className="w-3.5 h-3.5" />}
              </div>

              {/* Experience Card */}
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  isCurrentHevora
                    ? 'bg-gradient-to-br from-slate-900 via-slate-900/95 to-[#061020] border-cyan-500/40 shadow-xl shadow-cyan-950/30'
                    : isAi
                    ? 'bg-gradient-to-br from-slate-900/90 via-slate-900 to-slate-950 border-emerald-500/40 shadow-xl shadow-emerald-950/20'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Card Top Content */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      {exp.badge && (
                        <span
                          className={`inline-block text-[11px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full mb-2 ${
                            isCurrentHevora
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40'
                              : isAi
                              ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                              : 'bg-slate-800 text-slate-300 border border-slate-700'
                          }`}
                        >
                          {exp.badge}
                        </span>
                      )}

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role[language]}
                      </h3>

                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-emerald-400 font-semibold text-base">
                          {exp.company}
                        </span>

                        {exp.projectRefUrl && (
                          <a
                            href={exp.projectRefUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 font-mono underline decoration-cyan-500/40 hover:decoration-cyan-400 ml-1"
                          >
                            <span>
                              {language === 'id' ? 'Buka Proyek' : 'View Project'}
                            </span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Metadata: Period & Location */}
                    <div className="flex flex-col sm:items-end text-xs text-slate-400 gap-1 font-mono">
                      <div className="flex items-center gap-1.5 text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{exp.period[language]}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                    {exp.summary[language]}
                  </p>

                  {/* Expand / Collapse Details Button */}
                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.slice(0, 3).map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                      {exp.skills.length > 3 && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md text-slate-400">
                          +{exp.skills.length - 3} {language === 'id' ? 'lainnya' : 'more'}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleExpand(exp.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                      aria-expanded={isExpanded}
                    >
                      <span>
                        {isExpanded
                          ? language === 'id'
                            ? 'Sembunyikan Rincian'
                            : 'Hide Details'
                          : language === 'id'
                          ? 'Lihat Rincian Tugas'
                          : 'View Responsibilities'}
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Detailed Responsibilities */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-3 border-t border-slate-800/60 bg-slate-950/50 rounded-b-2xl space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                      {language === 'id'
                        ? 'Uraian Tanggung Jawab & Cakupan Kerja:'
                        : 'Core Responsibilities & Technical Scope:'}
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.bulletPoints.map((bp, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bp[language]}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold block mb-2">
                        {language === 'id'
                          ? 'Kompetensi & Teknologi Terpakai:'
                          : 'Technologies & Applied Skills:'}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs px-2.5 py-1 rounded-lg bg-slate-800/90 text-emerald-300 border border-slate-700/80 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
