import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import { levers } from '../content/content'
import { photos } from '../content/assets'
import { Label } from '../components/Label'
import { Photo } from '../components/Photo'
import { LeverMiniChart } from '../components/Charts'
import { ease, rise, stagger } from '../components/motion'

export default function S06Levers() {
  const [active, setActive] = useState(0)
  const item = levers.items[active]
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_55%_at_75%_55%,rgba(92,227,229,0.09),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={11}>{levers.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[24ch]">
          {levers.title}
        </motion.h2>

        {/* Abas */}
        <motion.div variants={rise} role="tablist" aria-label="Alavancas" className="-mx-5 mt-6 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:px-0 lg:mt-[4vh]">
          {levers.items.map((it, i) => (
            <button
              key={it.tab}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-medium transition ${
                i === active ? 'border-cyan/70 bg-cyan/12 text-white' : 'border-white/15 text-white/60 hover:border-white/30 hover:text-white'
              } ${i === levers.items.length - 1 ? 'border-dashed' : ''}`}
            >
              <span className={`text-[11px] font-semibold ${i === active ? 'text-cyan' : 'text-white/40'}`}>{i === levers.items.length - 1 ? 'Base' : String(i + 1).padStart(2, '0')}</span>
              {it.tab}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease }}
            className="mt-6 grid flex-1 gap-5 lg:mt-[3vh] lg:grid-cols-[1.1fr_1fr_1fr] lg:gap-5"
          >
            {/* Foto */}
            <div className="relative aspect-video overflow-hidden rounded-[18px] border border-white/12 lg:aspect-auto lg:min-h-[260px]">
              <Photo photo={photos[item.photo as keyof typeof photos]} kenburns />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-5 right-5 text-[clamp(20px,1.8vw,28px)] font-light leading-tight tracking-[-0.02em]">{item.title}</p>
            </div>

            {/* O que faremos */}
            <div className="glass flex flex-col p-5 lg:p-6">
              <p className="label text-cyan">O que faremos</p>
              <ul className="mt-4 space-y-3">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] leading-snug text-white/90">
                    <span className="mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex gap-3 rounded-[12px] bg-white/[0.04] p-3.5 lg:mt-auto">
                <Lightbulb className="draw mt-0.5 h-4 w-4 shrink-0 text-cyan" strokeWidth={1.7} />
                <p className="text-[13px] leading-relaxed text-white/80">{item.insight}</p>
              </div>
            </div>

            {/* Gráfico */}
            <div className="frost flex flex-col p-5 lg:p-6">
              <div className="flex items-start justify-between gap-3">
                <p className="label text-white/70">{item.chartLabel}</p>
                <span className="text-[11px] text-white/45">Ilustrativo</span>
              </div>
              <div className="mt-4 lg:my-auto">
                <LeverMiniChart kind={item.chart} ticketParts={(item as { parts?: string[] }).parts ?? levers.ticketParts} labels={(item as { labels?: { legend?: string; rows?: string[] } }).labels} />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((t) => (
                  <span key={t} className="glass-cyan !rounded-full px-3 py-1.5 text-[12px] font-semibold text-cyan">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
