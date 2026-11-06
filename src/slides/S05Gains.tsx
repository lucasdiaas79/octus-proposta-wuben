import { motion } from 'framer-motion'
import { CalendarRange, KeyRound, Wine, Zap } from 'lucide-react'
import { gains } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const icons = { calendar: CalendarRange, key: KeyRound, wine: Wine, zap: Zap } as const

export default function S05Gains() {
  return (
    <div className="tex-grid-dark relative min-h-[100dvh] overflow-hidden" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 100%, #0F3438, #0A2326 65%)', backgroundColor: '#0A2326' }}>
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <Label n={5}>{gains.label}</Label>
          <p className="hidden text-[12px] text-white/55 lg:block">{gains.note}</p>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[24ch]">
          <Rich text={gains.title} />
        </motion.h2>

        <div className="cmp-gap mt-8 grid gap-3 md:grid-cols-2 lg:mt-auto lg:pt-8">
          {gains.items.map((g, i) => {
            const Icon = icons[g.icon as keyof typeof icons]
            return (
              <motion.article
                key={g.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.4 + i * 0.12 }}
                className="glass cmp-p cmp-gap flex flex-col gap-4 p-5 lg:p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-cyan/15 text-cyan">
                    <span className="draw" style={{ ['--d' as string]: `${0.6 + i * 0.15}s` }}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                  </span>
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] lg:text-[clamp(17px,1.35vw,21px)]">{g.title}</h3>
                  <span className="ml-auto text-[12px] font-semibold tabular-nums text-white/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2 sm:gap-5">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">{gains.todayLabel}</p>
                    <p className="mt-1 text-[14px] leading-snug text-white/70 lg:text-[15px]">{g.today}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">{gains.actionLabel}</p>
                    <p className="mt-1 text-[14px] font-medium leading-snug text-white lg:text-[15px]">{g.action}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 border-t border-white/10 pt-3">
                  {g.impact.map((t) => (
                    <span key={t} className="rounded-full bg-cyan/12 px-3 py-1 text-[12px] font-semibold text-cyan">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
        <motion.p variants={rise} className="mt-4 text-[12px] text-white/55 lg:hidden">
          {gains.note}
        </motion.p>
      </motion.div>
    </div>
  )
}
