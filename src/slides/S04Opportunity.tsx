import { motion } from 'framer-motion'
import { meta, opportunity } from '../content/content'
import { photos } from '../content/assets'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { VideoCard } from '../components/VideoCard'
import { CountUp } from '../components/Animated'
import { BarCompare } from '../components/Charts'
import { ease, rise, stagger } from '../components/motion'

export default function S04Opportunity() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_60%_at_80%_40%,rgba(92,227,229,0.10),transparent_70%)]" />
      <motion.div variants={stagger(0.09)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={4}>{opportunity.label}</Label>
        </motion.div>

        <div className="mt-5 grid flex-1 gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-[4vw]">
          {/* Texto + números */}
          <div className="flex flex-col">
            <motion.h2 variants={rise} className="display h-md max-w-[20ch]">
              <Rich text={opportunity.title} />
            </motion.h2>
            <div className="mt-8 grid grid-cols-3 gap-3 lg:mt-auto lg:pt-8">
              {opportunity.stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease, delay: 0.5 + i * 0.12 }}
                  className="glass cmp-p flex flex-col justify-between gap-4 p-4 lg:p-5"
                >
                  <p className="text-[clamp(30px,3.4vw,56px)] font-extralight leading-none tracking-tightest">
                    <CountUp value={s.value} delay={0.6 + i * 0.15} />
                    <span className="ml-1 text-[0.4em] font-medium tracking-normal text-cyan">{s.unit}</span>
                  </p>
                  <p className="text-[12px] leading-snug text-white/70 lg:text-[13px]">{s.label}</p>
                </motion.div>
              ))}
            </div>
            <motion.p variants={rise} className="mt-3 text-[11px] text-white/50">
              {opportunity.source}
            </motion.p>
          </div>

          {/* Gráfico real + card de vídeo, em coluna própria */}
          <div className="flex flex-col gap-6">
            <div className="cmp-video relative aspect-video w-full max-w-[560px] lg:max-w-none">
              <VideoCard photo={photos.hero} className="inset-x-[4%] top-0" tilt={-1.5} delay={0.3} caption={meta.photoCaption} />
            </div>
            {'chart' in opportunity ? (
              <motion.div variants={rise} className="frost cmp-p mt-6 p-5 lg:mt-auto lg:p-6">
                <BarCompare bars={(opportunity as { chart: { bars: { label: string; value: number }[]; title: string } }).chart.bars} title={(opportunity as { chart: { title: string } }).chart.title} />
              </motion.div>
            ) : (
              <div className="relative mt-4 hidden aspect-[16/8] w-full lg:block">
                <VideoCard photo={photos.secondary} className="right-0 top-0 w-[62%]" tilt={2} delay={0.6} amplitude={9} />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
