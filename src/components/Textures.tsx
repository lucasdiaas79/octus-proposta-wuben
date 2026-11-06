import { motion } from 'framer-motion'

/** Linhas curvas paralelas — grafismo derivado do símbolo Octus. */
export function TentacleLines({ className = '', opacity = 0.16, color = '#5CE3E5' }: { className?: string; opacity?: number; color?: string }) {
  const paths = Array.from({ length: 6 }, (_, i) => {
    const o = i * 34
    return `M -20 ${520 + o} C 380 ${430 + o}, 620 ${220 + o * 0.6}, 1460 ${250 + o * 0.8}`
  })
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden>
      <g fill="none" stroke={color} strokeOpacity={opacity} strokeWidth="1.2">
        {paths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            vectorEffect="non-scaling-stroke"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </g>
    </svg>
  )
}

/** Brilho radial suave. */
export function Glow({ className = '', color = 'rgba(92,227,229,0.28)' }: { className?: string; color?: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-full ${className}`} style={{ background: `radial-gradient(circle, ${color}, transparent 68%)` }} />
}
