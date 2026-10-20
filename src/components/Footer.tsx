import React from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { ExternalLink, ArrowUp, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onOpenCvModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Identity & Company Tagline */}
          <div className="text-center md:text-left space-y-1.5">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-base">
                {PERSONAL_INFO.fullName}
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                HEVORA Technologies
              </span>
            </div>
            
            <p className="text-emerald-400/90 text-xs font-semibold">
              AI Engineering · LLM Evaluation · Financial Data Quality
            </p>
            <p className="text-[11px] text-slate-500">
              Sarjana Teknik Informatika (S.Kom) · Universitas Muhammadiyah Malang
            </p>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <a
              href={PERSONAL_INFO.currentProjectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1 font-semibold"
            >
              <span>HEVORA Terminal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              onClick={onOpenCvModal}
              className="text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              {language === 'id' ? 'Lihat CV ATS' : 'View ATS CV'}
            </button>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              LinkedIn
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-white transition-colors"
            >
              GitHub
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Verified Publish Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div className="flex items-center gap-1.5">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}.</span>
            <span>{language === 'id' ? 'Hak Cipta Dilindungi.' : 'All rights reserved.'}</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-400/90 font-mono">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ready for Publish · Verified Portfolio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
