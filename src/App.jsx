import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { Flame, Sparkles, Zap, Timer, ShieldCheck, ArrowRight, Star } from 'lucide-react'

const Section = ({ id, children }) => (
  <section id={id} className="relative w-full py-20 md:py-28">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(37,99,235,0.25),transparent_70%)]" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(40%_40%_at_30%_100%,rgba(220,38,38,0.18),transparent_70%)]" />
    </div>
    <div className="relative max-w-6xl mx-auto px-6">{children}</div>
  </section>
)

const Badge = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1 text-xs uppercase tracking-widest text-slate-200/80 shadow-[0_0_12px_rgba(56,189,248,0.2)_inset] backdrop-blur">
    {children}
  </span>
)

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="group relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 shadow-[0_0_0_1px_rgba(56,189,248,0.08)_inset,0_10px_40px_-12px_rgba(2,132,199,0.25)]"
  >
    <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/20" />
    <Icon className="h-6 w-6 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]" />
    <h3 className="mt-4 text-lg font-bold text-slate-100">{title}</h3>
    <p className="mt-2 text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
)

const StatPill = ({ value, label }) => (
  <div className="flex items-center gap-3 rounded-full border border-slate-800/80 bg-slate-900/70 px-5 py-2">
    <span className="text-lg font-extrabold text-slate-100 tracking-tight">{value}</span>
    <span className="text-xs uppercase tracking-widest text-slate-400">{label}</span>
  </div>
)

const Testimonial = ({ quote, name, role }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70 p-6 shadow-[0_0_0_1px_rgba(248,113,113,0.08)_inset,0_10px_40px_-12px_rgba(239,68,68,0.25)]"
  >
    <div className="absolute -left-10 -top-10 h-32 w-32 rounded-full bg-rose-500/10 blur-2xl" />
    <p className="text-slate-200 text-lg leading-relaxed italic">“{quote}”</p>
    <div className="mt-4 flex items-center gap-3">
      <div className="flex -space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]" fill="#facc15" />
        ))}
      </div>
      <div className="h-1 w-1 rounded-full bg-slate-600" />
      <p className="text-slate-400 text-sm">{name} • {role}</p>
    </div>
  </motion.div>
)

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* HERO */}
      <div className="relative h-[92vh] w-full overflow-hidden">
        {/* Spline background */}
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>

        {/* Glows and gradients */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60" />
          <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(59,130,246,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(30%_30%_at_80%_20%,rgba(239,68,68,0.18),transparent_60%)]" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
          <div className="max-w-2xl">
            <Badge>
              <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
              Next‑Gen Energy • No Sugar Crash
            </Badge>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-6 text-4xl leading-tight font-extrabold md:text-6xl md:leading-[1.05] tracking-tight"
            >
              Fuel Your Focus. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-slate-100 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">Power Your Drive.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-slate-300/90 md:text-lg"
            >
              THRYV is engineered for sharp focus, long‑lasting endurance, and clean performance — without the crash.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#why"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-6 py-3 font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur transition hover:bg-cyan-500/30"
              >
                Experience THRYV
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex flex-wrap gap-3">
                <StatPill value="+6h" label="sustained energy" />
                <StatPill value="0g" label="sugar" />
                <StatPill value="Clean" label="no crash" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Edge glow */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* WHY THRYV */}
      <Section id="why">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-white"
        >
          Why THRYV
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-400">Quick, punchy benefits that hit when it counts.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={Flame} title="Peak Focus" desc="Dialed‑in cognition so you lock‑in faster and stay there longer." />
          <Feature icon={Zap} title="Clean Energy" desc="Ultra‑smooth lift without jitters. No sugar. No nonsense." />
          <Feature icon={Timer} title="Endurance" desc="Sustained output for training, studying, and marathon sessions." />
          <Feature icon={ShieldCheck} title="Zero Crash" desc="Balanced actives and L‑theanine keep you steady to the finish." />
        </div>
      </Section>

      {/* FORMULA BREAKDOWN */}
      <Section id="formula">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-extrabold tracking-tight"
          >
            Formula Breakdown
          </motion.h2>
          <Badge>
            <Sparkles className="h-3.5 w-3.5 text-rose-300" /> Premium • Lab‑Formulated
          </Badge>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {[
            { k: 'Caffeine', v: '200mg', d: 'Optimal alertness and rapid mobilization.' },
            { k: 'Taurine', v: '1000mg', d: 'Cellular energy support for sustained output.' },
            { k: 'L‑Theanine', v: '150mg', d: 'Smooth focus — reduces jitters and stress.' },
            { k: 'Electrolytes', v: 'Multi', d: 'Hydration balance for performance longevity.' },
            { k: 'Vitamins B‑Complex', v: 'Full Spectrum', d: 'Metabolic support for clean energy.' },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5"
            >
              <div className="absolute right-0 top-0 h-24 w-24 bg-blue-500/10 blur-2xl" />
              <p className="text-xs uppercase tracking-widest text-slate-400">{item.k}</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-100">{item.v}</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* SOCIAL PROOF */}
      <Section id="proof">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-extrabold tracking-tight"
        >
          Built for high performers
        </motion.h2>
        <p className="mt-3 max-w-2xl text-slate-400">Athletes. Creators. Students. Night‑shift grinders. Hear it from the field.</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          <Testimonial quote="Locked me in for a 2‑hour PR attempt — smooth rise, no jitters, zero crash." name="Ava R." role="Track Athlete" />
          <Testimonial quote="Pulled a 12‑hour render session. Felt focused and calm the whole time." name="Mason T." role="3D Artist" />
          <Testimonial quote="Midterms week savior. Clear mind, steady energy — no afternoon slump." name="Jules P." role="Engineering Student" />
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section id="cta">
        <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-10 text-center shadow-[0_0_0_1px_rgba(56,189,248,0.08)_inset,0_10px_60px_-12px_rgba(2,132,199,0.35)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(59,130,246,0.18),transparent_70%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(30%_40%_at_80%_100%,rgba(239,68,68,0.14),transparent_70%)]" />
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="relative text-3xl md:text-4xl font-extrabold"
          >
            Join the THRYV Movement
          </motion.h3>
          <p className="relative mt-3 text-slate-400 max-w-2xl mx-auto">Step into a new standard for performance. Clean, powerful, relentless — by design.</p>
          <div className="relative mt-7 flex items-center justify-center gap-4 flex-wrap">
            <a href="#" className="group inline-flex items-center gap-3 rounded-full border border-cyan-400/50 bg-cyan-500/20 px-6 py-3 font-semibold text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.25)] backdrop-blur transition hover:bg-cyan-500/30">
              Get Notified
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#formula" className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-6 py-3 text-slate-200/90 transition hover:bg-slate-900">
              Explore Formula
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="relative mt-16 border-t border-slate-800/80 py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-cyan-500 to-rose-500 text-slate-950 font-black shadow-[0_0_20px_rgba(34,211,238,0.35)]">T</div>
            <p className="text-slate-400 text-sm">THRYV • Clean Performance Energy</p>
          </div>
          <div className="flex items-center gap-3 text-slate-500 text-xs">
            <span>© {new Date().getFullYear()} THRYV</span>
            <span className="h-1 w-1 rounded-full bg-slate-700" />
            <span>All Rights Reserved</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
