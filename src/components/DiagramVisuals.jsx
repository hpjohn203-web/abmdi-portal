// Inline SVG/HTML diagram components — no external images needed

export function PostmortemChangesTimeline() {
  const stages = [
    { name: 'Pallor Mortis', time: '0–25 min', color: '#e2e8f0', desc: 'Skin pales as capillaries drain' },
    { name: 'Algor Mortis', time: '1–24 hrs', color: '#7dd3fc', desc: 'Body cools ~1.5°F/hr' },
    { name: 'Rigor Mortis', time: '2–48 hrs', color: '#fbbf24', desc: 'Muscle stiffening; peaks at 12 hrs' },
    { name: 'Livor Mortis', time: '0–12 hrs', color: '#c084fc', desc: 'Blood pools under gravity; fixes by 8–12 hrs' },
  ];
  return (
    <div className="p-2 space-y-3">
      {stages.map((s, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="shrink-0 w-3 h-3 rounded-full mt-1" style={{ backgroundColor: s.color }} />
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-sm text-slate-100">{s.name}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-700 text-slate-300">{s.time}</span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{s.desc}</p>
          </div>
        </div>
      ))}
      <div className="mt-3 relative h-6 bg-slate-700 rounded-full overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-[8%] bg-slate-300/60 flex items-center justify-center">
          <span className="text-[8px] font-bold text-slate-900">PM</span>
        </div>
        <div className="absolute left-[8%] top-0 h-full w-[25%] bg-sky-400/70 flex items-center justify-center">
          <span className="text-[8px] font-bold text-slate-900">Algor</span>
        </div>
        <div className="absolute left-[15%] top-0 h-full w-[40%] bg-amber-400/70 flex items-center justify-center">
          <span className="text-[8px] font-bold text-slate-900">Rigor</span>
        </div>
        <div className="absolute left-0 top-0 h-full w-[50%] bg-purple-400/40 flex items-center justify-center">
          <span className="text-[8px] font-bold text-slate-200">Livor</span>
        </div>
      </div>
      <p className="text-[10px] text-slate-500 text-center">← 0 hrs ·············· 24 hrs ·············· 48 hrs →</p>
    </div>
  );
}

export function LivorMortisPattern() {
  return (
    <div className="p-2 space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-slate-700/40 rounded-xl p-3 text-center border border-purple-500/30">
          <p className="text-xs font-bold text-purple-300 mb-2">Unfixed Lividity</p>
          <div className="w-16 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-lg bg-slate-600 border border-slate-500" />
            <div className="absolute bottom-0 left-0 right-0 h-8 rounded-b-lg bg-purple-500/50" />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">0–6 hours · Moves with body position</p>
        </div>
        <div className="bg-slate-700/40 rounded-xl p-3 text-center border border-purple-500/60">
          <p className="text-xs font-bold text-purple-300 mb-2">Fixed Lividity</p>
          <div className="w-16 h-24 mx-auto relative">
            <div className="absolute inset-0 rounded-lg bg-slate-600 border border-slate-500" />
            <div className="absolute bottom-0 left-0 right-0 h-8 rounded-b-lg bg-purple-600/70" />
          </div>
          <p className="text-[10px] text-slate-400 mt-2">8–12+ hours · Does NOT shift</p>
        </div>
      </div>
      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3 text-xs text-amber-200">
        <strong>Key Point:</strong> If lividity pattern doesn't match body's final position → body was moved after fixation.
      </div>
    </div>
  );
}

export function DecompositionStages() {
  const stages = [
    { n: 1, name: 'Fresh', time: '0–3 days', color: 'bg-emerald-500/20 border-emerald-500/40', text: 'text-emerald-300', desc: 'Cellular autolysis begins; no visible external change' },
    { n: 2, name: 'Bloat', time: '3–10 days', color: 'bg-yellow-500/20 border-yellow-500/40', text: 'text-yellow-300', desc: 'Gas accumulation; odor; insect activity begins' },
    { n: 3, name: 'Active Decay', time: '10–25 days', color: 'bg-orange-500/20 border-orange-500/40', text: 'text-orange-300', desc: 'Greatest mass loss; putrid odor; peak insect activity' },
    { n: 4, name: 'Advanced Decay', time: '25–50 days', color: 'bg-red-500/20 border-red-500/40', text: 'text-red-300', desc: 'Reduced odor; most soft tissue gone; insect succession' },
    { n: 5, name: 'Dry/Skeletal', time: '50+ days', color: 'bg-slate-600/40 border-slate-500/40', text: 'text-slate-300', desc: 'Only bone and dry tissue remain; weathering begins' },
  ];
  return (
    <div className="p-2 space-y-2">
      {stages.map(s => (
        <div key={s.n} className={`flex items-start gap-3 ${s.color} border rounded-xl p-3`}>
          <span className={`text-lg font-black ${s.text} shrink-0`}>{s.n}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className={`font-bold text-sm ${s.text}`}>{s.name}</span>
              <span className="text-[10px] text-slate-400">{s.time}</span>
            </div>
            <p className="text-xs text-slate-300 mt-0.5">{s.desc}</p>
          </div>
        </div>
      ))}
      <p className="text-[10px] text-slate-500 text-center mt-1">Timelines vary greatly with temperature, humidity, and environment</p>
    </div>
  );
}

