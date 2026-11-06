import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowRight, LayoutGrid, Maximize2, Minimize2, X } from 'lucide-react'
import { chapters, sections } from './content/content'
import { Symbol } from './components/Logo'
import { slides } from './slides'
import { ease } from './components/motion'

const total = slides.length

function readHash() {
  const n = parseInt(window.location.hash.replace(/[^0-9]/g, ''), 10)
  return Number.isFinite(n) && n >= 1 && n <= total ? n - 1 : 0
}

export default function App() {
  const [index, setIndex] = useState(readHash)
  const [dir, setDir] = useState(1)
  const [menu, setMenu] = useState(false)
  const [fs, setFs] = useState(false)
  const reduce = useReducedMotion()
  const scrollRef = useRef<HTMLDivElement>(null)

  const go = useCallback((next: number) => {
    setIndex((cur) => {
      const target = Math.max(0, Math.min(total - 1, next))
      if (target !== cur) setDir(target > cur ? 1 : -1)
      return target
    })
  }, [])

  // Sincroniza com a URL (#1 … #11) para permitir links diretos para uma tela
  useEffect(() => {
    const h = `#${index + 1}`
    if (window.location.hash !== h) history.replaceState(null, '', h)
    scrollRef.current?.scrollTo({ top: 0 })
  }, [index])

  useEffect(() => {
    const onHash = () => go(readHash())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [go])

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {})
    else document.exitFullscreen?.().catch(() => {})
  }, [])

  useEffect(() => {
    const onFs = () => setFs(Boolean(document.fullscreenElement))
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  // Teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const k = e.key
      if (menu && k === 'Escape') return setMenu(false)
      if (['ArrowRight', 'ArrowDown', 'PageDown', ' '].includes(k)) {
        e.preventDefault()
        go(index + 1)
      } else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(k)) {
        e.preventDefault()
        go(index - 1)
      } else if (k === 'Home') go(0)
      else if (k === 'End') go(total - 1)
      else if (k === 'f' || k === 'F') toggleFs()
      else if (k === 'm' || k === 'M') setMenu((m) => !m)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, index, menu, toggleFs])

  // Swipe (mobile / tablet)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touch.current) return
    const dx = e.changedTouches[0].clientX - touch.current.x
    const dy = e.changedTouches[0].clientY - touch.current.y
    touch.current = null
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.4) go(index + (dx < 0 ? 1 : -1))
  }

  const { Component, theme, bg } = slides[index]
  const dark = theme === 'dark'

  return (
    <div
      className={`fixed inset-0 overflow-hidden transition-colors duration-700 ${dark ? 'text-white' : 'text-ink'}`}
      style={{ backgroundColor: bg }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Barra de progresso */}
      <div className={`absolute inset-x-0 top-0 z-30 h-[2px] ${dark ? 'bg-white/[0.06]' : 'bg-ink/[0.06]'}`}>
        <motion.div
          className={`h-full ${dark ? 'bg-cyan' : 'bg-cyan-deep'}`}
          animate={{ width: `${((index + 1) / total) * 100}%` }}
          transition={{ duration: reduce ? 0 : 0.7, ease }}
        />
      </div>

      {/* Faixa superior opaca no mobile/tablet (conteúdo rola por baixo) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 lg:hidden" style={{ background: `linear-gradient(${bg}, ${bg}F2 70%, ${bg}00)` }} />
      {/* Símbolo + capítulos em pílula */}
      <div className="absolute left-4 top-4 z-30 flex items-center sm:left-8 sm:top-6">
        <button onClick={() => go(0)} aria-label="Ir para a capa" className={`grid h-8 w-8 place-items-center rounded-full ${dark ? '' : 'bg-ink'}`}>
          <Symbol className="w-[22px]" />
        </button>
      </div>
      <nav aria-label="Capítulos" className="absolute left-1/2 top-5 z-30 hidden -translate-x-1/2 items-center gap-1 lg:flex">
        {chapters.map((c) => {
          const on = index >= c.from && index <= c.to
          return (
            <button
              key={c.label}
              onClick={() => go(c.from)}
              className={`rounded-[9px] border px-3.5 py-1.5 text-[12px] font-medium transition ${
                on
                  ? dark
                    ? 'border-white/25 bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                    : 'border-ink/15 bg-white text-ink'
                  : dark
                    ? 'border-transparent text-white/45 hover:text-white/80'
                    : 'border-transparent text-ink/45 hover:text-ink/80'
              }`}
            >
              {c.label}
            </button>
          )
        })}
      </nav>

      {/* Contador + ações discretas */}
      <div className="pointer-events-none absolute right-4 top-4 z-30 flex items-center gap-1 sm:right-8 sm:top-6">
        <span className={`mr-2 text-[12px] font-semibold tabular-nums tracking-wide ${dark ? 'text-white/45' : 'text-ink/45'}`}>
          <span className={dark ? 'text-cyan' : 'text-cyan-deep'}>{String(index + 1).padStart(2, '0')}</span> / {String(total).padStart(2, '0')}
        </span>
        <IconButton dark={dark} label="Seções" onClick={() => setMenu(true)}>
          <LayoutGrid className="h-[15px] w-[15px]" strokeWidth={1.75} />
        </IconButton>
        <IconButton dark={dark} label={fs ? 'Sair da tela cheia' : 'Tela cheia'} onClick={toggleFs} className="hidden sm:flex">
          {fs ? <Minimize2 className="h-[15px] w-[15px]" strokeWidth={1.75} /> : <Maximize2 className="h-[15px] w-[15px]" strokeWidth={1.75} />}
        </IconButton>
      </div>

      {/* Tela atual */}
      <main ref={scrollRef} className="absolute inset-0 overflow-y-auto overflow-x-hidden overscroll-contain" aria-live="polite">
        <AnimatePresence mode="wait" custom={dir} initial={false}>
          <motion.section
            key={index}
            custom={dir}
            initial={reduce ? { opacity: 0 } : { opacity: 0, x: dir * 28 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.55, ease } }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, x: dir * -20, transition: { duration: 0.28, ease } }}
            className="relative min-h-full"
            aria-label={`${index + 1} de ${total}: ${sections[index]}`}
          >
            <Component />
          </motion.section>
        </AnimatePresence>
      </main>

      {/* Navegação inferior: marcadores + Anterior / Próximo */}
      <nav
        className="absolute inset-x-0 bottom-0 z-30 flex items-center justify-between gap-4 px-4 pb-[max(14px,env(safe-area-inset-bottom))] pt-6 transition-colors duration-700 sm:px-8 sm:pb-6"
        style={{ background: `linear-gradient(to top, ${bg} 45%, ${bg}D9 70%, ${bg}00)` }}
        aria-label="Navegação da apresentação"
      >
        <div className="flex items-center gap-[6px]">
          {sections.map((s, i) => (
            <button
              key={s}
              onClick={() => go(i)}
              aria-label={`Ir para ${s}`}
              aria-current={i === index ? 'step' : undefined}
              className="group flex h-6 items-center"
            >
              <span
                className={`block h-[4px] rounded-full transition-all duration-500 ${
                  i === index
                    ? `w-6 ${dark ? 'bg-cyan' : 'bg-cyan-deep'}`
                    : `w-[4px] ${dark ? 'bg-white/25 group-hover:bg-white/60' : 'bg-ink/20 group-hover:bg-ink/50'}`
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className={`flex h-10 items-center gap-2 rounded-full border px-4 text-[13px] font-semibold transition disabled:pointer-events-none disabled:opacity-30 sm:px-5 ${
              dark ? 'border-white/12 text-white hover:bg-white/[0.06]' : 'border-ink/12 text-ink hover:bg-ink/[0.04]'
            }`}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            <span className="hidden sm:inline">Anterior</span>
          </button>
          <button
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className={`flex h-10 items-center gap-2 rounded-full px-5 text-[13px] font-semibold transition disabled:pointer-events-none disabled:opacity-30 ${dark ? 'bg-cyan text-black hover:bg-white' : 'bg-ink text-white hover:bg-cyan-deep'}`}
          >
            Próximo
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </button>
        </div>
      </nav>

      {/* Menu de seções */}
      <AnimatePresence>
        {menu && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenu(false)}
          >
            <motion.aside
              role="dialog"
              aria-label="Seções da apresentação"
              className="flex h-full w-full max-w-[380px] flex-col bg-[#0A2326] px-7 pb-8 pt-7 text-white"
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.45, ease } }}
              exit={{ x: 30, opacity: 0, transition: { duration: 0.2 } }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/50">Seções</span>
                <button
                  onClick={() => setMenu(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 hover:bg-white/[0.06]"
                  aria-label="Fechar"
                  autoFocus
                >
                  <X className="h-4 w-4" strokeWidth={1.75} />
                </button>
              </div>
              <ol className="flex-1 overflow-y-auto">
                {sections.map((s, i) => (
                  <li key={s}>
                    <button
                      onClick={() => {
                        go(i)
                        setMenu(false)
                      }}
                      className={`flex w-full items-baseline gap-4 border-b border-white/[0.07] py-3 text-left transition hover:text-white ${
                        i === index ? 'text-white' : 'text-white/55'
                      }`}
                    >
                      <span className={`w-6 text-[12px] font-semibold tabular-nums ${i === index ? 'text-cyan' : 'text-white/35'}`}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[17px] font-light tracking-[-0.01em]">{s}</span>
                    </button>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[12px] leading-relaxed text-white/40">
                ← → navegar · F tela cheia · M seções
              </p>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function IconButton({
  children,
  label,
  onClick,
  dark,
  className = '',
}: {
  children: React.ReactNode
  label: string
  onClick: () => void
  dark: boolean
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      title={label}
      className={`pointer-events-auto flex h-8 w-8 items-center justify-center rounded-full transition ${
        dark ? 'text-white/55 hover:bg-white/[0.07] hover:text-white' : 'text-ink/50 hover:bg-ink/[0.05] hover:text-ink'
      } ${className}`}
    >
      {children}
    </button>
  )
}
