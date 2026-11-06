import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'
import { data } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { AnimatedSymbol } from '../components/Animated'
import { ease, rise, stagger } from '../components/motion'

export default function S09Data() {
  return (
    <div className="tex-grid-mono relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_45%_at_50%_62%,rgba(92,227,229,0.16),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={7}>{data.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[24ch]">
          <Rich text={data.title} />
        </motion.h2>

        <div className="relative mt-8 grid items-center gap-4 lg:mt-auto lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:pt-6">
          {/* Entradas */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {data.inputs.map((it, i) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
                className="glass flex items-center gap-3 !rounded-[12px] px-4 py-2.5 text-[14px] text-white/90 lg:py-[1.1vh]"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
                {it}
                <span className="ml-auto hidden h-px w-6 bg-gradient-to-r from-white/30 to-cyan lg:block" />
              </motion.div>
            ))}
          </div>

          {/* Centro */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="relative mx-auto grid h-[180px] w-[180px] place-items-center rounded-full border border-cyan/40 bg-black/70 lg:h-[clamp(170px,26vh,250px)] lg:w-[clamp(170px,26vh,250px)]"
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-cyan/30"
              animate={{ scale: [1, 1.18], opacity: [0.7, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
            />
            <div className="flex flex-col items-center gap-2">
              <AnimatedSymbol className="w-[64px] lg:w-[80px]" delay={0.6} />
              <p className="text-[14px] font-semibold">{data.center}</p>
            </div>
          </motion.div>

          {/* Saídas */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-1">
            {data.outputs.map((it, i) => (
              <motion.div
                key={it}
                initial={{ opacity: 0, x: 14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease, delay: 1 + i * 0.1 }}
                className="glass-cyan flex items-center gap-3 !rounded-[12px] px-4 py-3 text-[14px] font-medium text-white lg:py-[1.6vh] lg:text-[15px]"
              >
                <span className="hidden h-px w-6 bg-gradient-to-r from-cyan to-cyan/20 lg:block" />
                {it}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div variants={rise} className="frost cmp-p mt-6 flex gap-3 p-4 lg:p-5">
          <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={1.8} />
          <p className="text-[14px] leading-relaxed text-white/85">
            <span className="font-semibold text-cyan">{data.example.label}: </span>
            {data.example.text}
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
