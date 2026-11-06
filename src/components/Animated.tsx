import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { symbolPaths, symbolViewBox } from '../assets/brand/symbolPaths'

/** Número que conta de 0 até o valor ao entrar na tela. Aceita "1,38", "+43", "219". */
export function CountUp({ value, duration = 1.6, delay = 0.4 }: { value: string; duration?: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const reduce = useReducedMotion()
  const prefix = value.match(/^[^\d]*/)?.[0] ?? ''
  const num = parseFloat(value.replace(prefix, '').replace(',', '.'))
  const decimals = (value.split(',')[1] ?? '').length
  const [display, setDisplay] = useState(reduce ? value : prefix + (0).toFixed(decimals).replace('.', ','))

  useEffect(() => {
    if (!inView || reduce) return
    const c = animate(0, num, {
      duration,
      delay,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(prefix + v.toFixed(decimals).replace('.', ',')),
    })
    return () => c.stop()
  }, [inView, reduce, num, decimals, prefix, duration, delay])

  return <span ref={ref}>{display}</span>
}

/** Símbolo Octus vetorizado: contorno se desenha e o preenchimento aparece em seguida. */
export function AnimatedSymbol({ className = '', color = '#5CE3E5', delay = 0.2, float = false }: { className?: string; color?: string; delay?: number; float?: boolean }) {
  const reduce = useReducedMotion()
  return (
    <motion.svg
      viewBox={symbolViewBox}
      className={className}
      aria-hidden
      animate={float && !reduce ? { y: [0, -6, 0] } : undefined}
      transition={float ? { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: delay + 2 } : undefined}
    >
      {/* contornos que se desenham */}
      {symbolPaths.map((d, i) => (
        <motion.path
          key={i}
          d={d}
          fill="none"
          stroke={color}
          strokeWidth={3}
          initial={reduce ? false : { pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 0 }}
          transition={{
            pathLength: { duration: 1.4, delay: delay + i * 0.09, ease: [0.65, 0, 0.35, 1] },
            opacity: { duration: 0.6, delay: delay + 2.4 },
          }}
        />
      ))}
      {/* preenchimento (evenodd preserva os vazados do símbolo) */}
      <motion.path
        d={symbolPaths.join(' ')}
        fill={color}
        fillRule="evenodd"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: delay + 1.5 }}
      />
    </motion.svg>
  )
}

/** Curva ilustrativa de sazonalidade (sem valores): picos e vales ao longo do ano. */
export function SeasonCurve({ className = '' }: { className?: string }) {
  const pts = [0.82, 0.9, 0.55, 0.42, 0.35, 0.72, 0.62, 0.38, 0.33, 0.45, 0.52, 0.92]
  const W = 300
  const H = 70
  const xy = pts.map((p, i) => [(i / (pts.length - 1)) * W, H - p * (H - 8) - 2] as const)
  const d = xy.reduce((acc, [x, y], i) => {
    if (!i) return `M ${x} ${y}`
    const [px, py] = xy[i - 1]
    const cx = (px + x) / 2
    return `${acc} C ${cx} ${py}, ${cx} ${y}, ${x} ${y}`
  }, '')
  return (
    <div className={className}>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full overflow-visible" aria-label="Curva ilustrativa de demanda ao longo do ano">
        <motion.path d={`${d} L ${W} ${H} L 0 ${H} Z`} fill="url(#sg)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} />
        <defs>
          <linearGradient id="sg" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0" stopColor="#5CE3E5" stopOpacity="0.25" />
            <stop offset="1" stopColor="#5CE3E5" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path d={d} fill="none" stroke="#5CE3E5" strokeWidth="1.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }} />
        {[[0, 'Jan'], [5, 'Jun'], [11, 'Dez']].map(([i, l]) => (
          <text key={l as string} x={xy[i as number][0]} y={H + 13} textAnchor={i === 0 ? 'start' : i === 11 ? 'end' : 'middle'} className="fill-white/40 text-[8px]">
            {l}
          </text>
        ))}
      </svg>
      <p className="mt-5 text-[10px] text-tech">Ilustrativo · o mapa real sai do diagnóstico</p>
    </div>
  )
}
