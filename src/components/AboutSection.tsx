import React from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import {
  SearchCheck,
  Code2,
  Database,
  AlertOctagon,
  CheckCircle,
  Cpu,
  Sparkles,
  ExternalLink,
} from 'lucide-react';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const pillars = [
    {
      title: {
        id: 'Evaluasi Perilaku & Penalaran Model AI',
        en: 'AI Behavior & Reasoning Evaluation',
      },
      description: {
        id: 'Merancang skenario pengujian ketat untuk menguji penalaran model Gemini di bawah kondisi pasar volatil dan sentimen berita padat derau.',
        en: 'Designing rigorous test scenarios to probe Gemini model reasoning under volatile market regimes and noisy sentiment feeds.',
      },
      icon: SearchCheck,
    },
    {
      title: {
        id: 'Rekayasa Prompt & Skema Terstruktur',
        en: 'Prompt Engineering & Schema Enforcement',
      },
      description: {
        id: 'Menyusun instruksi sistem dengan batasan ketat (negative constraints) dan ekstraktor JSON deterministik untuk memaksakan keluaran terstruktur.',
        en: 'Crafting strict system instructions, negative constraints, and deterministic JSON schemas to enforce structured analytical outputs.',
      },
      icon: Code2,
    },
    {
      title: {
        id: 'Validasi & Grounding Data Keuangan',
        en: 'Financial Data Grounding & Verification',
      },
      description: {
        id: 'Mengaudit integritas numerik pakan data, memastikan bahwa setiap angka makroekonomi (Actual vs Forecast vs Previous) sesuai dengan sumber resmi.',
        en: 'Auditing numerical feeds, verifying that every macroeconomic metric (Actual vs Forecast vs Previous) matches official documented releases.',
      },
      icon: Database,
    },
    {
      title: {
        id: 'Mitigasi Halusinasi & Kontrol Risiko',
        en: 'Hallucination Mitigation & Risk Controls',
      },
      description: {
        id: 'Menerapkan rangkaian evaluasi adversarial untuk mendeteksi klaim harga tanpa bukti dan memaksakan pernyataan ketidakpastian saat data tidak lengkap.',
        en: 'Deploying adversarial evaluation suites to catch unwarranted causal claims and mandating explicit uncertainty flags when data is missing.',
      },
      icon: AlertOctagon,
    },
    {
      title: {
        id: 'Evaluasi Linguistik AI Suara (S2S)',
        en: 'Speech-to-Speech (S2S) Acoustic QA',
      },
      description: {
        id: 'Pengalaman 72 asesmen turn-level pada model S2S bahasa Indonesia di Outlier AI dengan skor rata-rata 3.13 (melampaui target kualitas 2.00).',
        en: 'Proven track record of 72 turn-level assessments on Indonesian S2S models at Outlier AI with an average QA score of 3.13 (exceeding the 2.00 target).',
      },
      icon: CheckCircle,
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-slate-950/80 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-semibold mb-2">
            {language === 'id' ? 'Profil & Fokus Rekayasa AI' : 'Profile & AI Engineering Focus'}
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            {language === 'id'
              ? 'Kontribusi pada HEVORA Technologies & Evaluasi AI'
              : 'Contributions to HEVORA Technologies & AI Evaluation'}
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.summary[language]}
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center mb-4 border border-slate-700">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-100 mb-2">
                    {pillar.title[language]}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description[language]}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Model Specification & Active Lab Card */}
          <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-300 flex items-center justify-center mb-4 border border-cyan-500/40">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mb-2">
                {language === 'id'
                  ? 'HEVORA: Terminal Signals'
                  : 'HEVORA: Terminal Signals'}
              </h3>
              <p className="text-xs sm:text-sm text-cyan-100/80 leading-relaxed mb-4">
                {language === 'id'
                  ? 'Sistem intelijen pasar bertenaga Gemini yang beroperasi dengan validasi data ketat dan protokol data basi teruji.'
                  : 'Gemini-powered market intelligence operating under strict data grounding and missing-data verification protocols.'}
              </p>
            </div>

            <a
              href={PERSONAL_INFO.currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-300 hover:text-cyan-200 transition-colors"
            >
              <span>{language === 'id' ? 'Buka Portal HEVORA' : 'Explore HEVORA Platform'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Confidentiality and Status Notice */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 text-center max-w-3xl mx-auto">
          {PERSONAL_INFO.confidentialityNotice[language]}
        </div>

      </div>
    </section>
  );
};
