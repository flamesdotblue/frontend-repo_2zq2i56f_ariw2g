import React from 'react';
import Spline from '@splinetool/react-spline';

function HeroCover() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-orange-200 via-pink-200 to-purple-200 dark:from-[#0b0a0f] dark:via-[#151327] dark:to-[#221b2c] shadow-xl">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent dark:from-[#0b0a0f]/60 dark:via-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-orange-100/30 via-transparent to-pink-100/30 dark:from-orange-400/10 dark:to-pink-400/10" />

      <div className="relative z-10 h-full flex items-center">
        <div className="px-6 md:px-10 lg:px-14 w-full">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-800 dark:text-slate-100">
              Your Calm Study Planner
            </h1>
            <p className="mt-3 md:mt-5 text-slate-700/80 dark:text-slate-200/80 text-sm md:text-base">
              Plan your day, track weekly progress, and celebrate monthly wins — all in a soothing sunset vibe.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#dashboard"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-pink-500 px-5 py-2 text-white shadow-lg shadow-orange-500/30 hover:opacity-95 transition"
              >
                Open Dashboard
              </a>
              <a
                href="#focus"
                className="inline-flex items-center rounded-full border border-white/50 bg-white/60 px-5 py-2 text-slate-800 backdrop-blur-md hover:bg-white/70 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              >
                Start Focus Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCover;
