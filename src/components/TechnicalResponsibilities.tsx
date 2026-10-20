import React from 'react';
import { TECHNICAL_RESPONSIBILITIES } from '../data/portfolioData.ts';
import {
  Brain,
  Terminal,
  Database,
  CheckCircle,
  AlertTriangle,
  History,
  Activity,
  Lock,
} from 'lucide-react';

export const TechnicalResponsibilities: React.FC = () => {
  const iconMap: Record<string, any> = {
    'agent-dev-eval': Brain,
    'prompt-engineering': Terminal,
    'data-grounding': Database,
    'market-intel-qa': CheckCircle,
    'hallucination-risk': AlertTriangle,
    'historical-paper-trading': History,
    'reliability-performance': Activity,
    'security-config': Lock,
  };

  return (
    <section id="responsibilities" className="py-16 md:py-24 bg-[#070b16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Institutional AI Engineering
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Technical Responsibilities & Competencies
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            Specific areas of contribution across LLM evaluation, prompt design, financial data grounding, and institutional quality assurance workflows.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECHNICAL_RESPONSIBILITIES.map((resp) => {
            const Icon = iconMap[resp.id] || Brain;

            return (
              <div
                key={resp.id}
                className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-950 text-cyan-400 flex items-center justify-center border border-slate-800">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {resp.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-100 mb-2">
                    {resp.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {resp.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Focus Areas:
                  </span>
                  {resp.focusAreas.map((area, aIdx) => (
                    <div key={aIdx} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                      <span className="text-cyan-400 font-mono">•</span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
