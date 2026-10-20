import React, { useState } from 'react';
import { TECHNICAL_CASE_STUDIES } from '../data/portfolioData.ts';
import {
  FileCheck2,
  ExternalLink,
  Target,
  FlaskConical,
  CheckCircle,
  AlertOctagon,
  ShieldAlert,
} from 'lucide-react';

export const TechnicalCaseStudies: React.FC = () => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>('missing-stale-data');

  const activeCase =
    TECHNICAL_CASE_STUDIES.find((cs) => cs.id === selectedCaseId) ||
    TECHNICAL_CASE_STUDIES[0];

  return (
    <section id="case-studies" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
          Empirical Testing & Verification
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          Technical Evaluation Case Studies
        </h2>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
          Structured evaluation protocols designed to stress-test Gemini reasoning, data grounding, and boundary behavior across financial market scenarios. Marked strictly as testing frameworks without fabricated metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (4 cols): Case Study Selector Tabs */}
        <div className="lg:col-span-4 space-y-2">
          <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block px-1 mb-1">
            Evaluation Areas:
          </span>

          {TECHNICAL_CASE_STUDIES.map((cs, idx) => {
            const isSelected = cs.id === selectedCaseId;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setSelectedCaseId(cs.id)}
                className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-slate-900 border-cyan-500/50 text-white shadow-md'
                    : 'bg-slate-950/70 border-slate-800/80 text-slate-400 hover:bg-slate-900/60 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono text-cyan-400 font-semibold">
                    Protocol 0{idx + 1}
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                    {cs.evidenceStatus}
                  </span>
                </div>
                <div className="text-xs font-semibold line-clamp-2">
                  {cs.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column (8 cols): Active Case Study Detailed Specification */}
        <div className="lg:col-span-8 rounded-xl border border-slate-800 bg-slate-900/90 p-6 sm:p-8 space-y-6 shadow-xl">
          
          {/* Header Row: Title, Evidence Status, and Project Reference */}
          <div className="border-b border-slate-800 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-950 border border-slate-700 text-cyan-300">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                Status: {activeCase.evidenceStatus}
              </span>

              {activeCase.evidenceLink && (
                <a
                  href={activeCase.evidenceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 hover:underline"
                >
                  <span>Evidence Reference: HEVORA Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {activeCase.title}
            </h3>
          </div>

          {/* 1. Objective */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              <Target className="w-4 h-4 text-cyan-400" />
              <span>Objective</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
              {activeCase.objective}
            </p>
          </div>

          {/* 2. Test Method */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
              <FlaskConical className="w-4 h-4 text-cyan-400" />
              <span>Test Method</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
              {activeCase.testMethod}
            </p>
          </div>

          {/* 3. Expected Behavior */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Expected Behavior (Evaluation Standard)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-6">
              {activeCase.expectedBehavior}
            </p>
          </div>

          {/* 4. Risk Mitigated */}
          <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="flex items-center gap-2 font-mono font-semibold text-slate-200">
              <AlertOctagon className="w-4 h-4 text-amber-400 shrink-0" />
              <span className="uppercase text-[11px] text-amber-300">Target Risk Mitigated:</span>
            </div>
            <p className="pl-6 text-slate-400 leading-relaxed">
              {activeCase.riskMitigated}
            </p>
          </div>

          {/* 5. Key Verification Criteria */}
          <div className="pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
              Pass / Fail Criteria:
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {activeCase.keyCriteria.map((criterion, cIdx) => (
                <div
                  key={cIdx}
                  className="p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono flex items-start gap-1.5"
                >
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Disclaimer */}
          <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>Framework State: Active Protocol Design</span>
            <span className="text-slate-400">Zero Fabricated Outcomes Policy</span>
          </div>

        </div>

      </div>

    </section>
  );
};
