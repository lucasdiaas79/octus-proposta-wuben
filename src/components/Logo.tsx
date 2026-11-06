import { brand } from '../content/assets'

export function Logo({ tone = 'light', className = '' }: { tone?: 'light' | 'dark'; className?: string }) {
  return (
    <img
      src={tone === 'dark' ? brand.logoDark : brand.logoLight}
      alt={brand.name}
      className={`h-auto w-[118px] select-none ${className}`}
      draggable={false}
    />
  )
}

export function Symbol({ className = '' }: { className?: string }) {
  return <img src={brand.symbol} alt="" aria-hidden className={`select-none ${className}`} draggable={false} />
}
