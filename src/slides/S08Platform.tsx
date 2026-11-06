import { motion } from 'framer-motion'
import { BarChart3, Link2, PieChart, Target, Users, Wallet } from 'lucide-react'
import { platform } from '../content/content'
import { Label } from '../components/Label'
import { Rich } from '../components/Rich'
import { ease, rise, stagger } from '../components/motion'

const icons: Record<string, typeof Link2> = { link: Link2, bar: BarChart3, users: Users, pie: PieChart, target: Target, wallet: Wallet }
const widths = [92, 74, 58, 46, 33]

/** Plataforma própria de afiliados e influencers, com painel ilustrativo. */
export default function S08Platform() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-petrol">
      <div className="tex-grid-dark pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[520px] w-[520px] rounded-full bg-cyan/10 blur-[120px]" />
      <motion.div variants={stagger(0.08)} initial="hidden" animate="show" className="frame">
        <motion.div variants={rise}>
          <Label n={8}>{platform.label}</Label>
        </motion.div>
        <motion.h2 variants={rise} className="display h-md mt-5 max-w-[22ch]">
          <Rich text={platform.title} />
        </motion.h2>
        <motion.p variants={rise} className="lead mt-4 max-w-[60ch]">{platform.lead}</motion.p>

        <div className="mt-8 grid gap-6 lg:my-auto lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:pt-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {platform.features.map((f, i) => {
              const Icon = icons[f.icon] ?? Target
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease, delay: 0.4 + i * 0.08 }}
                  className="glass cmp-p flex gap-3 !rounded-[14px] p-4"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-cyan/15 text-cyan">
                    <span className="draw" style={{ ['--d' as string]: `${0.5 + i * 0.1}s` }}>
                      <Icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold">{f.title}</p>
                    <p className="mt-0.5 text-[13.5px] leading-snug text-white/70">{f.text}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Painel ilustrativo */}
          <motion.div
            initial={{ opacity: 0, y: 24, rotateX: 8 }}
            animate={{ opacity: 1, y: [0, -6, 0], rotateX: 0 }}
            transition={{ opacity: { duration: 0.8, delay: 0.5 }, rotateX: { duration: 0.8, delay: 0.5 }, y: { duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.4 } }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-black/80 shadow-[0_30px_80px_-30px_rgba(92,227,229,0.35)]">
              <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <span className="h-2 w-2 rounded-full bg-white/20" />
                <p className="ml-3 text-[12px] text-white/60">{platform.mock.title}</p>
                <span className="ml-auto rounded-full bg-cyan/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">ao vivo</span>
              </div>
              <div className="grid grid-cols-3 gap-2 p-4">
                {['Receita', 'ROAS', 'Novos clientes'].map((k, i) => (
                  <div key={k} className="rounded-[10px] bg-white/[0.05] p-3">
                    <p className="text-[10.5px] uppercase tracking-[0.1em] text-white/50">{k}</p>
                    <div className="mt-2 flex items-end gap-[3px]">
                      {[3, 5, 4, 6, 7, 9].map((h, j) => (
                        <motion.span
                          key={j}
                          className="w-full rounded-sm bg-cyan/70"
                          initial={{ height: 0 }}
                          animate={{ height: h * (3 + i) }}
                          transition={{ duration: 0.6, ease, delay: 0.9 + j * 0.06 + i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-4 pb-4">
                <p className="mb-2 text-[10.5px] uppercase tracking-[0.1em] text-white/50">Receita por criador</p>
                <div className="grid gap-2">
                  {platform.mock.rows.map((r, i) => (
                    <div key={r} className="grid grid-cols-[110px_1fr] items-center gap-3 text-[12.5px] text-white/80 sm:grid-cols-[130px_1fr]">
                      <span className="truncate">{r}</span>
                      <div className="h-2 rounded-full bg-white/[0.06]">
                        <motion.div
                          className={`h-2 rounded-full ${i === 0 ? 'bg-cyan' : 'bg-cyan/50'}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${widths[i]}%` }}
                          transition={{ duration: 1, ease, delay: 1.1 + i * 0.12 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-2 text-right text-[11px] text-white/45">{platform.mock.note}</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
