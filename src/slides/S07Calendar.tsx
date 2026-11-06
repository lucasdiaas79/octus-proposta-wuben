import { motion } from 'framer-motion'
import { calendar } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const seasonFill = ['rgba(255,255,255,.10)', 'rgba(92,227,229,.35)', '#5CE3E5']
const seasonName = ['Menor demanda', 'Média', 'Alta temporada']

export default function S07Calendar() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(92,227,229,0.12),transparent_70%)]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise} className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Label n={10}>{calendar.label}</Label>
            <h2 className="display h-md mt-5 max-w-[22ch]">
              <Rich text={calendar.title} />
            </h2>
          </div>
          <div className="flex gap-6 lg:gap-8">
            {('highlights' in calendar ? (calendar as { highlights: { value: string; label: string }[] }).highlights : []).map((h) => (
              <div key={h.label} className="max-w-[150px]">
                <p className="text-[clamp(28px,2.6vw,42px)] font-extralight leading-none tracking-tightest text-cyan">{h.value}</p>
                <p className="mt-1.5 text-[12px] leading-snug text-white/70">{h.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={rise} className="frost cmp-p mt-8 p-4 sm:p-6 lg:mt-auto">
          <div className="hidden md:block">
            <div>
              {/* Sazonalidade */}
              <div className="grid grid-cols-12 gap-1.5">
                {calendar.months.map((m, i) => (
                  <div key={m} className="flex flex-col gap-2">
                    <span className="text-center text-[12px] font-semibold text-white/70">{m}</span>
                    <motion.div
                      className="h-10 rounded-[8px]"
                      style={{ background: seasonFill[calendar.season[i]] }}
                      initial={{ opacity: 0, scaleY: 0.3 }}
                      animate={{ opacity: 1, scaleY: 1 }}
                      transition={{ duration: 0.5, ease, delay: 0.4 + i * 0.05 }}
                    />
                  </div>
                ))}
              </div>
              {/* Eventos */}
              <div className="relative mt-3 grid grid-cols-12 gap-1.5">
                {placeEvents(calendar.events).map(({ e, col, row }, k) => (
                  <motion.div
                    key={e.name}
                    className="col-span-2 rounded-[10px] border border-white/12 bg-white/[0.04] p-2.5"
                    style={{ gridColumnStart: col, gridRowStart: row }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease, delay: 1 + k * 0.1 }}
                  >
                    <p className="text-[13px] font-semibold leading-tight text-white">{e.name}</p>
                    <p className="mt-1 text-[12px] leading-snug text-cyan">{e.play}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile: lista */}
          <ul className="space-y-3 md:hidden">
            {calendar.events.map((e) => (
              <li key={e.name} className="flex gap-3 border-b border-white/10 pb-3">
                <span className="w-9 shrink-0 text-[12px] font-semibold uppercase text-white/60">{calendar.months[e.month]}</span>
                <div>
                  <p className="text-[15px] font-semibold">{e.name}</p>
                  <p className="text-[13px] text-cyan">{e.play}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/10 pt-3 text-[12px] text-white/70">
            {((calendar as { legend?: string[] }).legend ?? seasonName).map((n, i) => (
              <span key={n} className="flex items-center gap-2">
                <span className="h-2.5 w-4 rounded-[3px]" style={{ background: seasonFill[i] }} />
                {n}
              </span>
            ))}
            <span className="w-full text-white/80 lg:ml-auto lg:w-auto lg:max-w-[60ch]">{calendar.lowSeason}</span>
          </div>
        </motion.div>
        <motion.p variants={rise} className="mt-3 text-[11px] text-white/50">
          Fontes: {calendar.source}
        </motion.p>
      </motion.div>
    </div>
  )
}

/** Distribui os eventos em faixas sem sobreposição (cada card ocupa 2 meses). */
function placeEvents<T extends { month: number }>(events: T[]) {
  const ends: number[] = []
  return events.map((e) => {
    const col = Math.min(e.month + 1, 11)
    let row = ends.findIndex((end) => end < col)
    if (row === -1) {
      row = ends.length
      ends.push(0)
    }
    ends[row] = col + 1
    return { e, col, row: row + 1 }
  })
}
