import { motion } from 'framer-motion'
import type { LeverChart } from '../content/content'

const E = [0.65, 0, 0.35, 1] as const
const CY = '#5CE3E5'

function smooth(pts: (readonly [number, number])[]) {
  return pts.reduce((acc, [x, y], i) => {
    if (!i) return `M ${x} ${y}`
    const [px, py] = pts[i - 1]
    const cx = (px + x) / 2
    return `${acc} C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`
  }, '')
}

/** Barras comparando dois valores reais (com rótulos). */
export function BarCompare({ bars, title }: { bars: { label: string; value: number }[]; title: string }) {
  const max = Math.max(...bars.map((b) => b.value))
  return (
    <div>
      <p className="label text-tech">{title}</p>
      <div className="cmp-bars mt-4 flex h-[150px] items-end gap-5 sm:h-[170px]">
        {bars.map((b, i) => (
          <div key={b.label} className="flex h-full flex-1 flex-col justify-end">
            <p className={`mb-2 text-[14px] font-semibold tabular-nums ${i === bars.length - 1 ? 'text-cyan' : 'text-white/70'}`}>{b.value.toLocaleString('pt-BR')}</p>
            <motion.div
              className={`w-full rounded-t-[10px] ${i === bars.length - 1 ? 'bg-gradient-to-t from-cyan/30 to-cyan' : 'bg-white/15'}`}
              initial={{ height: 0 }}
              animate={{ height: `${(b.value / max) * 78}%` }}
              transition={{ duration: 1.3, ease: E, delay: 0.5 + i * 0.25 }}
            />
            <p className="mt-2 text-[13px] text-white/60">{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/** Mini-gráficos ilustrativos das alavancas (sem valores). */
export function LeverMiniChart({ kind, ticketParts = ['Diária', 'Consumo', 'Eventos'], labels = {} }: { kind: LeverChart; ticketParts?: string[]; labels?: { legend?: string; rows?: string[] } }) {
  const W = 320
  const H = 120
  if (kind === 'occupancy') {
    const today = [0.82, 0.88, 0.5, 0.38, 0.32, 0.7, 0.62, 0.34, 0.3, 0.42, 0.5, 0.92]
    const after = today.map((v) => Math.min(0.94, v + (0.9 - v) * 0.55))
    const toPts = (arr: number[]) => arr.map((v, i) => [(i / (arr.length - 1)) * W, H - v * (H - 10)] as const)
    return (
      <Chart W={W} H={H} legend={[['Hoje', 'dash'], ['Com a estratégia', 'solid']]} axis={['Jan', 'Jun', 'Dez']}>
        <motion.path d={smooth(toPts(today))} fill="none" stroke="rgba(255,255,255,.45)" strokeWidth="1.6" strokeDasharray="4 5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: E, delay: 0.2 }} />
        <motion.path d={`${smooth(toPts(after))} L ${W} ${H} L 0 ${H} Z`} fill="url(#cyfill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.3 }} />
        <motion.path d={smooth(toPts(after))} fill="none" stroke={CY} strokeWidth="2.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: E, delay: 0.6 }} />
      </Chart>
    )
  }
  if (kind === 'revpar') {
    const pts = [0.3, 0.36, 0.42, 0.5, 0.58, 0.68, 0.78].map((v, i, a) => [(i / (a.length - 1)) * W, H - v * (H - 10)] as const)
    return (
      <Chart W={W} H={H} legend={[[labels.legend ?? 'RevPAR', 'solid']]} axis={['Hoje', 'Ciclo 2', 'Ciclo 3']}>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={W} y1={H * g} y2={H * g} stroke="rgba(255,255,255,.07)" />
        ))}
        <motion.path d={`${smooth(pts)} L ${W} ${H} L 0 ${H} Z`} fill="url(#cyfill)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }} />
        <motion.path d={smooth(pts)} fill="none" stroke={CY} strokeWidth="2.4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: E, delay: 0.3 }} />
        <motion.circle cx={pts[pts.length - 1][0]} cy={pts[pts.length - 1][1]} r="5" fill={CY} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.8 }} />
      </Chart>
    )
  }
  if (kind === 'ticket') {
    const cols = [
      { label: 'Hoje', parts: [0.55] },
      { label: 'Com a Octus', parts: [0.55, 0.2, 0.15] },
    ]
    const colors = ['rgba(255,255,255,.22)', 'rgba(92,227,229,.55)', CY]
    const names = ticketParts
    return (
      <div>
        <div className="flex h-[130px] items-end gap-6">
          {cols.map((c, ci) => (
            <div key={c.label} className="flex h-full flex-1 flex-col justify-end">
              <div className="flex flex-col-reverse overflow-hidden rounded-[8px]">
                {c.parts.map((p, pi) => (
                  <motion.div
                    key={pi}
                    style={{ background: colors[pi] }}
                    initial={{ height: 0 }}
                    animate={{ height: p * 130 }}
                    transition={{ duration: 0.9, ease: E, delay: 0.3 + ci * 0.3 + pi * 0.3 }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[12px] text-white/60">{c.label}</p>
            </div>
          ))}
        </div>
        <Legend items={names.map((n, i) => [n, colors[i]])} />
      </div>
    )
  }
  // time
  const rows = [
    { label: labels.rows?.[0] ?? 'Hoje', w: 0.92, c: 'rgba(255,255,255,.22)' },
    { label: labels.rows?.[1] ?? 'Com automação', w: 0.38, c: CY },
  ]
  return (
    <div className="space-y-4 py-3">
      {rows.map((r, i) => (
        <div key={r.label}>
          <p className="mb-1.5 text-[12px] text-white/60">{r.label}</p>
          <div className="h-4 w-full rounded-full bg-white/[0.05]">
            <motion.div className="h-full rounded-full" style={{ background: r.c }} initial={{ width: 0 }} animate={{ width: `${r.w * 100}%` }} transition={{ duration: 1.2, ease: E, delay: 0.3 + i * 0.3 }} />
          </div>
        </div>
      ))}
    </div>
  )
}

function Chart({ W, H, children, legend, axis }: { W: number; H: number; children: React.ReactNode; legend: [string, 'dash' | 'solid'][]; axis: string[] }) {
  return (
    <div>
      <svg viewBox={`0 0 ${W} ${H + 18}`} className="h-auto w-full overflow-visible">
        <defs>
          <linearGradient id="cyfill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor={CY} stopOpacity="0.28" />
            <stop offset="1" stopColor={CY} stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="0" x2={W} y1={H} y2={H} stroke="rgba(255,255,255,.15)" />
        {children}
        {axis.map((a, i) => (
          <text key={a} x={(i / (axis.length - 1)) * W} y={H + 15} textAnchor={i === 0 ? 'start' : i === axis.length - 1 ? 'end' : 'middle'} fill="rgba(255,255,255,.5)" fontSize="11">
            {a}
          </text>
        ))}
      </svg>
      <div className="mt-2 flex flex-wrap gap-4 text-[12px] text-white/60">
        {legend.map(([l, s]) => (
          <span key={l} className="flex items-center gap-2">
            <span className={`w-5 ${s === 'dash' ? 'border-t border-dashed border-white/60' : 'h-[2px] bg-cyan'}`} />
            {l}
          </span>
        ))}
      </div>
    </div>
  )
}

function Legend({ items }: { items: [string, string][] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-4 text-[12px] text-white/60">
      {items.map(([l, c]) => (
        <span key={l} className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[3px]" style={{ background: c }} />
          {l}
        </span>
      ))}
    </div>
  )
}

/** Projeção ilustrativa: camadas de receita empilhadas + linha de lucro. */
export function GrowthProjection({ layers, x }: { layers: string[]; profit?: string; x: string[] }) {
  const W = 900
  const H = 340
  const n = x.length
  // valores relativos (ilustrativos) por camada em cada ponto do eixo
  const data = [
    [0.42, 0.46, 0.5, 0.54], // diárias
    [0, 0.05, 0.09, 0.12], // reservas diretas
    [0, 0.03, 0.07, 0.1], // consumo
    [0, 0, 0.04, 0.08], // eventos
  ]
  const profitLine = [0.16, 0.24, 0.36, 0.5]
  const xs = (i: number) => 40 + (i / (n - 1)) * (W - 160)
  const ys = (v: number) => H - 30 - v * (H - 60) * 1.1
  const fills = ['rgba(255,255,255,.12)', 'rgba(92,227,229,.28)', 'rgba(92,227,229,.48)', 'rgba(92,227,229,.75)']
  const cum = data.map((_, li) => x.map((__, xi) => data.slice(0, li + 1).reduce((s, d) => s + d[xi], 0)))
  const area = (li: number) => {
    const top = cum[li].map((v, i) => [xs(i), ys(v)] as const)
    const bottom = (li ? cum[li - 1] : x.map(() => 0)).map((v, i) => [xs(i), ys(v)] as const).reverse()
    return `${smooth(top)} L ${bottom[0][0]} ${bottom[0][1]} ${smooth(bottom).replace(/^M [^C]+/, '')} Z`
  }
  const profitPts = profitLine.map((v, i) => [xs(i), ys(v)] as const)
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full overflow-visible" aria-label="Projeção ilustrativa de crescimento de receita e lucro">
      {[0.25, 0.5, 0.75].map((g) => (
        <line key={g} x1="40" x2={W - 120} y1={30 + (H - 60) * g} y2={30 + (H - 60) * g} stroke="rgba(255,255,255,.06)" />
      ))}
      <line x1="40" x2={W - 120} y1={H - 30} y2={H - 30} stroke="rgba(255,255,255,.2)" />
      {data.map((_, li) => (
        <motion.path key={li} d={area(li)} fill={fills[li]} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: E, delay: 0.3 + li * 0.35 }} />
      ))}
      <motion.path d={smooth(profitPts)} fill="none" stroke="#fff" strokeWidth="2.5" strokeDasharray="1 0" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: E, delay: 1.8 }} />
      {profitPts.map(([px, py], i) => (
        <motion.circle key={i} cx={px} cy={py} r="5" fill="#fff" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.9 + i * 0.25 }} />
      ))}
      {/* rótulos à direita */}
      {layers.map((l, li) => {
        const v = (cum[li][n - 1] + (li ? cum[li - 1][n - 1] : 0)) / 2
        return (
          <motion.text key={l} className="max-sm:hidden" x={xs(n - 1) + 14} y={ys(v) + 5} fill={li ? CY : 'rgba(255,255,255,.7)'} fontSize="15" fontWeight="600" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + li * 0.35 }}>
            {l}
          </motion.text>
        )
      })}
      {x.map((t, i) => (
        <text key={t} x={xs(i)} y={H - 6} textAnchor={i === 0 ? 'start' : 'middle'} fill="rgba(255,255,255,.6)" fontSize="14" className="max-sm:text-[30px]">
          {t}
        </text>
      ))}
    </svg>
  )
}
