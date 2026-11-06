import { motion } from 'framer-motion'
import { Target } from 'lucide-react'
import { rollout } from '../content/content'
import { Label } from '../components/Label'
import { ease, rise, stagger } from '../components/motion'

export default function S10Rollout() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 45% at 50% 108%, rgba(92,227,229,0.28), transparent 70%), #0A2326' }}>
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={15}>{rollout.label}</Label>
        </motion.div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.h2 variants={rise} className="display h-lg max-w-[18ch]">
            {rollout.title}
          </motion.h2>
          <motion.p variants={rise} className="lead text-white/75 lg:justify-self-end lg:pb-2">
            {rollout.lead}
          </motion.p>
        </div>

        <div className="relative mt-8 grid gap-3 md:grid-cols-3 lg:my-auto lg:pt-8">
          <div className="pointer-events-none absolute left-[8%] right-[8%] top-[46px] hidden h-px bg-white/15 md:block" />
          {rollout.cycles.map((c, ci) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.4 + ci * 0.18 }}
              className={`${ci === 2 ? 'glass-cyan' : 'glass'} relative flex flex-col p-5 lg:p-6`}
            >
              <div className="flex items-center gap-4">
                <svg className="h-12 w-12 shrink-0 -rotate-90" viewBox="0 0 48 48" aria-hidden>
                  <circle cx="24" cy="24" r="20" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="3" />
                  <motion.circle cx="24" cy="24" r="20" fill="none" stroke="#5CE3E5" strokeWidth="3" strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: (ci + 1) / 3 }} transition={{ duration: 1.4, ease, delay: 0.7 + ci * 0.3 }} />
                </svg>
                <div>
                  <p className="text-[14px] text-white/75">{c.name}</p>
                  <p className="text-[22px] font-semibold tracking-[-0.02em]">{c.sub}</p>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-4">
                {c.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] text-white/90">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {it}
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex items-center gap-2 text-[13px] font-semibold text-cyan lg:mt-auto lg:pt-5">
                <Target className="h-4 w-4" strokeWidth={1.8} />
                {c.kpi}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
