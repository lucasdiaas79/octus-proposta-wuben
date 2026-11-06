import { Fragment } from 'react'

/** Trechos entre *asteriscos* recebem a cor de destaque. */
export function Rich({ text, accent = 'text-cyan' }: { text: string; accent?: string }) {
  return (
    <>
      {text.split('*').map((p, i) =>
        i % 2 ? (
          <span key={i} className={accent}>
            {p}
          </span>
        ) : (
          <Fragment key={i}>{p}</Fragment>
        ),
      )}
    </>
  )
}
