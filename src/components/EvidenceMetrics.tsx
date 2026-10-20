import React from 'react';
import { INSTITUTIONAL_METRICS, PORTFOLIO_CONFIG } from '../data/portfolioData.ts';
import {
  BarChart3,
  ExternalLink,
  ShieldAlert,
  Info,
} from 'lucide-react';

export const EvidenceMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 bg-[#070b16] border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold block mb-2">
            07 / Empirical Metrics & Placeholders
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Evidence and Metrics Registry
          </h2>
          <p className="mt-2 text-slate-400 text-sm leading-relaxed">
            In compliance with strict institutional reporting ethics, quantitative performance metrics remain explicitly designated as <span className="font-mono text-cyan-300">"Not provided"</span> until empirical backtest logs and formal regression archives receive compliance release.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {INSTITUTIONAL_METRICS.map((item) => (
            <div
              key={item.key}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase text-slate-400">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                    {item.targetOrBenchmark}
                  </span>
                </div>

                <div className="my-2">
                  <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-300 tracking-tight">
                    {item.value}
                  </div>
                </div>

                <h3 className="text-xs font-bold text-slate-200 mt-2 mb-1">
                  {item.label}
                </h3>

                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Verification State:</span>
                <span className="text-amber-400/80">Pending Publication</span>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence Link & Non-Fabrication Notice */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 text-xs text-slate-300 font-mono">
            <Info className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>
              All empirical testing is hosted in private evaluation testbeds. Real evidence references link to the HEVORA institutional project environment.
            </span>
          </div>

          <a
            href={PORTFOLIO_CONFIG.identity.projectRefUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 hover:bg-cyan-900/50 text-cyan-300 text-xs font-mono font-semibold shrink-0"
          >
            <span>HEVORA Project Reference</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
