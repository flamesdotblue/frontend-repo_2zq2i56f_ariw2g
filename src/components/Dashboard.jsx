import React, { useState } from 'react';
import { Calendar, CheckCircle2, Target, Trophy, Quote } from 'lucide-react';

function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-white/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}

function Dashboard() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Read chapter 3 - Biology', done: false },
    { id: 2, text: 'Solve 10 calculus problems', done: true },
    { id: 3, text: 'Review literature notes', done: false },
  ]);

  const toggleTodo = (id) =>
    setTodos(prev => prev.map(t => (t.id === id ? { ...t, done: !t.done } : t)));

  const weeklyProgress = [
    { label: 'Math', value: 70 },
    { label: 'Biology', value: 45 },
    { label: 'History', value: 85 },
  ];

  const badges = [
    { label: 'Streak 7d', color: 'from-yellow-400 to-orange-500' },
    { label: 'On-time Submissions', color: 'from-emerald-400 to-teal-500' },
    { label: 'Deep Focus 2h', color: 'from-pink-400 to-fuchsia-500' },
  ];

  const quote = {
    text: 'Dream it. Break it down. Do it.',
    author: 'Vision Vault',
  };

  return (
    <section id="dashboard" className="grid gap-6 md:gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Daily To-Do */}
        <div className="rounded-3xl p-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-orange-500/10 border border-white/40 dark:border-white/10">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 mb-4">
            <CheckCircle2 className="h-5 w-5" />
            <h3 className="font-semibold">Today</h3>
          </div>
          <ul className="space-y-3">
            {todos.map(t => (
              <li key={t.id} className="flex items-center gap-3">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-pink-500 focus:ring-pink-500"
                  checked={t.done}
                  onChange={() => toggleTodo(t.id)}
                />
                <span className={`text-sm ${t.done ? 'line-through text-slate-400 dark:text-slate-500' : 'text-slate-700 dark:text-slate-200'}`}>
                  {t.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Weekly Progress */}
        <div className="rounded-3xl p-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-orange-500/10 border border-white/40 dark:border-white/10">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 mb-4">
            <Target className="h-5 w-5" />
            <h3 className="font-semibold">Weekly Progress</h3>
          </div>
          <div className="space-y-4">
            {weeklyProgress.map((p) => (
              <div key={p.label}>
                <div className="flex justify-between text-xs mb-1 text-slate-500 dark:text-slate-400">
                  <span>{p.label}</span>
                  <span>{p.value}%</span>
                </div>
                <ProgressBar value={p.value} />
              </div>
            ))}
          </div>
        </div>

        {/* Monthly Badges */}
        <div className="rounded-3xl p-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-orange-500/10 border border-white/40 dark:border-white/10">
          <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 mb-4">
            <Trophy className="h-5 w-5" />
            <h3 className="font-semibold">Monthly Achievements</h3>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className={`rounded-2xl p-3 text-center text-xs text-white bg-gradient-to-br ${b.color} shadow-md`}
              >
                {b.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote / Intention */}
      <div className="rounded-3xl p-5 md:p-7 bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 dark:from-orange-500/10 dark:via-pink-500/10 dark:to-yellow-500/10 border border-white/40 dark:border-white/10 backdrop-blur-xl shadow-lg">
        <div className="flex items-start gap-3">
          <div className="rounded-full p-2 bg-white/70 dark:bg-white/10 border border-white/50 dark:border-white/10">
            <Quote className="h-5 w-5 text-pink-600 dark:text-pink-300" />
          </div>
          <div>
            <p className="text-slate-700 dark:text-slate-200 font-medium">{quote.text}</p>
            <p className="text-xs mt-1 text-slate-500 dark:text-slate-400">— {quote.author}</p>
          </div>
        </div>
      </div>

      {/* Calendar Preview (static) */}
      <div className="rounded-3xl p-5 md:p-7 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-orange-500/10 border border-white/40 dark:border-white/10">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200 mb-4">
          <Calendar className="h-5 w-5" />
          <h3 className="font-semibold">This Week at a Glance</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-7 gap-3 text-xs">
          {['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map((d, idx) => (
            <div key={d} className="rounded-2xl p-3 border border-white/50 dark:border-white/10 bg-gradient-to-br from-white/70 to-white/40 dark:from-white/5 dark:to-white/0">
              <div className="font-medium text-slate-600 dark:text-slate-300 mb-2">{d}</div>
              <div className="space-y-2">
                {idx % 2 === 0 ? (
                  <span className="inline-block w-full rounded-xl px-2 py-1 bg-orange-500/20 text-orange-700 dark:text-orange-300">Study • 6pm</span>
                ) : (
                  <span className="inline-block w-full rounded-xl px-2 py-1 bg-pink-500/20 text-pink-700 dark:text-pink-300">Class • 9am</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
