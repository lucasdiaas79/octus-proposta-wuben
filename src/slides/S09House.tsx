import { motion } from 'framer-motion'
import { Check, FileText, Lightbulb, Megaphone, RefreshCw, Users } from 'lucide-react'
import { house } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { VideoCard } from '../components/VideoCard'
import { photos } from '../content/assets'
import { ease, rise, stagger } from '../components/motion'

const icons = [Lightbulb, FileText, Users, Megaphone, RefreshCw]

/** House de conteúdo: ciclo insight → roteiro → movimento → anúncio → aprendizado. */
export default function S09House() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_30%,rgba(92,227,229,0.12),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={9}>{house.label}</Label>
        </motion.div>
        <div className="mt-5 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-12">
          <div>
            <motion.h2 variants={rise} className="display h-md max-w-[22ch]">
              <Rich text={house.title} />
            </motion.h2>
            <motion.p variants={rise} className="lead mt-4 max-w-[52ch]">{house.lead}</motion.p>
          </div>
          <div className="relative hidden aspect-[16/8] lg:block">
            <VideoCard photo={photos.headlamp} className="right-0 top-0 w-[92%]" tilt={-2} delay={0.5} amplitude={8} />
          </div>
        </div>

        <div className="relative mt-8 lg:mt-auto lg:pt-6">
          <div className="absolute left-0 right-0 top-[26px] hidden h-px bg-white/10 lg:block" />
          <motion.div className="absolute left-0 top-[26px] hidden h-px w-full origin-left bg-gradient-to-r from-cyan via-cyan to-cyan/20 lg:block" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, ease, delay: 0.5 }} />
          <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {house.steps.map((s, i) => {
              const Icon = icons[i]
              return (
                <motion.li key={s.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease, delay: 0.6 + i * 0.16 }} className="flex gap-3 lg:block">
                  <span className={`relative grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[14px] ${i === 4 ? 'solid-deep' : 'glass-cyan'}`}>
                    <span className="draw" style={{ ['--d' as string]: `${0.6 + i * 0.3}s` }}>
                      <Icon className="h-5 w-5 text-cyan" strokeWidth={1.7} />
                    </span>
                  </span>
                  <div>
                    <p className="text-[16px] font-semibold lg:mt-4">{s.name}</p>
                    <p className="mt-0.5 max-w-[24ch] text-[13.5px] leading-snug text-white/70">{s.text}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>
        </div>

        <motion.div variants={rise} className="frost cmp-p cmp-mt mt-7 p-4 lg:p-5">
          <p className="label text-cyan">Entregas da house</p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {house.deliverables.map((d) => (
              <span key={d} className="flex items-center gap-2 text-[14px] text-white/85">
                <Check className="h-3.5 w-3.5 text-cyan" strokeWidth={2} />
                {d}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
