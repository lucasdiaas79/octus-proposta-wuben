import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { qg } from '../content/content'
import { photos } from '../content/assets'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { Photo } from '../components/Photo'
import { ease, rise, stagger } from '../components/motion'

export default function S03Qg() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <Photo photo={photos.studio} kenburns className="opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={2}>{qg.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-lg mt-5 max-w-[18ch]">
          <Rich text={qg.title} />
        </motion.h2>
        <motion.p variants={rise} className="lead mt-4 text-white/80">
          {qg.lead}
        </motion.p>

        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:mt-auto lg:max-w-[1100px] lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.45 }}
            className="frost cmp-p p-5 lg:p-7"
          >
            <p className="label text-white/60">{qg.without.title}</p>
            <ul className="mt-4 space-y-3">
              {qg.without.items.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] text-white/65 lg:text-[16px]">
                  <X className="mt-[3px] h-4 w-4 shrink-0 text-white/40" strokeWidth={2} />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.65 }}
            className="glass-cyan cmp-p p-5 lg:p-7"
          >
            <p className="label text-cyan">{qg.with.title}</p>
            <ul className="mt-4 space-y-3">
              {qg.with.items.map((it, i) => (
                <motion.li
                  key={it}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.12 }}
                  className="flex gap-3 text-[15px] font-medium text-white lg:text-[16px]"
                >
                  <Check className="mt-[3px] h-4 w-4 shrink-0 text-cyan" strokeWidth={2.4} />
                  {it}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
