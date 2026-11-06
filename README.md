# Studio Octus — proposta comercial (VIDAM Hotel)

Apresentação web interativa em 17 telas, na identidade Studio Octus. Serve como **modelo**: a parte institucional
é fixa e a parte do cliente troca a cada proposta.

## Executar

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # site estático em /dist (Vercel, Netlify, qualquer hospedagem)
npm run build:single # um único index.html autossuficiente em /dist-single
```

## Estrutura

| # | Tela | Tipo |
|---|---|---|
| 01 | Capa | Cliente |
| 02 | O QG Octus | Fixo |
| 03 | Tese: de utilitário a objeto de desejo | Cliente |
| 04 | Crescimento no resultado (DRE) | Fixo |
| 05 | A marca (dados reais do site) | Cliente |
| 06 | Onde a Wuben pode ganhar mais | Cliente |
| 07 | Públicos em três anéis | Cliente |
| 08 | Ecossistema de tráfego unificado | Cliente |
| 09 | Plataforma própria de afiliados e influencers | Cliente |
| 10 | House de conteúdo | Cliente |
| 11 | Calendário de movimentos coordenados | Cliente |
| 12 | Alavancas | Cliente |
| 13 | Plano de execução | Cliente |
| 14 | Projeção ilustrativa | Cliente |
| 15 | Metodologia | Fixo |
| 16 | Implantação em ciclos | Cliente |
| 17 | Próximo passo | Fixo |

Responsivo: celular (360 px+), tablet, notebook (inclui telas baixas como 1280×720, com modo compacto) e monitores grandes. Se faltar altura, a tela rola em vez de cortar conteúdo.

## Nova proposta para outro cliente

1. Substitua as fotos em `src/assets/photos/` e ajuste `src/content/assets.ts`.
2. Edite os textos em `src/content/content.ts` (capa, oportunidade, o que vimos, alavancas, implantação).
3. `npm run build`.

## Design system

- **Primárias:** preto `#000000`, branco, ciano Octus `#5CE3E5`
- **Secundárias:** petróleo `#0A2326`, névoa `#EEF2F2`, ciano profundo `#0B7F84`, grafite `#0B0F10`, cinzas `#9AA3A6` / `#5E6A6E`
- **Tipografia:** Manrope (títulos em peso leve, grandes)
- **Componentes:** vidro (neutro, ciano, ciano profundo), vidro fosco, cards de vídeo flutuantes com reflexo, rótulo "01 / Nome", menu de capítulos em pílula
- **Animações:** símbolo Octus que se desenha, números que contam, ícones que se desenham, setas do DRE, anéis de progresso, curva de sazonalidade. Respeitam "reduzir movimento" do sistema.

Marca: `src/assets/brand/` (logo oficial clara e escura, símbolo e símbolo vetorizado).

## Navegação

← → / espaço / Page Up-Down · Home / End · **M** seções · **F** tela cheia · swipe no celular · `#5` abre a tela 5.

## Pendências

- Autorização de uso das imagens da loja oficial Wuben Brasil (wubenlight.com.br).
- Pontos de "Onde a Wuben pode ganhar mais" vêm da análise externa da loja e são validados no diagnóstico.
- Painel da plataforma, gráficos das alavancas e projeção são ilustrativos (sem números).

## Fontes (tela 05)

- Site oficial Wuben Brasil, páginas institucional e B2B: https://wubenlight.com.br/
