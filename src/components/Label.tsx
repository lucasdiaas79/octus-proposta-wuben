/** Rótulo de seção no formato "01 / Nome". */
export function Label({ n, children, tone = 'dark' }: { n: number; children: string; tone?: 'dark' | 'light' }) {
  return (
    <p className={`label ${tone === 'dark' ? 'text-tech' : 'text-slate'}`}>
      <span className={tone === 'dark' ? 'text-cyan' : 'text-cyan-deep'}>{String(n).padStart(2, '0')}</span>
      <span className="mx-2 opacity-50">/</span>
      {children}
    </p>
  )
}
