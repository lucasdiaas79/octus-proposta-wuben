import { motion } from 'framer-motion'
import { BarChart3, LayoutGrid, Play, RefreshCw, TrendingUp } from 'lucide-react'
import { method } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const icons = [BarChart3, LayoutGrid, Play, RefreshCw, TrendingUp]

export default function S09Method() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={14} tone="light">{method.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-xl mt-5">
          <Rich text={method.title} accent="text-cyan-deep" />
        </motion.h2>

        <div className="relative mt-10 lg:my-auto lg:pt-8">
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-ink/15 lg:block" />
          <motion.div className="absolute left-0 top-[27px] hidden h-px w-full origin-left bg-cyan-deep lg:block" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, ease, delay: 0.4 }} />
          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {method.steps.map((s, i) => {
              const Icon = icons[i]
              const last = i === method.steps.length - 1
              return (
                <motion.li key={s.name} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease, delay: 0.5 + i * 0.18 }} className="flex gap-4 lg:block">
                  <motion.span
                    className={`relative grid h-14 w-14 shrink-0 place-items-center rounded-[14px] ${last ? 'solid-deep !rounded-[14px]' : 'bg-ink text-cyan'}`}
                    animate={{ boxShadow: ['0 0 0 0 rgba(92,227,229,0)', '0 0 0 8px rgba(92,227,229,0.28)', '0 0 0 0 rgba(92,227,229,0)'] }}
                    transition={{ duration: 0.9, delay: 0.6 + i * 0.36 }}
                  >
                    <span className="draw" style={{ ['--d' as string]: `${0.5 + i * 0.36}s` }}>
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                  </motion.span>
                  <div>
                    <p className="text-[clamp(24px,2.2vw,36px)] font-extralight text-ink/45 lg:mt-5">{String(i + 1).padStart(2, '0')}</p>
                    <p className="mt-1 text-[18px] font-semibold tracking-[-0.01em] lg:text-[clamp(17px,1.35vw,22px)]">{s.name}</p>
                    <p className="mt-1 max-w-[24ch] text-[14px] leading-snug text-ink/70 lg:text-[15px]">{s.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>
      </motion.div>
    </div>
  )
}
