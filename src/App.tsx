/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Language } from './types/portfolio.ts';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { MetricsStrip } from './components/MetricsStrip.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ExperienceSection } from './components/ExperienceSection.tsx';
import { ProjectsSection } from './components/ProjectsSection.tsx';
import { AiEvaluationSandbox } from './components/AiEvaluationSandbox.tsx';
import { TechnicalResponsibilities } from './components/TechnicalResponsibilities.tsx';
import { TechnicalCaseStudies } from './components/TechnicalCaseStudies.tsx';
import { QaMethodology } from './components/QaMethodology.tsx';
import { SkillsMatrix } from './components/SkillsMatrix.tsx';
import { EducationCertifications } from './components/EducationCertifications.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { CvViewerModal } from './components/CvViewerModal.tsx';
import { Cpu, ChevronDown, ChevronUp, Sparkles, Terminal } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('id');
  const [isCvModalOpen, setIsCvModalOpen] = useState<boolean>(false);
  const [isHevoraLabExpanded, setIsHevoraLabExpanded] = useState<boolean>(true);

  // Sync HTML lang attribute
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-emerald-500/25 selection:text-emerald-300">
      {/* 1. Global Navigation Bar */}
      <Navbar
        language={language}
        onToggleLanguage={() => setLanguage((prev) => (prev === 'id' ? 'en' : 'id'))}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section: Portrait, HEVORA AI Role, Outlier QA Score, Quick Actions */}
        <Hero
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />

        {/* 3. Metrics Strip: Quantifiable Key Performance Indicators */}
        <MetricsStrip language={language} />

        {/* 4. About Section: Contributions to HEVORA Gemini Intelligence & AI QA */}
        <AboutSection language={language} />

        {/* 5. Experience Section: HEVORA (Active), Outlier AI, Koperasi, LKP */}
        <ExperienceSection language={language} />

        {/* 6. Featured Projects: HEVORA Intelligence, S2S AI Benchmark, Koperasi Data, LMS Courseware */}
        <ProjectsSection
          language={language}
          onOpenSandbox={() => {
            const sandboxEl = document.getElementById('sandbox');
            if (sandboxEl) {
              sandboxEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        {/* 7. Interactive AI Evaluation Sandbox */}
        <AiEvaluationSandbox language={language} />

        {/* 8. HEVORA Institutional Engineering & QA Lab (Case Studies, Responsibilities, Methodology) */}
        <section id="hevora-lab" className="py-12 bg-slate-900/30 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold mb-2">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>HEVORA Technologies · Deep Evaluation Suite</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {language === 'id'
                    ? 'Protokol Pengujian Pasar Institusional & Metodologi QA'
                    : 'Institutional Market Intelligence Protocols & QA Methodology'}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-2xl">
                  {language === 'id'
                    ? 'Eksplorasi mendalam 5 studi kasus evaluasi data keuangan (penanganan data basi, indikator makro, grounding) dan 6 tahap pipeline QA.'
                    : 'Deep exploration of 5 financial evaluation case studies (stale data, macro prints, grounding) and the 6-stage QA pipeline.'}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsHevoraLabExpanded(!isHevoraLabExpanded)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-xs font-bold transition-all shrink-0 cursor-pointer"
              >
                <span>
                  {isHevoraLabExpanded
                    ? language === 'id'
                      ? 'Sembunyikan Lab HEVORA'
                      : 'Collapse Lab Details'
                    : language === 'id'
                    ? 'Buka Rincian Lab HEVORA'
                    : 'Expand Lab Details'}
                </span>
                {isHevoraLabExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {isHevoraLabExpanded && (
            <div className="mt-8 space-y-4">
              {/* Technical Responsibilities */}
              <TechnicalResponsibilities />

              {/* Technical Case Studies */}
              <TechnicalCaseStudies />

              {/* QA Methodology */}
              <QaMethodology />
            </div>
          )}
        </section>

        {/* 9. Skills Matrix: Categorized Competencies & Language Fluency */}
        <SkillsMatrix language={language} />

        {/* 10. Education & Certifications: S.Kom UMM, SMKN, Alibaba Cloud, BRT */}
        <EducationCertifications language={language} />

        {/* 11. Contact Section: Direct WhatsApp, Email, LinkedIn, Form */}
        <ContactSection
          language={language}
          onOpenCvModal={() => setIsCvModalOpen(true)}
        />
      </main>

      {/* 12. Footer: Tagline, Status, Quick Links */}
      <Footer
        language={language}
        onOpenCvModal={() => setIsCvModalOpen(true)}
      />

      {/* 13. ATS CV Viewer Modal */}
      <CvViewerModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        language={language}
      />
    </div>
  );
}
