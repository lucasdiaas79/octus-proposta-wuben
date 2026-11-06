import { motion } from 'framer-motion'
import { cover, meta } from '../content/content'
import { photos } from '../content/assets'
import { AnimatedSymbol } from '../components/Animated'
import { VideoCard } from '../components/VideoCard'
import { ease } from '../components/motion'

/** Capa: pasta da proposta em vidro fosco; cards de vídeo ficam ATRÁS, só nas bordas. */
export default function S01Cover() {
  return (
    <div className="tex-grid-mono relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(92,227,229,0.12),transparent_70%)]" />

      <div className="frame items-center justify-center">
        <div className="relative w-full max-w-[680px]">
          {/* cards atrás da pasta, deslocados para fora do texto */}
          <VideoCard photo={photos.hero} className="left-0 -top-[24%] w-[50%] sm:-left-[20%] sm:-top-[18%] sm:w-[40%]" tilt={-4} delay={0.3} />
          <VideoCard photo={photos.secondary} className="-bottom-[22%] right-0 w-[50%] sm:-bottom-[16%] sm:-right-[22%] sm:w-[42%]" tilt={3} delay={0.6} amplitude={10} />
          <VideoCard photo={photos.room} className="-right-[4%] -top-[14%] hidden w-[26%] sm:block sm:-right-[14%]" tilt={2} delay={0.9} />

          <motion.div className="relative" initial={{ opacity: 0, y: 30, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, ease, delay: 0.15 }}>
            <div className="frost absolute right-0 top-0 h-12 w-[34%] !rounded-b-none !border-b-0" />
            <div className="frost frost-strong relative mt-[46px] !rounded-tr-none p-7 sm:p-11">
              <div className="flex items-start justify-between gap-6">
                <p className="text-[13px] text-white/70">{cover.disciplines.join('  |  ')}</p>
                <AnimatedSymbol className="w-11 shrink-0" delay={0.8} />
              </div>
              <p className="mt-8 flex items-center gap-2 text-[13px] font-semibold text-cyan sm:mt-10">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                {cover.tag}
              </p>
              <h1 className="display mt-3 text-[clamp(44px,min(6.4vw,10vh),100px)] font-medium">{cover.title}</h1>
              <p className="mt-4 max-w-[40ch] text-[16px] leading-relaxed text-white/80 lg:text-[18px]">{cover.subtitle}</p>
              <div className="mt-8 flex items-end justify-between text-[12px] text-white/60 sm:mt-10">
                <span>Studio Octus × {meta.client}</span>
                <span>{meta.place} · {meta.year}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
