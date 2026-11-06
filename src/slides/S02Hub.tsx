import { motion } from 'framer-motion'
import { hub } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { TentacleLines } from '../components/Textures'
import { ease, rise, stagger } from '../components/motion'

export default function S02Hub() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden" style={{ background: 'radial-gradient(ellipse 70% 60% at 85% 0%, #0F3438, #0A2326 60%)' }}>
      <TentacleLines opacity={0.12} />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={1}>{hub.label}</Label>
        </motion.div>
        <div className="mt-5 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <motion.h2 variants={rise} className="display h-xl max-w-[14ch]">
              <Rich text={hub.title} />
            </motion.h2>
            <motion.p variants={rise} className="lead mt-4 text-white/80">
              {hub.lead}
            </motion.p>
          </div>
          <motion.div variants={rise} className="flex gap-8 lg:justify-end lg:pb-2">
            {hub.stats.map((s) => (
              <div key={s.label}>
                <p className="text-[clamp(30px,2.6vw,42px)] font-light tracking-tightest">{s.value}</p>
                <p className="text-[12px] text-white/60">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:mt-auto lg:grid-cols-[1fr_1fr_1.1fr_1fr] lg:pt-8">
          {/* centro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.35 }}
            className="relative col-span-2 flex min-h-[170px] items-center justify-center overflow-hidden rounded-[18px] border border-white/14 bg-black/70 lg:order-3 lg:col-span-1 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(92,227,229,0.22),transparent_62%)]" />
            <AnimatedSymbol className="relative w-[34%] max-w-[150px] lg:w-[48%]" delay={0.5} float />
            <span className="absolute bottom-4 left-4 text-[13px] font-medium text-white/80">{hub.center}</span>
            <span className="absolute right-4 top-4 text-[12px] font-semibold text-cyan">360°</span>
          </motion.div>
          {hub.areas.map((a, i) => {
            const hl = i === hub.highlight
            const order = ['lg:order-1', 'lg:order-2', 'lg:order-4', 'lg:order-5', 'lg:order-6', 'lg:order-7'][i]
            return (
              <motion.div
                key={a.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.45 + i * 0.08 }}
                className={`${hl ? 'glass-cyan' : 'glass'} ${order} relative flex min-h-[120px] flex-col justify-between gap-4 p-4 lg:min-h-[clamp(100px,14vh,150px)] lg:p-5 cmp-p`}
              >
                <span className={`grid h-7 w-7 place-items-center rounded-full text-[11px] font-bold ${hl ? 'bg-cyan text-black' : 'bg-white text-black'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className={`text-[15px] font-semibold tracking-[-0.01em] lg:text-[clamp(15px,1.15vw,18px)] ${hl ? 'text-cyan' : ''}`}>{a.name}</p>
                  <p className="mt-1 text-[13px] text-white/70">{a.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}
