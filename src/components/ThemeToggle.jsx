import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const themes = [
  { id: 'light', label: 'Minimal Light' },
  { id: 'sunset', label: 'Sunset / Dusk' },
];

function ThemeToggle() {
  const [theme, setTheme] = useState('sunset');

  useEffect(() => {
    const saved = localStorage.getItem('studyplanner-theme');
    if (saved) {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    // We map 'sunset' to dark mode + custom gradients
    const root = document.documentElement;
    if (theme === 'sunset') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('studyplanner-theme', theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="Switch to Minimal Light"
        onClick={() => setTheme('light')}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition border backdrop-blur ${
          theme === 'light'
            ? 'bg-white/80 text-slate-800 border-slate-200 shadow'
            : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/15'
        }`}
      >
        <Sun className="h-4 w-4" /> Light
      </button>
      <button
        aria-label="Switch to Sunset / Dusk"
        onClick={() => setTheme('sunset')}
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm transition border backdrop-blur ${
          theme === 'sunset'
            ? 'bg-gradient-to-r from-orange-500/80 to-pink-500/80 text-white border-transparent shadow-lg shadow-orange-500/30'
            : 'bg-white/10 text-white/90 border-white/10 hover:bg-white/15'
        }`}
      >
        <Moon className="h-4 w-4" /> Sunset
      </button>
    </div>
  );
}

export default ThemeToggle;
