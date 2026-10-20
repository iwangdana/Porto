import React from 'react';
import { Language } from '../types/portfolio.ts';
import { Award, Zap, Users, BarChart3, ShieldCheck } from 'lucide-react';

interface MetricsStripProps {
  language: Language;
}

export const MetricsStrip: React.FC<MetricsStripProps> = ({ language }) => {
  const metrics = [
    {
      id: 'qa-score',
      icon: Award,
      value: '3.13',
      target: '/ 4.00',
      delta: '+56.5%',
      highlight: true,
      label: {
        id: 'Skor QA AI Speech-to-Speech',
        en: 'Speech-to-Speech AI QA Score',
      },
      detail: {
        id: '72 asesmen turn-level di Outlier AI (Skala 4.00, target benchmark: 2.00).',
        en: '72 turn-level ratings at Outlier AI (4.00 scale, quality target: 2.00).',
      },
    },
    {
      id: 'hevora-status',
      icon: ShieldCheck,
      value: 'HEVORA',
      target: 'AI Eng.',
      delta: 'Active',
      highlight: true,
      label: {
        id: 'Market Intelligence & QA',
        en: 'Market Intelligence & QA',
      },
      detail: {
        id: 'Evaluasi Gemini AI untuk data keuangan, mitigasi halusinasi, dan grounding.',
        en: 'Gemini AI evaluation for financial feeds, hallucination mitigation & grounding.',
      },
    },
    {
      id: 'admin-efficiency',
      icon: Zap,
      value: '+30%',
      target: 'Efisiensi',
      delta: 'Terverifikasi',
      highlight: false,
      label: {
        id: 'Efisiensi Alur Administrasi',
        en: 'Administrative Workflow Lift',
      },
      detail: {
        id: 'Standarisasi database anggota dan sistem kearsipan digital Koperasi.',
        en: 'Standardized member database & digital archival records for Koperasi.',
      },
    },
    {
      id: 'student-engagement',
      icon: Users,
      value: '+30%',
      target: 'Interaktivitas',
      delta: 'Terverifikasi',
      highlight: false,
      label: {
        id: 'Keterlibatan Belajar Digital',
        en: 'Digital Learning Engagement',
      },
      detail: {
        id: 'Modul pelatihan otomotif interaktif & infrastruktur pendukung LMS di LKP.',
        en: 'Interactive automotive digital modules & LMS platforms support at LKP.',
      },
    },
  ];

  return (
    <section className="py-8 bg-slate-900/50 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold">
            {language === 'id' ? 'Kredibilitas & Rekam Jejak Terukur' : 'Proven Track Record & Key Impact Metrics'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.id}
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  metric.highlight
                    ? 'bg-gradient-to-b from-slate-900 to-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl ${
                      metric.highlight
                        ? 'bg-emerald-500/20 text-emerald-400'
                        : 'bg-slate-800 text-slate-300'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`text-xs font-mono px-2 py-0.5 rounded-full font-semibold ${
                      metric.highlight
                        ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/30'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {metric.delta}
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold font-mono tracking-tight text-white tabular-nums">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400 font-medium font-mono">
                    {metric.target}
                  </span>
                </div>

                <h3 className="text-sm font-semibold text-slate-200 mb-1.5">
                  {metric.label[language]}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {metric.detail[language]}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
