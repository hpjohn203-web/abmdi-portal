import { useMemo } from 'react';
import questions from '../data/questions.json';
import { useProgress } from '../hooks/useProgress';

export default function Results({ onNavigate }) {
  const { progress, getTopicStats } = useProgress();
  const topicStats = useMemo(() => getTopicStats(questions), [progress]);

  const totalAnswered = Object.values(progress.cardStats).reduce((a, s) => a + s.correct + s.wrong, 0);
  const totalCorrect = Object.values(progress.cardStats).reduce((a, s) => a + s.correct, 0);
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  // Rank topics by accuracy (only attempted ones)
  const attempted = Object.entries(topicStats)
    .filter(([, s]) => s.attempted > 0)
    .map(([topic, s]) => ({
      topic,
      pct: Math.round((s.correct / s.attempted) * 100),
      attempted: s.attempted,
      total: s.total,
      correct: s.correct,
    }))
    .sort((a, b) => a.pct - b.pct);

  const weak = attempted.filter(t => t.pct < 60).slice(0, 5);
  const strong = attempted.filter(t => t.pct >= 80).slice(-5).reverse();
  const notStarted = Object.entries(topicStats)
    .filter(([, s]) => s.attempted === 0)
    .map(([topic]) => topic)
    .slice(0, 5);

  const recentSessions = progress.sessionHistory.slice(0, 10);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col max-w-lg mx-auto">
      <div className="flex items-center gap-3 px-4 py-4 border-b border-slate-800">
        <button onClick={() => onNavigate('home')} className="text-slate-400 hover:text-slate-200 p-1">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="text-lg font-bold">My Progress</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6">
        {/* Overall */}
        <div className="bg-slate-800 rounded-3xl p-6 text-center">
          <div className="text-5xl font-black mb-1">
            <span className={overallPct >= 80 ? 'text-emerald-400' : overallPct >= 60 ? 'text-amber-400' : 'text-red-400'}>
              {overallPct}%
            </span>
          </div>
          <p className="text-slate-400 text-sm">Overall Accuracy</p>
          <p className="text-xs text-slate-500 mt-1">{totalCorrect} correct out of {totalAnswered} answered</p>

          <div className="grid grid-cols-3 gap-3 mt-4">
            <MiniStat label="Studied" value={Object.keys(progress.cardStats).length} />
            <MiniStat label="Total Qs" value={questions.length} />
            <MiniStat label="Sessions" value={progress.sessionHistory.length} />
          </div>
        </div>

        {/* Weak areas */}
        {weak.length > 0 && (
          <Section title="⚠️ Weak Areas — Focus Here" color="red">
            {weak.map(t => <TopicBar key={t.topic} {...t} />)}
            <button
              onClick={() => onNavigate('quiz')}
              className="w-full mt-3 bg-red-500/20 border border-red-500/30 text-red-400 text-sm font-semibold py-3 rounded-xl active:scale-95 transition-all"
            >
              Quiz on Weak Topics →
            </button>
          </Section>
        )}

        {/* Strong areas */}
        {strong.length > 0 && (
          <Section title="✅ Strong Areas" color="emerald">
            {strong.map(t => <TopicBar key={t.topic} {...t} />)}
          </Section>
        )}

        {/* Not started */}
        {notStarted.length > 0 && (
          <Section title="📚 Not Yet Started" color="slate">
            <div className="space-y-1">
              {notStarted.map(t => (
                <div key={t} className="text-sm text-slate-400 bg-slate-800 rounded-xl px-3 py-2">{t}</div>
              ))}
            </div>
          </Section>
        )}

        {/* Session history */}
        {recentSessions.length > 0 && (
          <Section title="📋 Session History" color="amber">
            <div className="space-y-2">
              {recentSessions.map((s, i) => {
                const pct = Math.round((s.score / s.total) * 100);
                return (
                  <div key={i} className="flex items-center justify-between bg-slate-800 rounded-xl px-3 py-2.5">
                    <div>
                      <p className="text-sm font-medium">{s.topic}</p>
                      <p className="text-xs text-slate-400">{new Date(s.date).toLocaleDateString()} {new Date(s.date).toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'})}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-base font-bold ${pct >= 80 ? 'text-emerald-400' : pct >= 60 ? 'text-amber-400' : 'text-red-400'}`}>{pct}%</p>
                      <p className="text-xs text-slate-400">{s.score}/{s.total}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Section>
        )}

        {totalAnswered === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">📊</p>
            <p className="text-slate-400">No activity yet. Start studying to see your progress here.</p>
            <button onClick={() => onNavigate('study')} className="mt-4 bg-amber-500 text-slate-900 font-bold px-6 py-3 rounded-2xl">
              Start Studying
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="bg-slate-700 rounded-xl py-2">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-xs text-slate-400">{label}</p>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-slate-300 mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function TopicBar({ topic, pct, attempted, total }) {
  const color = pct >= 80 ? 'bg-emerald-400' : pct >= 60 ? 'bg-amber-400' : 'bg-red-400';
  const textColor = pct >= 80 ? 'text-emerald-400' : pct >= 60 ? 'text-amber-400' : 'text-red-400';
  return (
    <div className="bg-slate-800 rounded-xl px-3 py-3">
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm truncate max-w-[180px]">{topic}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">{attempted}/{total}</span>
          <span className={`text-sm font-bold ${textColor}`}>{pct}%</span>
        </div>
      </div>
      <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full progress-bar-fill`} style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
