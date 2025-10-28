import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
  const s = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

const PRESETS = [
  { key: 'pomodoro', label: 'Pomodoro', minutes: 25 },
  { key: 'short', label: 'Short Break', minutes: 5 },
  { key: 'long', label: 'Long Break', minutes: 15 },
];

function PomodoroTimer() {
  const [seconds, setSeconds] = useState(PRESETS[0].minutes * 60);
  const [running, setRunning] = useState(false);
  const [active, setActive] = useState(PRESETS[0].key);
  const intervalRef = useRef(null);

  const activePreset = useMemo(() => PRESETS.find(p => p.key === active)!, [active]);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(prev => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [running]);

  useEffect(() => {
    setSeconds(activePreset.minutes * 60);
    setRunning(false);
  }, [activePreset.minutes]);

  useEffect(() => {
    if (seconds === 0 && running) {
      setRunning(false);
      try {
        new Audio('/notification.mp3').play();
      } catch (e) {
        // ignore autoplay restrictions
      }
    }
  }, [seconds, running]);

  const setPreset = (key) => setActive(key);

  return (
    <section id="focus" className="rounded-3xl p-5 md:p-7 bg-white/80 dark:bg-white/5 backdrop-blur-xl shadow-lg shadow-orange-500/10 border border-white/40 dark:border-white/10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <Timer className="h-5 w-5" />
          <h3 className="font-semibold">Focus Session</h3>
        </div>
        <div className="flex gap-2">
          {PRESETS.map(p => (
            <button
              key={p.key}
              onClick={() => setPreset(p.key)}
              className={`rounded-full px-3 py-1.5 text-xs md:text-sm transition border backdrop-blur ${
                active === p.key
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white border-transparent shadow-md'
                  : 'bg-white/60 text-slate-700 border-slate-200 hover:bg-white/80 dark:bg-white/10 dark:text-slate-200 dark:border-white/10'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col items-center">
        <div className="rounded-3xl w-full md:w-80 aspect-square grid place-items-center bg-gradient-to-br from-orange-100/80 via-pink-100/70 to-yellow-100/70 dark:from-orange-500/10 dark:via-pink-500/10 dark:to-yellow-500/10 border border-white/60 dark:border-white/10 shadow-inner">
          <span className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
            {formatTime(seconds)}
          </span>
        </div>
        <div className="mt-5 flex items-center gap-3">
          <button
            onClick={() => setRunning(r => !r)}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 text-white shadow-lg shadow-orange-500/30 hover:opacity-95 transition"
          >
            {running ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {running ? 'Pause' : 'Start'}
          </button>
          <button
            onClick={() => {
              setRunning(false);
              setSeconds(activePreset.minutes * 60);
            }}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2 text-slate-800 hover:bg-white/90 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
          >
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
        </div>
      </div>
    </section>
  );
}

export default PomodoroTimer;
