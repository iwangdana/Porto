import React, { useState, useEffect } from 'react';
import { Language } from '../types/portfolio.ts';
import { EVALUATION_SCENARIOS } from '../data/portfolioData.ts';
import {
  calculateCompositeQaScore,
  getQaBenchmarkEvaluation,
  DimensionScores,
} from '../utils/evaluation.ts';
import {
  Sliders,
  Volume2,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Check,
  RotateCcw,
  Info,
  Play,
  FileCheck,
  Sparkles,
} from 'lucide-react';

interface AiEvaluationSandboxProps {
  language: Language;
}

export const AiEvaluationSandbox: React.FC<AiEvaluationSandboxProps> = ({ language }) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const currentScenario = EVALUATION_SCENARIOS[selectedScenarioIndex];

  const [scores, setScores] = useState<DimensionScores>({
    naturalness: currentScenario?.recommendedScores?.naturalness || 4,
    prosody: currentScenario?.recommendedScores?.prosody || 3,
    factuality: currentScenario?.recommendedScores?.factuality || 4,
    multiturnConsistency: currentScenario?.recommendedScores?.multiturnConsistency || 4,
    grammar: currentScenario?.recommendedScores?.grammar || 4,
  });

  const [copiedReport, setCopiedReport] = useState(false);
  const [activeTab, setActiveTab] = useState<'preset' | 'custom'>('preset');
  const [customPrompt, setCustomPrompt] = useState(
    'Analis: "Berapa proyeksi inflasi BI untuk akhir tahun ini dan apa dasar perhitungannya?"'
  );
  const [customResponse, setCustomResponse] = useState(
    'AI: "Berdasarkan rilis berkala Bank Indonesia, sasaran inflasi berada pada rentang 2,5% ± 1%. Untuk proyeksi spesifik angka bulanan pada kuartal IV, data internal proyeksi ekonometrika tidak dicantumkan dalam payload rujukan, sehingga saya tidak menyajikan angka spekulatif."'
  );

  // Sync scores when switching preset scenario
  useEffect(() => {
    if (activeTab === 'preset' && currentScenario) {
      setScores({
        naturalness: Math.round(currentScenario.recommendedScores.naturalness),
        prosody: Math.round(currentScenario.recommendedScores.prosody),
        factuality: Math.round(currentScenario.recommendedScores.factuality),
        multiturnConsistency: Math.round(currentScenario.recommendedScores.multiturnConsistency),
        grammar: Math.round(currentScenario.recommendedScores.grammar),
      });
    }
  }, [selectedScenarioIndex, activeTab, currentScenario]);

  const compositeScore = calculateCompositeQaScore(scores);
  const benchmarkResult = getQaBenchmarkEvaluation(compositeScore, 2.00);

  const handleScoreChange = (dimension: keyof DimensionScores, val: number) => {
    setScores((prev) => ({
      ...prev,
      [dimension]: val,
    }));
  };

  const handleResetScores = () => {
    if (activeTab === 'preset' && currentScenario) {
      setScores({
        naturalness: Math.round(currentScenario.recommendedScores.naturalness),
        prosody: Math.round(currentScenario.recommendedScores.prosody),
        factuality: Math.round(currentScenario.recommendedScores.factuality),
        multiturnConsistency: Math.round(currentScenario.recommendedScores.multiturnConsistency),
        grammar: Math.round(currentScenario.recommendedScores.grammar),
      });
    } else {
      setScores({
        naturalness: 4,
        prosody: 4,
        factuality: 4,
        multiturnConsistency: 4,
        grammar: 4,
      });
    }
  };

  const generateReportText = () => {
    const prompt =
      activeTab === 'preset' ? currentScenario.inputPrompt[language] : customPrompt;
    const response =
      activeTab === 'preset' ? currentScenario.modelResponse[language] : customResponse;
    const scenarioName =
      activeTab === 'preset'
        ? currentScenario.title[language]
        : 'Custom Indonesian AI Audit';

    const annotationsText =
      activeTab === 'preset' && currentScenario.annotations.length > 0
        ? currentScenario.annotations
            .map(
              (ann, idx) =>
                `  [${idx + 1}] (${ann.type.toUpperCase()}): ${ann.note[language]}`
            )
            .join('\n')
        : '  [1] Audit berbasis bukti: diverifikasi bebas halusinasi faktual dan sesuai batasan konteks.';

    return `=== INDONESIAN AI & SPEECH EVALUATION REPORT ===
Evaluator: Muchammad Yusuf Iwang Pradana (QA Track: 3.13 / 2.00 Target)
Scenario: ${scenarioName}
Target Benchmark: 2.00
Calculated Composite QA Score: ${compositeScore.toFixed(2)} / 4.00
Benchmark Delta: ${benchmarkResult.percentageAboveTarget >= 0 ? '+' : ''}${benchmarkResult.percentageAboveTarget}% (${language === 'id' ? benchmarkResult.statusLabelId : benchmarkResult.statusLabelEn})

DIMENSION RATINGS (1 - 4 Scale):
1. Conversational Naturalness: ${scores.naturalness} / 4
2. Prosody & Acoustic Artifact Prevention: ${scores.prosody} / 4
3. Factuality & Anti-Hallucination Grounding: ${scores.factuality} / 4
4. Multi-turn Dialog & Context Consistency: ${scores.multiturnConsistency} / 4
5. Indonesian Grammar, Register & Semantics: ${scores.grammar} / 4

INPUT CONTEXT / PROMPT:
"${prompt}"

AI MODEL OUTPUT:
"${response}"

EVALUATOR ANNOTATIONS & FINDINGS:
${annotationsText}

${
  activeTab === 'preset' && currentScenario.auditorNotes
    ? `AUDITOR NOTES:\n"${currentScenario.auditorNotes[language]}"\n`
    : ''
}=================================================`;
  };

  const handleCopyReport = () => {
    const report = generateReportText();
    navigator.clipboard.writeText(report);
    setCopiedReport(true);
    setTimeout(() => setCopiedReport(false), 2500);
  };

  return (
    <section id="sandbox" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold mb-2">
          {language === 'id' ? 'Simulasi Interaktif & Benchmark' : 'Interactive Evaluation Sandbox'}
        </p>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          {language === 'id'
            ? 'Sandbox Evaluasi AI & Speech-to-Speech'
            : 'Indonesian AI & Speech Evaluation Sandbox'}
        </h2>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          {language === 'id'
            ? 'Uji coba interaktif sistem audit model AI: eksplorasi rubrik 5 dimensi, validasi batasan negatif, deteksi halusinasi data keuangan, dan verifikasi akustik Speech-to-Speech.'
            : 'Interactive demonstration of AI evaluation methodologies: probe 5-dimension rubric scoring, financial data grounding, hallucination suppression, and speech prosody QA.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (7 cols): Scenario Selector & Transcript View */}
        <div className="lg:col-span-7 space-y-6">
          {/* Preset vs Custom Tab Controls */}
          <div className="flex items-center justify-between bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => setActiveTab('preset')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'preset'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'id' ? 'Kasus Teruji (Presets)' : 'Empirical Scenarios'}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('custom')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'custom'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {language === 'id' ? 'Uji Kustom Sendiri' : 'Custom Prompt Audit'}
              </button>
            </div>

            <div className="text-[11px] font-mono text-emerald-400 hidden sm:block pr-2">
              Rubric Standard v2.6 · Outlier AI & HEVORA
            </div>
          </div>

          {/* Scenario Selector when in preset mode */}
          {activeTab === 'preset' ? (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold">
                  {language === 'id' ? 'Pilih Kasus Evaluasi:' : 'Select Audit Case Study:'}
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  {selectedScenarioIndex + 1} / {EVALUATION_SCENARIOS.length}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {EVALUATION_SCENARIOS.map((scenario, sIdx) => (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setSelectedScenarioIndex(sIdx)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      selectedScenarioIndex === sIdx
                        ? 'bg-emerald-950/40 border-emerald-500 text-white shadow-md'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                    }`}
                  >
                    <div className="text-[11px] font-mono text-emerald-400 font-bold mb-1">
                      Case #{sIdx + 1}
                    </div>
                    <div className="text-xs font-semibold line-clamp-2">
                      {scenario.title[language]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4 bg-slate-900/90 p-4 rounded-xl border border-slate-800">
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1">
                  {language === 'id' ? 'Prompt Pengguna (Bahasa Indonesia):' : 'User Prompt / Input Context:'}
                </label>
                <textarea
                  value={customPrompt}
                  onChange={(e) => setCustomPrompt(e.target.value)}
                  placeholder="Masukkan contoh prompt yang ingin dievaluasi..."
                  rows={2}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-sans"
                />
              </div>
              <div>
                <label className="block text-xs font-mono uppercase text-slate-300 font-semibold mb-1">
                  {language === 'id' ? 'Respons Model AI (Speech-to-Speech / Teks):' : 'AI Model Response Output:'}
                </label>
                <textarea
                  value={customResponse}
                  onChange={(e) => setCustomResponse(e.target.value)}
                  placeholder="Masukkan respons model yang akan diaudit..."
                  rows={3}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 font-sans"
                />
              </div>
            </div>
          )}

          {/* Transcript Display Box */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
            {/* Box Header */}
            <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-slate-400 ml-2 truncate max-w-[240px] sm:max-w-none">
                  {activeTab === 'preset' ? currentScenario.title[language] : 'Custom Audio & Grounding Audit'}
                </span>
              </div>
              {activeTab === 'preset' && currentScenario.audioDuration && (
                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Duration: {currentScenario.audioDuration}</span>
                </div>
              )}
            </div>

            {/* Transcript Content */}
            <div className="p-5 space-y-4 font-mono text-xs">
              {/* User Prompt */}
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                  [Turn 1] User Voice Prompt / Query:
                </span>
                <div className="bg-slate-950 p-3 rounded-lg border border-slate-800/80 text-cyan-200 font-sans text-xs sm:text-sm leading-relaxed">
                  "{activeTab === 'preset' ? currentScenario.inputPrompt[language] : customPrompt || '(Masukkan prompt di atas)'}"
                </div>
              </div>

              {/* Model Output */}
              <div className="space-y-1">
                <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">
                  [Turn 1] AI Model Response (Synthesized Voice / Text):
                </span>
                <div className="bg-slate-950 p-3 rounded-lg border border-emerald-500/30 text-emerald-100 font-sans text-xs sm:text-sm leading-relaxed">
                  "{activeTab === 'preset' ? currentScenario.modelResponse[language] : customResponse || '(Masukkan respon di atas)'}"
                </div>
              </div>

              {/* Annotations breakdown */}
              {activeTab === 'preset' && currentScenario.annotations && currentScenario.annotations.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                      {language === 'id' ? 'Temuan & Catatan Audit Evaluator:' : 'Auditor Finding Annotations:'}
                    </span>
                    <span className="text-slate-500 font-mono">
                      Domain: {currentScenario.domain}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {currentScenario.annotations.map((ann, iIdx) => (
                      <div
                        key={iIdx}
                        className={`p-2.5 rounded-lg border text-xs font-sans ${
                          ann.type === 'critical'
                            ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                            : ann.type === 'warning'
                            ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                            : 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                        }`}
                      >
                        <div className="flex items-center gap-2 font-bold mb-0.5">
                          {ann.type === 'critical' ? (
                            <AlertTriangle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                          ) : ann.type === 'warning' ? (
                            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          ) : (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          )}
                          <span className="font-mono text-[10px] uppercase tracking-wide">
                            [{ann.type}]
                          </span>
                          <span className="text-xs font-semibold">{ann.note[language]}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentScenario.auditorNotes && (
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs font-sans text-slate-300">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 font-semibold block mb-1">
                        {language === 'id' ? 'Kesimpulan Auditor:' : 'Auditor Synthesis:'}
                      </span>
                      <p>{currentScenario.auditorNotes[language]}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column (5 cols): Interactive Rubric Sliders & Real-Time Score Engine */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/95 p-6 shadow-xl space-y-6">
            {/* Header of Rubric */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-emerald-400" />
                <h3 className="text-base font-bold text-white">
                  {language === 'id' ? 'Rubrik Penilaian 5 Dimensi' : '5-Dimension Rubric Scoring'}
                </h3>
              </div>
              <button
                type="button"
                onClick={handleResetScores}
                className="text-xs text-slate-400 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                title="Reset scores"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {/* Dimension Sliders */}
            <div className="space-y-4">
              {/* Naturalness */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {language === 'id' ? '1. Kealamian Tuturan (Naturalness)' : '1. Conversational Naturalness'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{scores.naturalness} / 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={scores.naturalness}
                  onChange={(e) => handleScoreChange('naturalness', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Naturalness score slider"
                />
              </div>

              {/* Prosody & Voice Quality */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {language === 'id' ? '2. Prosodi & Bebas Artefak Suara' : '2. Prosody & Acoustic Quality'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{scores.prosody} / 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={scores.prosody}
                  onChange={(e) => handleScoreChange('prosody', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Prosody score slider"
                />
              </div>

              {/* Factuality & Grounding */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {language === 'id' ? '3. Faktualitas & Anti-Halusinasi' : '3. Factuality & Anti-Hallucination'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{scores.factuality} / 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={scores.factuality}
                  onChange={(e) => handleScoreChange('factuality', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Factuality score slider"
                />
              </div>

              {/* Multi-turn Context */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {language === 'id' ? '4. Konsistensi Multi-turn & Konteks' : '4. Multi-turn Dialog Consistency'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{scores.multiturnConsistency} / 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={scores.multiturnConsistency}
                  onChange={(e) => handleScoreChange('multiturnConsistency', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Multi-turn context slider"
                />
              </div>

              {/* Grammar & Indonesian Semantics */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-slate-200">
                    {language === 'id' ? '5. Tata Bahasa Indonesia & Register' : '5. Indonesian Grammar & Register'}
                  </span>
                  <span className="font-mono font-bold text-emerald-400 tabular-nums">{scores.grammar} / 4</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="4"
                  step="1"
                  value={scores.grammar}
                  onChange={(e) => handleScoreChange('grammar', Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                  aria-label="Indonesian grammar slider"
                />
              </div>
            </div>

            {/* Score Result Gauge */}
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 text-center space-y-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">
                {language === 'id' ? 'Skor QA Komposit Terhitung:' : 'Calculated Composite QA Score:'}
              </span>
              <div className="flex items-center justify-center gap-3">
                <span className="text-4xl sm:text-5xl font-mono font-extrabold text-emerald-400 tabular-nums">
                  {compositeScore.toFixed(2)}
                </span>
                <div className="text-left text-xs font-mono">
                  <div className="text-slate-400">/ 4.00 Maks</div>
                  <div className="text-emerald-400 font-semibold">Target: 2.00</div>
                </div>
              </div>

              {/* Comparison badge */}
              <div className="pt-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-950 border border-emerald-500/40 text-emerald-300 tabular-nums">
                  {benchmarkResult.percentageAboveTarget >= 0 ? '+' : ''}
                  {benchmarkResult.percentageAboveTarget}%{' '}
                  {language === 'id' ? benchmarkResult.statusLabelId : benchmarkResult.statusLabelEn}
                </span>
              </div>
            </div>

            {/* Copy Report Action */}
            <button
              type="button"
              onClick={handleCopyReport}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/25 cursor-pointer"
            >
              {copiedReport ? (
                <>
                  <Check className="w-4 h-4 text-white" />
                  <span>{language === 'id' ? 'Laporan Evaluasi Disalin!' : 'Audit Report Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>{language === 'id' ? 'Salin Laporan Audit Evaluasi' : 'Copy Formal Audit Report'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
