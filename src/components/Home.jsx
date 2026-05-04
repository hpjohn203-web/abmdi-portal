import { useMemo } from 'react';
import questions from '../data/questions.json';
import { useProgress } from '../hooks/useProgress';

const TOPIC_ICONS = {
  'Capital': '💰', 'Finance': '💰', 'Financial': '💰', 'NPV': '💰', 'IRR': '💰',
  'IT': '🔒', 'Cyber': '🔒', 'Security': '🔒', 'Cloud': '🔒', 'Zero': '🔒',
  'Data': '📊', 'Analytics': '📊', 'Database': '📊',
  'Risk': '⚠️', 'ERM': '⚠️', 'Audit': '🔍', 'Internal': '🔍',
  'Org': '🏢', 'Leadership': '🏢', 'Structure': '🏢',
  'Strategy': '♟️', 'Porter': '♟️', 'BCG': '♟️', 'Market': '♟️',
  'Supply': '🚚', 'Inventory': '🚚', 'Logistics': '🚚',
  'IFRS': '📋', 'GAAP': '📋', 'Accounting': '📋',
};

function getIcon(topic) {
  for (const [key, icon] of Object.entries(TOPIC_ICONS)) {
    if (topic.includes(key)) return icon;
  }
  return '📚';
}

export default function Home({ onNavigate }) {
  const { progress, getTopicStats, resetProgress } = useProgress();
  const topicStats = useMemo(() => getTopicStats(questions), [progress]);

  const totalAttempted = Object.values(progress.cardStats).filter(
    s => (s.correct + s.wrong) > 0
  ).length;
  const totalCorrect = Object.values(progress.cardStats).reduce(
    (acc, s) => acc + s.correct, 0
  );
  const totalAnswered = Object.values(progress.cardStats).reduce(
    (acc, s) => acc + s.correct + s.wrong, 0
  );
  const overallPct = totalAnswered > 0 ? Math.round((totalCorrect / totalAnswered) * 100) : 0;

  const topics = Object.entries(topicStats)
    .sort((a, b) => b[1].total - a[1].total)
    .slice(0, 20);

  const recentSessions = progress.sessionHistory.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 px-4 py-6 max-w-lg mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-2xl font-bold text-amber-400">CIA Part 3</h1>
          <span className="text-xs text-slate-400 bg-slate-800 px-2 py-1 rounded-full">500 Questions</span>
        </div>
        <p className="text-slate-400 text-sm">Exam Prep Portal</p>
      </div>

      {/* Overall stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <StatCard label="Studied" value={totalAttempted} total={questions.length} color="amber" />
        <StatCard label="Accuracy" value={`${overallPct}%`} color="emerald" />
        <StatCard label="Sessions" value={progress.sessionHistory.length} color="sky" />
      </div>

      {/* Action buttons */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <ActionBtn icon="🃏" label="Flashcards" sub="Flip to reveal" color="amber" onClick={() => onNavigate('study')} />
        <ActionBtn icon="⏱️" label="Quiz Mode" sub="Timed MCQ" color="sky" onClick={() => onNavigate('quiz')} />
        <ActionBtn icon="📹" label="Video Library" sub="Topic videos" color="violet" onClick={() => onNavigate('videos')} />
        <ActionBtn icon="📊" label="My Results" sub="Progress report" color="emerald" onClick={() => onNavigate('results')} />
      </div>

      {/* Recent sessions */}
      {recentSessions.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Recent Sessions</h2>
          <div className="space-y-2">
            {recentSessions.map((s, i) => (
              <div key={i} className="bg-slate-800 rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">{s.topic}</p>
                  <p className="text-xs text-slate-400">{new Date(s.date).toLocaleDateString()}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-amber-400">{s.score}/{s.total}</p>
                  <p className="text-xs text-slate-400">{Math.round((s.score/s.total)*100)}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Topic cards */}
      <div className="mb-4">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">Topics</h2>
        <div className="space-y-2">
          {topics.map(([topic, stats]) => {
            const pct = stats.attempted > 0 ? Math.round((stats.correct / stats.attempted) * 100) : 0;
            const progress = Math.round((stats.attempted / stats.total) * 100);
            return (
              <div key={topic} className="bg-slate-800 rounded-xl px-4 py-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span>{getIcon(topic)}</span>
                    <span className="text-sm font-medium truncate max-w-[180px]">{topic}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">{stats.attempted}/{stats.total}</span>
                    {stats.attempted > 0 && (
                      <span className={`text-xs font-bold ${pct >= 70 ? 'text-emerald-400' : pct >= 50 ? 'text-amber-400' : 'text-red-400'}`}>
                        {pct}%
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full progress-bar-fill"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { if (confirm('Reset all progress?')) resetProgress(); }}
        className="w-full text-xs text-slate-600 hover:text-slate-400 py-4 transition-colors"
      >
        Reset Progress
      </button>
    </div>
  );
}

function StatCard({ label, value, total, color }) {
  const colors = {
    amber: 'text-amber-400',
    emerald: 'text-emerald-400',
    sky: 'text-sky-400',
  };
  return (
    <div className="bg-slate-800 rounded-xl p-3 text-center">
      <p className={`text-xl font-bold ${colors[color]}`}>{value}</p>
      {total && <p className="text-[10px] text-slate-500">of {total}</p>}
      <p className="text-xs text-slate-400 mt-0.5">{label}</p>
    </div>
  );
}

function ActionBtn({ icon, label, sub, color, onClick }) {
  const colors = {
    amber: 'border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/10',
    sky: 'border-sky-500/30 hover:border-sky-500/60 hover:bg-sky-500/10',
    violet: 'border-violet-500/30 hover:border-violet-500/60 hover:bg-violet-500/10',
    emerald: 'border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-500/10',
  };
  return (
    <button
      onClick={onClick}
      className={`bg-slate-800 border ${colors[color]} rounded-2xl p-4 text-left transition-all active:scale-95`}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <p className="font-semibold text-sm">{label}</p>
      <p className="text-xs text-slate-400">{sub}</p>
    </button>
  );
}
