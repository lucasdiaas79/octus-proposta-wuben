import { motion, useReducedMotion } from 'framer-motion'
import type { PhotoAsset } from '../content/assets'
import { Photo } from './Photo'

/**
 * Card em proporção de vídeo (16:9) com leve flutuação, brilho de vidro e reflexo inferior.
 * Dá a sensação de material audiovisual "solto" sobre a tela.
 */
export function VideoCard({
  photo,
  className = '',
  delay = 0,
  amplitude = 8,
  tilt = 0,
  caption,
}: {
  photo: PhotoAsset
  className?: string
  delay?: number
  amplitude?: number
  tilt?: number
  caption?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ opacity: 0, y: 30, rotate: tilt }}
      animate={
        reduce
          ? { opacity: 1, y: 0, rotate: tilt }
          : { opacity: 1, y: [0, -amplitude, 0], rotate: [tilt, tilt + 0.6, tilt] }
      }
      transition={{
        opacity: { duration: 0.9, delay },
        y: { duration: 7 + delay * 2, repeat: Infinity, ease: 'easeInOut', delay },
        rotate: { duration: 9 + delay, repeat: Infinity, ease: 'easeInOut', delay },
      }}
    >
      <div className="reflect relative aspect-video w-full overflow-hidden rounded-[14px] border border-white/15 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.9)]">
        <Photo photo={photo} kenburns />
        {/* brilho de vidro */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0)_32%,rgba(255,255,255,0)_70%,rgba(255,255,255,0.06)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/30" />
        {caption && (
          <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-medium text-white/90 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {caption}
          </span>
        )}
      </div>
    </motion.div>
  )
}
