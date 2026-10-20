import React from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { buildWhatsAppUrl } from '../utils/evaluation.ts';
import {
  FileText,
  MessageCircle,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ language, onOpenCvModal }) => {
  const waUrl = buildWhatsAppUrl(
    PERSONAL_INFO.phone,
    language === 'id'
      ? `Halo ${PERSONAL_INFO.shortName}, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek AI Engineering / Evaluasi model.`
      : `Hello ${PERSONAL_INFO.shortName}, I reviewed your portfolio and would like to discuss AI Engineering and Evaluation opportunities.`
  );

  return (
    <section id="top" className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Subtle Tech Grid & Ambient Glows */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #10b981 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-1/4 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (7 cols): Identity, Role, Pitch, Action Buttons */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Unboxed Metadata Kicker (Zero-Pill Discipline) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono text-slate-400">
              <span className="text-emerald-400 font-semibold">HEVORA Technologies</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>AI Engineer</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>LLM & S2S Evaluation</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>S.Kom Informatika</span>
            </div>

            {/* Headline */}
            <div>
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-400 block mb-1">
                {PERSONAL_INFO.fullName}
              </span>
              <h1
                className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
                style={{ textWrap: 'balance' }}
              >
                {language === 'id' ? (
                  <>
                    AI Engineer <span className="text-emerald-400">&</span> Indonesian AI Evaluation Specialist
                  </>
                ) : (
                  <>
                    AI Engineer <span className="text-emerald-400">&</span> Indonesian AI Evaluation Specialist
                  </>
                )}
              </h1>
            </div>

            {/* Summary Paragraph */}
            <p className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {language === 'id'
                ? 'Berkontribusi di HEVORA Technologies dalam pengujian dan validasi sistem kecerdasan pasar institusional bertenaga Gemini—dengan fokus pada data grounding ketat, mitigasi halusinasi, dan analitis bebas bias. Berpengalaman mengevaluasi model AI suara (Speech-to-Speech) berbahasa Indonesia di Outlier AI dengan rata-rata skor QA 3.13 (melampaui target 2.00).'
                : 'Contributing at HEVORA Technologies to evaluate institutional market intelligence systems powered by Gemini models—focusing on strict data grounding, hallucination mitigation, and risk-aware AI behavior. Experienced in evaluating Indonesian Speech-to-Speech AI at Outlier AI with an average QA score of 3.13 (surpassing the 2.00 target).'}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
              {/* Primary: View ATS CV Modal */}
              <button
                type="button"
                onClick={onOpenCvModal}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/25 transition-all cursor-pointer whitespace-nowrap shrink-0"
              >
                <FileText className="w-4 h-4 text-slate-950" />
                <span>{language === 'id' ? 'Lihat CV ATS Lengkap' : 'View Full ATS CV'}</span>
              </button>

              {/* HEVORA Project Link */}
              <a
                href={PERSONAL_INFO.currentProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm transition-all whitespace-nowrap shrink-0"
              >
                <span>{language === 'id' ? 'Buka Proyek HEVORA' : 'View HEVORA Project'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>

              {/* AI Sandbox Jump */}
              <a
                href="#sandbox"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-cyan-500/30 bg-cyan-950/20 hover:bg-cyan-900/40 text-cyan-300 font-semibold text-sm transition-all whitespace-nowrap shrink-0"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>{language === 'id' ? 'Uji Sandbox AI' : 'Test AI Sandbox'}</span>
              </a>
            </div>

            {/* Quick Contact & Direct Channels */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-400 border-t border-slate-800/80">
              <span className="font-semibold text-slate-300">
                {language === 'id' ? 'Kanal Terverifikasi:' : 'Verified Channels:'}
              </span>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{PERSONAL_INFO.displayPhone}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols): Portrait with Clean Framing & Benchmark Evidence */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative max-w-sm sm:max-w-md w-full">
              
              {/* Outer Decorative Gradient Border */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/10 to-teal-500/20 blur-md opacity-60"></div>

              {/* Photo Container */}
              <div className="relative rounded-2xl bg-slate-900 border border-slate-700/80 overflow-hidden shadow-2xl">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover aspect-[4/5] object-top filter contrast-[1.02]"
                />

                {/* Overlaid Bottom Identity Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-bold text-base">
                        {PERSONAL_INFO.fullName}
                      </h3>
                      <p className="text-xs text-emerald-400 font-mono">
                        AI Engineer · HEVORA Technologies
                      </p>
                    </div>
                    <div className="flex items-center gap-1 text-emerald-300 text-xs font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Verified</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Benchmark Card: Outlier QA Score */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 rounded-xl bg-slate-900/95 border border-emerald-500/50 p-3.5 sm:p-4 shadow-xl backdrop-blur-md max-w-[210px]">
                <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold text-slate-300 uppercase tracking-wide">
                  <Award className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Outlier AI Benchmark</span>
                </div>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-extrabold text-emerald-400 font-mono tabular-nums">
                    3.13
                  </span>
                  <span className="text-xs text-slate-400 font-mono">/ 4.00</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded border border-emerald-500/30 tabular-nums">
                    +56.5%
                  </span>
                </div>
                <p className="text-[10px] text-slate-400 mt-1">
                  {language === 'id'
                    ? 'Target benchmark: 2.00 (72 asesmen turn-level)'
                    : 'Target benchmark: 2.00 (72 turn ratings)'}
                </p>
              </div>

              {/* Floating Highlight Card 2: HEVORA Institutional Project */}
              <div className="absolute -top-4 -right-4 sm:-right-6 rounded-xl bg-slate-900/95 border border-cyan-500/50 p-3 shadow-xl backdrop-blur-md max-w-[190px]">
                <div className="text-[10px] font-bold text-cyan-300 font-mono uppercase tracking-wider mb-0.5">
                  HEVORA Signals
                </div>
                <p className="text-xs font-bold text-white leading-snug">
                  Gemini Market Intelligence
                </p>
                <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                  Active AI Engineer
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
