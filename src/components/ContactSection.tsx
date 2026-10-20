import React, { useState } from 'react';
import { Language } from '../types/portfolio.ts';
import { PERSONAL_INFO } from '../data/portfolioData.ts';
import { buildWhatsAppUrl, buildMailtoUrl } from '../utils/evaluation.ts';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MessageCircle,
  FileText,
  Send,
  Check,
  Copy,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  language: Language;
  onOpenCvModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  language,
  onOpenCvModal,
}) => {
  const [senderName, setSenderName] = useState('');
  const [senderOrg, setSenderOrg] = useState('');
  const [senderMessage, setSenderMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('recruitment');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const whatsappMessage =
    language === 'id'
      ? `Halo ${PERSONAL_INFO.shortName},\nNama: ${senderName || '[Nama Anda]'}\nInstansi: ${senderOrg || '[Instansi]'}\nKebutuhan: ${inquiryType}\nPesan: ${senderMessage || 'Tertarik berdiskusi peluang kerja sama.'}`
      : `Hello ${PERSONAL_INFO.shortName},\nName: ${senderName || '[Your Name]'}\nCompany: ${senderOrg || '[Organization]'}\nInterest: ${inquiryType}\nMessage: ${senderMessage || 'Interested in discussing opportunities.'}`;

  const waUrl = buildWhatsAppUrl(PERSONAL_INFO.phone, whatsappMessage);

  const mailSubject = `[Portfolio Inquiry - ${inquiryType.toUpperCase()}] ${senderName || 'Recruiter/Client'}`;
  const mailBody = `Halo ${PERSONAL_INFO.fullName},\n\nNama: ${senderName || '[Nama]'}\nOrganisasi: ${senderOrg || '[Organisasi]'}\n\nPesan:\n${senderMessage || 'Saya ingin mendiskusikan peluang kerja / kolaborasi AI Engineering & Evaluation.'}\n\nSalam,\n${senderName || ''}`;
  const mailtoUrl = buildMailtoUrl(PERSONAL_INFO.email, mailSubject, mailBody);

  return (
    <section id="contact" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
          {language === 'id' ? 'Komunikasi & Konsultasi' : 'Professional Inquiries'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Mari Berkolaborasi & Terhubung'
            : 'Let\'s Discuss Opportunities & Collaborate'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Terbuka untuk posisi AI Engineer, AI Evaluation Specialist, Analisis Data, dan konsultasi sistem cerdas. Siap berdiskusi secara langsung melalui WhatsApp atau Email.'
            : 'Available for AI Engineering, AI Evaluation Specialist, and intelligent systems consultations. Reach out directly via WhatsApp, Email, or LinkedIn.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column (5 cols): Direct Channels & Confidentiality */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* WhatsApp Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-900 border border-emerald-500/40 shadow-xl shadow-emerald-950/20">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Langsung</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40 font-bold">
                Fast Response
              </span>
            </div>

            <p className="text-xl font-mono font-bold text-white mb-1">
              {PERSONAL_INFO.displayPhone}
            </p>
            <p className="text-xs text-slate-400 mb-4">
              {language === 'id'
                ? 'Kanal tercepat untuk wawancara, briefing proyek, atau tawaran kerja.'
                : 'Fastest channel for recruitment interviews or project briefings.'}
            </p>

            <div className="flex items-center gap-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-colors shadow-sm"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>{language === 'id' ? 'Buka WhatsApp Chat' : 'Chat via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="p-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Salin Nomor"
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm">
                <Mail className="w-4 h-4" />
                <span>Email Profesional</span>
              </div>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-[11px] font-mono text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Disalin' : 'Salin'}</span>
              </button>
            </div>
            <p className="text-base font-mono font-bold text-white mb-3">
              {PERSONAL_INFO.email}
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{language === 'id' ? 'Kirim Surel' : 'Send Email'}</span>
            </a>
          </div>

          {/* LinkedIn & GitHub & CV */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">LinkedIn</div>
                <div className="text-[11px] text-slate-400">iwangdana7</div>
              </div>
            </a>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
            >
              <div className="p-2 rounded-lg bg-slate-800 text-slate-300 group-hover:bg-slate-700 group-hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">GitHub</div>
                <div className="text-[11px] text-slate-400">iwangdana7</div>
              </div>
            </a>
          </div>

          {/* View ATS CV Card */}
          <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <FileText className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-bold text-slate-200">
                  {language === 'id' ? 'Curriculum Vitae (ATS)' : 'ATS-Optimized CV'}
                </div>
                <div className="text-[10px] text-slate-400">
                  PDF Resmi Muchammad Yusuf Iwang Pradana
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenCvModal}
              className="px-3 py-1.5 rounded-lg bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-300 text-xs font-bold transition-colors cursor-pointer"
            >
              {language === 'id' ? 'Buka' : 'View'}
            </button>
          </div>

          {/* Confidentiality Notice */}
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2.5 leading-relaxed">
            <ShieldAlert className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <span>{PERSONAL_INFO.confidentialityNotice[language]}</span>
          </div>

        </div>

        {/* Right Column (7 cols): Interactive Message Dispatcher */}
        <div className="lg:col-span-7 rounded-2xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-white">
                {language === 'id' ? 'Tulis Pesan Cepat' : 'Quick Message Composer'}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {language === 'id'
                  ? 'Kirimkan pesan langsung ke WhatsApp atau Email dengan format otomatis.'
                  : 'Dispatch formatted message directly to WhatsApp or Email.'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-md border border-emerald-500/30">
              One-Click Send
            </span>
          </div>

          <div className="space-y-4">
            {/* Inquiry Type Radio */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 font-bold mb-2">
                {language === 'id' ? 'Topik Pembahasan:' : 'Inquiry Topic:'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: 'recruitment', label: language === 'id' ? 'Peluang Kerja / Rekrutmen' : 'Job / Recruitment' },
                  { id: 'ai-consulting', label: language === 'id' ? 'Evaluasi AI & QA' : 'AI Eval & QA' },
                  { id: 'networking', label: language === 'id' ? 'Kolaborasi / Diskusi' : 'General Dialogue' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setInquiryType(item.id)}
                    className={`py-2 px-3 rounded-xl text-xs font-semibold text-center transition-all cursor-pointer ${
                      inquiryType === item.id
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 border border-emerald-500'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/80'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Name & Org Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  {language === 'id' ? 'Nama Anda / Recruiter:' : 'Your Name / Recruiter:'}
                </label>
                <input
                  type="text"
                  value={senderName}
                  onChange={(e) => setSenderName(e.target.value)}
                  placeholder={language === 'id' ? 'Contoh: Ahmad Fauzi' : 'e.g. John Doe'}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  {language === 'id' ? 'Perusahaan / Lembaga:' : 'Organization / Company:'}
                </label>
                <input
                  type="text"
                  value={senderOrg}
                  onChange={(e) => setSenderOrg(e.target.value)}
                  placeholder={language === 'id' ? 'Contoh: Tech Startup / Agency' : 'e.g. Acme Tech'}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* Message Body */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                {language === 'id' ? 'Isi Pesan:' : 'Message Content:'}
              </label>
              <textarea
                rows={4}
                value={senderMessage}
                onChange={(e) => setSenderMessage(e.target.value)}
                placeholder={
                  language === 'id'
                    ? 'Tuliskan deskripsi peran, proyek, atau jadwal wawancara yang ingin didiskusikan...'
                    : 'Describe the role, project, or schedule an interview...'
                }
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            {/* Dispatch Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{language === 'id' ? 'Kirim via WhatsApp' : 'Dispatch via WhatsApp'}</span>
              </a>

              <a
                href={mailtoUrl}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>{language === 'id' ? 'Kirim via Email' : 'Dispatch via Email'}</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
