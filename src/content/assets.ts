/**
 * ATIVOS VISUAIS — Imagens: loja oficial Wuben Brasil (wubenlight.com.br). Uso definitivo depende de autorização.
 */
import x1Img from '../assets/photos/01_x1pro_horizonte.jpg'
import g5YellowImg from '../assets/photos/02_g5_amarelo.jpg'
import x4Img from '../assets/photos/03_x4_estudio.jpg'
import e8Img from '../assets/photos/04_e8_cores.jpg'
import h4Img from '../assets/photos/05_h4_farol.jpg'
import g5RealImg from '../assets/photos/06_g5_uso_real.jpg'
import g2Img from '../assets/photos/07_g2_chaveiro.jpg'
import g5LineImg from '../assets/photos/08_g5_linha.jpg'
import headlampImg from '../assets/photos/09_headlamp.jpg'
import logoLight from '../assets/brand/octus-logo.png'
import logoDark from '../assets/brand/octus-logo-dark.png'
import symbol from '../assets/brand/octus-symbol.png'

export type PhotoAsset = { id: string; alt: string; src: string; focus?: string }

export const photos = {
  hero: { id: '01_x1pro_horizonte', alt: 'Lanterna Wuben X1 Pro sobre o horizonte', src: x1Img, focus: '48% 55%' },
  secondary: { id: '04_e8_cores', alt: 'Lanternas Wuben E8 em azul e amarelo', src: e8Img, focus: '50% 55%' },
  room: { id: '02_g5_amarelo', alt: 'Wuben G5 em amarelo', src: g5YellowImg, focus: '50% 60%' },
  moment: { id: '07_g2_chaveiro', alt: 'Wuben G2 no chaveiro', src: g2Img, focus: '45% 55%' },
  studio: { id: '03_x4_estudio', alt: 'Wuben X4 em estúdio', src: x4Img, focus: '50% 60%' },
  headlamp: { id: '05_h4_farol', alt: 'Lanterna de cabeça Wuben H4', src: h4Img, focus: '45% 65%' },
  real: { id: '06_g5_uso_real', alt: 'Wuben G5 em uso real', src: g5RealImg, focus: '40% 50%' },
  line: { id: '08_g5_linha', alt: 'Linha de cores da Wuben G5', src: g5LineImg, focus: '45% 55%' },
  headlamp2: { id: '09_headlamp', alt: 'Lanterna de cabeça Wuben', src: headlampImg, focus: '35% 55%' },
} satisfies Record<string, PhotoAsset>

export const brand = { logoLight, logoDark, symbol, name: 'Studio Octus' }
