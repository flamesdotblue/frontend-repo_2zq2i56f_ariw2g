import React from 'react';
import HeroCover from './components/HeroCover';
import Dashboard from './components/Dashboard';
import PomodoroTimer from './components/PomodoroTimer';
import ThemeToggle from './components/ThemeToggle';
import { User } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-yellow-50 dark:from-[#0b0a0f] dark:via-[#121018] dark:to-[#1a1422] transition-colors">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 dark:bg-black/20 border-b border-white/60 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-orange-500 to-pink-500 shadow-md grid place-items-center text-white font-semibold">
              SP
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">Study Planner</p>
              <p className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">Calm & Focus</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-slate-800 hover:bg-white/90 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-100">
              <User className="h-4 w-4" /> Profile
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 md:px-10 lg:px-14 py-8 md:py-12 space-y-10 md:space-y-14">
        <HeroCover />

        <Dashboard />

        <PomodoroTimer />

        <footer className="pt-6 pb-12 text-center text-xs text-slate-500 dark:text-slate-400">
          Designed for clarity and focus • Warm sunset aesthetic • Responsive & minimal
        </footer>
      </main>
    </div>
  );
}

export default App;