export function WoundClassification() {
  const types = [
    {
      name: 'Blunt Force',
      icon: '🔨',
      color: 'border-blue-500/40',
      items: ['Contusions (bruises)', 'Lacerations (tears)', 'Fractures', 'Abrasions', 'Irregular wound margins'],
    },
    {
      name: 'Sharp Force',
      icon: '🔪',
      color: 'border-red-500/40',
      items: ['Incised wounds (cuts)', 'Stab wounds (depth > width)', 'Chop wounds', 'Clean wound margins', 'Minimal surrounding damage'],
    },
    {
      name: 'Gunshot',
      icon: '💥',
      color: 'border-amber-500/40',
      items: ['Entrance: small, round, abraded collar', 'Exit: larger, irregular, no collar', 'Intermediary: fouling, stippling', 'Bullet track through tissue'],
    },
  ];
  return (
    <div className="p-2 grid grid-cols-1 gap-3">
      {types.map(t => (
        <div key={t.name} className={`bg-slate-700/30 border ${t.color} rounded-xl p-3`}>
          <p className="font-bold text-sm mb-2">{t.icon} {t.name}</p>
          <ul className="space-y-1">
            {t.items.map((item, i) => (
              <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-slate-500 mt-0.5">•</span>{item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function GunshotRanges() {
  const ranges = [
    { name: 'Contact', dist: '0 cm', color: 'bg-red-500/20 border-red-500/50', signs: ['Muzzle stamp imprint', 'Soot inside wound canal', 'Stellate laceration', 'Internal searing'] },
    { name: 'Close Range', dist: '< 30 cm', color: 'bg-orange-500/20 border-orange-500/50', signs: ['Heavy soot (fouling)', 'Possible stippling', 'Singed hair/skin', 'Larger entry wound'] },
    { name: 'Intermediate', dist: '30–150 cm', color: 'bg-amber-500/20 border-amber-500/50', signs: ['Stippling present', 'No fouling (soot)', 'Round entry wound', 'Abraded collar'] },
    { name: 'Distant', dist: '> 150 cm', color: 'bg-slate-600/40 border-slate-500/50', signs: ['No soot/stippling', 'Small round entry', 'Abraded margin only', 'Exit wound present'] },
  ];
  return (
    <div className="p-2 grid grid-cols-2 gap-2">
      {ranges.map(r => (
        <div key={r.name} className={`${r.color} border rounded-xl p-3`}>
          <p className="font-bold text-xs text-slate-100">{r.name}</p>
          <p className="text-[10px] text-slate-400 mb-2">{r.dist}</p>
          {r.signs.map((s, i) => (
            <p key={i} className="text-[10px] text-slate-300">• {s}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export function DNAProfilingProcess() {
  const steps = [
    { n: 1, name: 'Sample Collection', desc: 'Blood, saliva, tissue, hair root', icon: '🧫' },
    { n: 2, name: 'DNA Extraction', desc: 'Isolate DNA from cellular material', icon: '⚗️' },
    { n: 3, name: 'PCR Amplification', desc: 'Copy STR loci millions of times', icon: '🔬' },
    { n: 4, name: 'Capillary Electrophoresis', desc: 'Separate fragments by size', icon: '📊' },
    { n: 5, name: 'Profile Generation', desc: 'Create numerical allele profile', icon: '🧬' },
    { n: 6, name: 'CODIS Comparison', desc: 'Compare against database', icon: '💻' },
  ];
  return (
    <div className="p-2 space-y-2">
      {steps.map((s, i) => (
        <div key={s.n} className="flex items-center gap-3">
          <div className="flex flex-col items-center">
            <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-xs font-bold text-amber-400">{s.n}</div>
            {i < steps.length - 1 && <div className="w-0.5 h-4 bg-slate-700 mt-1" />}
          </div>
          <div className="flex-1 flex items-center gap-2">
            <span>{s.icon}</span>
            <div>
              <p className="text-xs font-semibold text-slate-100">{s.name}</p>
              <p className="text-[10px] text-slate-400">{s.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function FingerprintPatterns() {
  const patterns = [
    { name: 'Loop', pct: '~65%', color: 'text-sky-400 border-sky-500/40', desc: 'Ridges enter from one side, curve, exit same side. Radial (toward thumb) or Ulnar (away from thumb).' },
    { name: 'Whorl', pct: '~30%', color: 'text-amber-400 border-amber-500/40', desc: 'Concentric circles or spirals. Requires two deltas. Four subtypes: plain, central pocket, double loop, accidental.' },
    { name: 'Arch', pct: '~5%', color: 'text-emerald-400 border-emerald-500/40', desc: 'Ridges enter one side and exit the other, rising in the center. Plain or tented. Least common pattern.' },
  ];
  return (
    <div className="p-2 space-y-3">
      {patterns.map(p => (
        <div key={p.name} className={`border ${p.color.split(' ')[1]} bg-slate-700/30 rounded-xl p-3`}>
          <div className="flex items-center justify-between mb-1">
            <span className={`font-bold text-sm ${p.color.split(' ')[0]}`}>{p.name}</span>
            <span className="text-xs bg-slate-700 px-2 py-0.5 rounded-full text-slate-300">{p.pct} of population</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function BlowFlyLifeCycle() {
  const stages = [
    { name: 'Eggs', time: '12–24 hrs', color: 'bg-yellow-400', angle: 0 },
    { name: '1st Instar', time: '8–14 hrs', color: 'bg-orange-400', angle: 60 },
    { name: '2nd Instar', time: '2–3 days', color: 'bg-red-400', angle: 120 },
    { name: '3rd Instar', time: '3–4 days', color: 'bg-rose-500', angle: 180 },
    { name: 'Pupa', time: '6–10 days', color: 'bg-amber-700', angle: 240 },
    { name: 'Adult', time: '2–3 days', color: 'bg-green-500', angle: 300 },
  ];
  return (
    <div className="p-2">
      <div className="relative w-48 h-48 mx-auto mb-4">
        {stages.map((s, i) => {
          const rad = (s.angle - 90) * (Math.PI / 180);
          const r = 68;
          const x = 96 + r * Math.cos(rad);
          const y = 96 + r * Math.sin(rad);
          return (
            <div key={s.name} className="absolute flex flex-col items-center" style={{ left: x - 24, top: y - 20, width: 48 }}>
              <div className={`w-3 h-3 rounded-full ${s.color} mb-0.5`} />
              <p className="text-[9px] font-bold text-slate-200 text-center leading-tight">{s.name}</p>
              <p className="text-[8px] text-slate-400 text-center">{s.time}</p>
            </div>
          );
        })}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-dashed border-slate-600" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl">🦟</span>
        </div>
      </div>
      <p className="text-[10px] text-slate-500 text-center">Times at ~25°C (77°F) · Varies with temperature · Use ADH/ADD for PMI estimation</p>
    </div>
  );
}

export function MassFatalityStructure() {
  return (
    <div className="p-2">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-amber-500/20 border border-amber-500/50 rounded-xl px-5 py-2 text-center">
          <p className="text-xs font-bold text-amber-300">Incident Commander</p>
        </div>
        <div className="w-0.5 h-4 bg-slate-600" />
        <div className="bg-sky-500/20 border border-sky-500/50 rounded-xl px-4 py-2 text-center w-40">
          <p className="text-xs font-bold text-sky-300">Operations Section</p>
        </div>
        <div className="flex items-start gap-1 w-full justify-center">
          <div className="flex flex-col items-center gap-1">
            <div className="w-0.5 h-4 bg-slate-600" />
            <div className="bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-center">
              <p className="text-[10px] font-semibold text-slate-200">Morgue Ops</p>
              <p className="text-[9px] text-slate-400">Autopsy · ID</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1 mx-2">
            <div className="w-0.5 h-4 bg-slate-600" />
            <div className="bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-center">
              <p className="text-[10px] font-semibold text-slate-200">Search & Recovery</p>
              <p className="text-[9px] text-slate-400">Scene · Evidence</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-0.5 h-4 bg-slate-600" />
            <div className="bg-slate-700 border border-slate-600 rounded-xl px-3 py-2 text-center">
              <p className="text-[10px] font-semibold text-slate-200">Family Assistance</p>
              <p className="text-[9px] text-slate-400">Notification · Support</p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-slate-500 text-center mt-3">ICS/NIMS structure · DMORT supports local jurisdiction</p>
    </div>
  );
}

export function DrugMetabolism() {
  const steps = [
    { name: 'Drug Administration', icon: '💊', sub: 'Oral, IV, inhalation, etc.' },
    { name: 'Phase I Metabolism', icon: '⚗️', sub: 'CYP450 oxidation, reduction, hydrolysis — produces active/inactive metabolites' },
    { name: 'Phase II Metabolism', icon: '🔗', sub: 'Conjugation (glucuronidation, sulfation) — increases water solubility' },
    { name: 'Excretion', icon: '🚿', sub: 'Urine (primary), bile/feces, sweat, breath' },
  ];
  return (
    <div className="p-2 space-y-2">
      {steps.map((s, i) => (
        <div key={i} className="flex items-start gap-3">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 bg-violet-500/20 border border-violet-500/40 rounded-full flex items-center justify-center text-base">{s.icon}</div>
            {i < steps.length - 1 && <div className="w-0.5 h-4 bg-slate-700 mt-1" />}
          </div>
          <div className="flex-1 pb-2">
            <p className="text-xs font-bold text-slate-100">{s.name}</p>
            <p className="text-[10px] text-slate-400 leading-relaxed mt-0.5">{s.sub}</p>
          </div>
        </div>
      ))}
      <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-2 mt-2">
        <p className="text-[10px] text-violet-300"><strong>Forensic note:</strong> Postmortem redistribution can significantly alter measured drug concentrations — always interpret with clinical context.</p>
      </div>
    </div>
  );
}

export function DeathCertificateStructure() {
  return (
    <div className="p-2">
      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-3 mb-3">
        <p className="text-xs font-bold text-amber-400 mb-2">PART I — Cause of Death Chain</p>
        <div className="space-y-2">
          {[
            { label: 'Immediate Cause (a)', desc: 'Final disease/injury causing death', example: 'e.g. Hemorrhagic shock' },
            { label: 'Due to (b)', desc: 'Intermediate cause', example: 'e.g. Gunshot wound to abdomen' },
            { label: 'Due to (c)', desc: 'Underlying cause (root)', example: 'e.g. Homicidal assault' },
          ].map((row, i) => (
            <div key={i} className="flex items-start gap-2">
              {i > 0 && <span className="text-slate-500 text-xs mt-0.5 shrink-0">↳</span>}
              {i === 0 && <span className="w-3" />}
              <div>
                <p className="text-[10px] font-bold text-slate-200">{row.label}</p>
                <p className="text-[10px] text-slate-400">{row.desc} · <span className="italic">{row.example}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-slate-700/30 border border-slate-600 rounded-xl p-3">
        <p className="text-xs font-bold text-sky-400 mb-1">PART II — Contributing Conditions</p>
        <p className="text-[10px] text-slate-300">Conditions that contributed to death but were NOT in the causal chain.</p>
        <p className="text-[10px] text-slate-400 italic mt-1">e.g. Hypertension, Diabetes mellitus</p>
      </div>
    </div>
  );
}

export function MannerOfDeathTree() {
  const manners = [
    { name: 'Natural', color: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300', desc: 'Disease/illness only — no external factors' },
    { name: 'Accident', color: 'bg-sky-500/20 border-sky-500/50 text-sky-300', desc: 'Unintentional injury or environmental event' },
    { name: 'Homicide', color: 'bg-red-500/20 border-red-500/50 text-red-300', desc: 'Death caused by act of another person' },
    { name: 'Suicide', color: 'bg-orange-500/20 border-orange-500/50 text-orange-300', desc: 'Intentional self-inflicted death' },
    { name: 'Undetermined', color: 'bg-slate-600/40 border-slate-500/50 text-slate-300', desc: 'Insufficient evidence for classification' },
  ];
  return (
    <div className="p-2">
      <div className="flex justify-center mb-3">
        <div className="bg-amber-500/20 border border-amber-500/50 rounded-xl px-4 py-2 text-center">
          <p className="text-xs font-bold text-amber-300">Manner of Death</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2">
        {manners.map(m => (
          <div key={m.name} className={`${m.color} border rounded-xl px-3 py-2 flex items-center gap-3`}>
            <span className={`text-sm font-bold shrink-0 w-24 ${m.color.split(' ')[2]}`}>{m.name}</span>
            <p className="text-[10px] text-slate-300">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const DIAGRAM_VISUALS = {
  'Time of Death / Postmortem Changes': PostmortemChangesTimeline,
  'Time of Death / Livor Mortis': LivorMortisPattern,
  'Decomposition / Stages': DecompositionStages,
  'Forensic Pathology / Wound Classification': WoundClassification,
  'Forensic Pathology / Gunshot Ranges': GunshotRanges,
  'Identification / DNA Profiling': DNAProfilingProcess,
  'Identification / Fingerprints': FingerprintPatterns,
  'Entomology / Blow Fly Life Cycle': BlowFlyLifeCycle,
  'Mass Fatality / ICS Structure': MassFatalityStructure,
  'Toxicology / Drug Metabolism': DrugMetabolism,
  'Documentation / Death Certificate': DeathCertificateStructure,
  'Cause & Manner of Death / Classification': MannerOfDeathTree,
};
