import { motion } from 'framer-motion'
import { dre } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { Glow } from '../components/Textures'
import { ease, rise, stagger } from '../components/motion'

export default function S03Dre() {
  return (
    <div className="tex-grid-light relative min-h-[100dvh] overflow-hidden bg-mist text-ink">
      <Glow className="-right-[8vw] top-[30vh] h-[56vh] w-[56vh]" color="rgba(92,227,229,0.45)" />
      <motion.div variants={stagger(0.09)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={3} tone="light">{dre.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-xl mt-5 max-w-[15ch]">
          <Rich text={dre.title} accent="text-cyan-deep" />
        </motion.h2>
        <motion.p variants={rise} className="lead mt-4 text-ink/75">
          {dre.lead}
        </motion.p>

        <div className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-auto lg:pt-8">
          {dre.cards.map((c, i) => {
            const cls = i === 2 ? 'solid-deep' : i === 1 ? 'glass-deep' : 'glass-light'
            return (
              <motion.div
                key={c.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.5 + i * 0.15 }}
                className={`${cls} relative flex min-h-[180px] flex-col justify-between gap-6 p-6 lg:min-h-[clamp(170px,25vh,240px)]`}
              >
                <div>
                  <p className={`text-[13px] font-bold uppercase tracking-[0.16em] ${i === 2 ? 'text-cyan-ice' : i === 1 ? 'text-cyan-deep' : 'text-ink'}`}>{c.key}</p>
                  <p className={`mt-2 text-[15px] leading-snug ${i === 2 ? 'text-white/90' : 'text-ink/75'}`}>{c.text}</p>
                </div>
                <motion.p
                  className={`text-[clamp(48px,4.6vw,76px)] font-extralight leading-none ${i === 1 ? 'text-cyan-deep' : ''}`}
                  animate={{ y: c.arrow === '↑' ? [0, -8, 0] : [0, 8, 0] }}
                  transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 + i * 0.3 }}
                >
                  {c.arrow}
                </motion.p>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
