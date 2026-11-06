import { motion } from 'framer-motion'
import { ArrowUpRight, Check } from 'lucide-react'
import { closing } from '../content/content'
import { photos } from '../content/assets'
import { Logo } from '../components/Logo'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { VideoCard } from '../components/VideoCard'
import { TentacleLines } from '../components/Textures'
import { rise, stagger } from '../components/motion'

export default function S11Closing() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <TentacleLines opacity={0.1} />
      <motion.div variants={stagger(0.12, 0.2)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Logo />
        </motion.div>

        <div className="cmp-mt mt-8 grid flex-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-[4vw]">
          <div>
            <motion.h2 variants={rise} className="display h-lg max-w-[17ch]">
              <Rich text={closing.title} />
            </motion.h2>
            <motion.div variants={rise} className="frost cmp-p cmp-mt mt-8 max-w-[560px] p-6 lg:p-7">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="label text-cyan">{closing.next}</p>
                  <p className="mt-2 text-[20px] font-light leading-snug lg:text-[24px]">{closing.nextText}</p>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-cyan text-black">
                  <ArrowUpRight className="h-5 w-5" strokeWidth={1.75} />
                </span>
              </div>
              <ul className="mt-5 space-y-2 border-t border-white/10 pt-4">
                {closing.receives.map((r) => (
                  <li key={r} className="flex gap-2.5 text-[15px] text-white/90">
                    <Check className="mt-[3px] h-4 w-4 shrink-0 text-cyan" strokeWidth={2.2} />
                    {r}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-[12px] text-white/55">{closing.signature}</p>
            </motion.div>
          </div>

          {/* Coluna visual própria: não cobre o texto */}
          <div className="relative hidden aspect-square w-full max-w-[560px] justify-self-center lg:block">
            <div className="absolute inset-[6%] opacity-[0.12]">
              <AnimatedSymbol className="h-full w-full" delay={0.2} />
            </div>
            <VideoCard photo={photos.secondary} className="left-[6%] top-[14%] w-[72%]" tilt={3} delay={0.4} />
            <VideoCard photo={photos.moment} className="bottom-[14%] right-[4%] w-[42%]" tilt={-3} delay={0.8} amplitude={10} />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
