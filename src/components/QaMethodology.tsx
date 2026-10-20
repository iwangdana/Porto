import React from 'react';
import { QA_METHODOLOGY_STEPS, QA_CRITERIA_EXAMPLES } from '../data/portfolioData.ts';
import {
  GitCommit,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const QaMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-24 bg-[#070b16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            Verification Architecture
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Systematic Quality Assurance Methodology
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            Repeatable six-phase verification pipeline designed to enforce numerical grounding, eradicate hallucinations, and maintain auditability across market intelligence outputs.
          </p>
        </div>

        {/* 6-Phase Process Flow */}
        <div className="mb-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {QA_METHODOLOGY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between relative group hover:border-cyan-500/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      Step 0{step.step}
                    </span>
                    {idx < 5 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 hidden lg:block" />
                    )}
                  </div>
                  <h3 className="text-xs font-bold text-slate-100 mb-1.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[10px] font-mono text-cyan-300">
                  <span className="text-slate-400 block uppercase text-[9px]">Audit Check:</span>
                  {step.keyCheck}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Example Criteria Table */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200 font-mono">
              Evaluation Criteria & Pass / Fail Examples
            </h3>
          </div>

          <div className="space-y-3">
            {QA_CRITERIA_EXAMPLES.map((crit, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-xs font-bold text-white font-mono">
                    {crit.category}
                  </span>
                  <span className="text-[11px] text-slate-400 italic">
                    Rule: {crit.rule}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {/* Pass Example */}
                  <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-semibold text-[10px] uppercase mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Pass Criteria</span>
                    </div>
                    <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                      {crit.passExample}
                    </p>
                  </div>

                  {/* Fail Example */}
                  <div className="p-2.5 rounded bg-rose-950/20 border border-rose-500/30 text-xs">
                    <div className="flex items-center gap-1.5 text-rose-400 font-mono font-semibold text-[10px] uppercase mb-1">
                      <XCircle className="w-3.5 h-3.5" />
                      <span>Defect / Failure</span>
                    </div>
                    <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                      {crit.failExample}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
