import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import type { PhotoAsset } from '../content/assets'

/** Foto real do cliente. Ocupa todo o contêiner posicionado. */
export function Photo({ photo, className = '', kenburns = false }: { photo: PhotoAsset; className?: string; kenburns?: boolean }) {
  const [failed, setFailed] = useState(false)
  return (
    <div className={`absolute inset-0 overflow-hidden bg-coal ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-[11px] uppercase tracking-[0.14em] text-tech">
          <ImageOff className="h-5 w-5" strokeWidth={1.5} aria-hidden />
          Foto pendente · {photo.id}
        </div>
      ) : (
        <img
          src={photo.src}
          alt={photo.alt}
          decoding="async"
          onError={() => setFailed(true)}
          className={`absolute inset-0 h-full w-full object-cover ${kenburns ? 'kenburns' : ''}`}
          style={{ objectPosition: photo.focus ?? '50% 50%' }}
        />
      )}
    </div>
  )
}
