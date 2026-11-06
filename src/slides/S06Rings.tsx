import { motion } from 'framer-motion'
import { rings } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

/** Públicos em três anéis: núcleo → adjacentes → consumidor comum. */
export default function S06Rings() {
  const sizes = ['34%', '64%', '94%']
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={6} tone="light">{rings.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[26ch]">
          <Rich text={rings.title} accent="text-cyan-deep" />
        </motion.h2>

        <div className="mt-8 grid items-center gap-8 lg:my-auto lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:pt-6">
          {/* Anéis */}
          <div className="relative mx-auto aspect-square w-full max-w-[300px] lg:max-w-[min(440px,52vh)]">
            {[...sizes].reverse().map((s, ri) => {
              const i = 2 - ri
              return (
                <motion.div
                  key={s}
                  initial={{ opacity: 0, scale: 0.6 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.9, ease, delay: 0.3 + i * 0.25 }}
                  className={`absolute rounded-full ${
                    i === 0 ? 'bg-ink' : i === 1 ? 'border border-cyan-deep/40 bg-cyan-deep/10' : 'border border-ink/15 bg-white/60'
                  }`}
                  style={{ width: s, height: s, left: `calc(50% - ${s} / 2)`, top: `calc(50% - ${s} / 2)` }}
                />
              )
            })}
            <motion.span
              className="absolute left-[33%] top-[33%] h-[34%] w-[34%] rounded-full border border-cyan/50"
              animate={{ scale: [1, 2.7], opacity: [0.6, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeOut', delay: 1.2 }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">{rings.items[0].role}</p>
            </div>
            <p className="absolute left-1/2 top-[23%] -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-deep">{rings.items[1].role}</p>
            <p className="absolute left-1/2 top-[8%] -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/55">{rings.items[2].role}</p>
          </div>

          {/* Descrição */}
          <div className="grid gap-3">
            {rings.items.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.5 + i * 0.18 }}
                className={`cmp-p rounded-[16px] p-5 ${i === 0 ? 'bg-ink text-white' : i === 1 ? 'glass-light border border-cyan-deep/25' : 'glass-light'}`}
              >
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <span className={`text-[12px] font-light ${i === 0 ? 'text-white/50' : 'text-ink/45'}`}>0{i + 1}</span>
                  <p className="text-[18px] font-semibold tracking-[-0.01em]">{r.name}</p>
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${i === 0 ? 'text-cyan' : 'text-cyan-deep'}`}>{r.role}</span>
                </div>
                <p className={`mt-1 text-[14px] ${i === 0 ? 'text-white/75' : 'text-ink/70'}`}>{r.text}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.people.map((p) => (
                    <span key={p} className={`rounded-full px-3 py-1 text-[12.5px] ${i === 0 ? 'bg-white/10 text-white/90' : 'bg-ink/[0.06] text-ink/80'}`}>{p}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p variants={rise} className="cmp-hide mt-6 max-w-[80ch] text-[14px] leading-relaxed text-ink/70 lg:text-[15px]">
          {rings.insight}
        </motion.p>
      </motion.div>
    </div>
  )
}
