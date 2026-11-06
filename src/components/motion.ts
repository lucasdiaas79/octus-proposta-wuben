import type { Variants } from 'framer-motion'

export const ease = [0.22, 1, 0.36, 1] as const

/** Container que revela os filhos em sequência. */
export const stagger = (delay = 0.08, start = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: delay, delayChildren: start } },
})

export const rise: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease } },
}
