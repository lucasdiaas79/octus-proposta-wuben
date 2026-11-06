import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { plan } from '../content/content'
import { Label } from '../components/Label'
import { ease, rise, stagger } from '../components/motion'

export default function S07Plan() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={12} tone="light">{plan.label}</Label>
        </motion.div>
        <div className="mt-5 grid gap-4 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <motion.h2 variants={rise} className="display h-lg max-w-[18ch]">
            {plan.title}
          </motion.h2>
          <motion.p variants={rise} className="lead text-ink/75 lg:justify-self-end lg:pb-2">
            {plan.lead}
          </motion.p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:pt-8">
          {plan.fronts.map((f, i) => {
            const hl = i === 1
            return (
              <motion.div
                key={f.name}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.4 + i * 0.12 }}
                className={`${hl ? 'solid-deep' : 'glass-light'} cmp-p flex flex-col p-5 lg:p-6`}
              >
                <p className={`text-[12px] font-semibold tabular-nums ${hl ? 'text-cyan-ice' : 'text-cyan-deep'}`}>Frente {String(i + 1).padStart(2, '0')}</p>
                <h3 className="mt-1 text-[22px] font-semibold tracking-[-0.02em]">{f.name}</h3>
                <span className={`mt-3 inline-flex w-fit rounded-full px-3 py-1 text-[12px] font-semibold ${hl ? 'bg-white/15 text-white' : 'bg-cyan-deep/10 text-cyan-deep'}`}>{f.goal}</span>
                {'team' in f && (
                  <p className={`mt-3 text-[12px] leading-snug ${hl ? 'text-white/80' : 'text-ink/60'}`}>
                    <span className="font-semibold">Quem executa:</span> {(f as { team: string }).team}
                  </p>
                )}
                <ul className={`cmp-mt mt-4 space-y-2 border-t pt-3 ${hl ? 'border-white/20' : 'border-ink/10'}`}>
                  {f.items.map((it, ii) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 + i * 0.12 + ii * 0.06 }}
                      className={`flex gap-2.5 text-[14px] leading-snug ${hl ? 'text-white' : 'text-ink/85'}`}
                    >
                      <Check className={`mt-[2px] h-4 w-4 shrink-0 ${hl ? 'text-cyan-ice' : 'text-cyan-deep'}`} strokeWidth={2.2} />
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
