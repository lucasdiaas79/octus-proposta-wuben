/**
 * CONTEÚDO DA PROPOSTA — Wuben Brasil.
 * Trechos entre *asteriscos* recebem destaque em ciano.
 */

export const meta = {
  client: 'Wuben Brasil',
  agency: 'Studio Octus',
  place: 'E-commerce · Brasil',
  year: '2026',
  photoCaption: 'Wuben X1 Pro',
}

export const chapters = [
  { label: 'Octus', from: 1, to: 3 },
  { label: 'Diagnóstico', from: 4, to: 6 },
  { label: 'Estratégia', from: 7, to: 11 },
  { label: 'Execução', from: 12, to: 15 },
]

export const sections = [
  'Capa',
  'O QG Octus',
  'De utilitário a desejo',
  'Crescimento no resultado',
  'A marca',
  'Onde a Wuben pode ganhar mais',
  'Públicos',
  'Ecossistema de tráfego',
  'Plataforma de criadores',
  'House de conteúdo',
  'Movimentos coordenados',
  'Alavancas',
  'O que vamos fazer',
  'Para onde vamos',
  'Metodologia',
  'Implantação',
  'Próximo passo',
]

export const cover = {
  tag: 'Proposta de crescimento',
  disciplines: ['Growth', 'Influência', 'Dados', 'Tecnologia'],
  title: 'Wuben Brasil',
  subtitle: 'De utilitário a objeto de desejo: um QG estratégico para a Wuben vender mais, para mais gente.',
}

export const hub = {
  label: 'Quem somos',
  title: 'Um *QG estratégico* de growth.',
  lead: 'Direção de marketing, mídia, tecnologia e dados trabalhando como um só time, com um único objetivo: fazer a marca vender mais.',
  stats: [
    { value: '6', label: 'frentes integradas' },
    { value: '360°', label: 'visão de negócio' },
    { value: '1', label: 'time do início ao fim' },
  ],
  center: 'Visão 360° de growth',
  areas: [
    { name: 'Diretor de marketing', text: 'Posicionamento, marca e narrativa' },
    { name: 'Gestores de tráfego', text: 'Mídia paga que gera vendas' },
    { name: 'Time de tech', text: 'Plataforma, automações e integrações' },
    { name: 'Dados e métricas', text: 'B.I., atribuição e estudo de público' },
    { name: 'Expansão', text: 'Novos públicos, canais e mercados' },
    { name: 'Growth 360°', text: 'Estratégia que olha o negócio inteiro' },
  ],
  highlight: 3,
  closing: '',
}

/** Tela de tese (reaproveita o componente de contraste). */
export const qg = {
  label: 'A tese',
  title: 'De produto *utilitário* a objeto de *desejo*.',
  lead: 'Lanterna pode ser o que o relógio e o canivete já são: tecnologia, design e status. A Wuben tem produto para isso. Falta a narrativa e o sistema.',
  without: {
    title: 'Hoje: ferramenta de nicho',
    items: ['Comunicação técnica, em lúmens e baterias', 'Fala com quem já entende de lanterna', 'Compra por necessidade, uma vez', 'Criadores vendendo cada um por si'],
  },
  with: {
    title: 'Com a Octus: objeto de desejo',
    items: ['Narrativa de estilo, tecnologia e uso diário', 'Do tático e outdoor ao consumidor comum', 'Coleção, presente, acessórios e recompra', 'Criadores em um ecossistema medido e coordenado'],
  },
}

export const dre = {
  label: 'Como medimos',
  title: 'Crescimento que aparece no *resultado*.',
  lead: 'Não medimos curtidas. Medimos o que muda no DRE: quanto entra, quanto custa trazer cada cliente e quanto fica.',
  cards: [
    { key: 'Faturamento', arrow: '↑', text: 'Mais clientes, ticket maior e recompra' },
    { key: 'Custo por cliente', arrow: '↓', text: 'Público próprio reduz o CAC' },
    { key: 'Lucro', arrow: '↑', text: 'Mais margem em cada venda' },
  ],
}

export const opportunity = {
  label: 'A marca',
  title: 'A Wuben já tem o que muitas marcas buscam: um *produto* de verdade.',
  stats: [
    { value: '40', unit: '+ anos', label: 'de fábrica, desde 1981' },
    { value: '400', unit: '+', label: 'profissionais entre P&D e produção' },
    { value: '5', unit: 'anos', label: 'de garantia para produtos registrados' },
  ],
  source: 'Fonte: site oficial Wuben Brasil (páginas institucional e B2B)',
}

export const gains = {
  label: 'Onde a Wuben pode ganhar mais',
  title: 'Quatro pontos onde a marca *deixa vendas na mesa*.',
  items: [
    {
      icon: 'zap',
      title: 'Criadores sem dados unificados',
      today: 'Influencers e afiliados vendem, mas cada um isolado e sem formar público para a marca.',
      action: 'Rastreamento, pixel e públicos próprios a partir de cada criador.',
      impact: ['↓ CAC', '↑ ROAS'],
    },
    {
      icon: 'key',
      title: 'Loja que perde conversão',
      today: 'Títulos em inglês, erro de tradução visível, políticas confusas, sem WhatsApp nem CNPJ.',
      action: 'Loja em português, prova social brasileira, atendimento e garantia claros.',
      impact: ['↑ Conversão'],
    },
    {
      icon: 'calendar',
      title: 'Público restrito ao nicho',
      today: 'Comunicação técnica, falando só com quem já entende de lanterna.',
      action: 'Narrativa de desejo e de uso cotidiano para o consumidor comum.',
      impact: ['↑ Mercado', '↑ Faturamento'],
    },
    {
      icon: 'wine',
      title: 'Ticket e recompra',
      today: 'Catálogo de 13 produtos no Brasil e kits e acessórios pouco explorados.',
      action: 'Kits, acessórios, linhas de presente e CRM de recompra.',
      impact: ['↑ Ticket', '↑ LTV'],
    },
  ],
  todayLabel: 'Ponto de partida',
  actionLabel: 'O que faremos',
  note: 'Levantamento a partir da análise externa da loja. Validamos cada ponto no diagnóstico.',
}

export const rings = {
  label: 'Públicos',
  title: 'Deixar de disputar uma persona e conquistar um *mercado inteiro*.',
  items: [
    {
      name: 'Núcleo',
      role: 'Autoridade',
      text: 'Prova que o produto é de verdade.',
      people: ['Forças policiais e táticas', 'Sobrevivencialistas', 'Outdoor, trilha e camping'],
    },
    {
      name: 'Adjacentes',
      role: 'Amplitude',
      text: 'Leva a marca a quem usa luz todo dia.',
      people: ['Pesca e ciclismo', 'Off-road e viagem', 'Eletricistas e mecânicos'],
    },
    {
      name: 'Consumidor comum',
      role: 'Desejo',
      text: 'Transforma necessidade em vontade de ter.',
      people: ['Tecnologia e gadgets', 'Casa, carro e segurança', 'Presentes e lifestyle'],
    },
  ],
  insight: 'O núcleo dá credibilidade ("se a polícia usa, é bom"). O consumidor comum dá escala ("todo mundo precisa de uma no carro, em casa, no chaveiro").',
}

/** Ecossistema de tráfego (reaproveita o componente de inteligência de dados). */
export const data = {
  label: 'Ecossistema de tráfego',
  title: 'Cada criador vira uma *fonte de dados* para o tráfego da marca.',
  inputs: ['Influencers táticos e militares', 'Criadores de outdoor e esporte', 'Afiliados', 'Criadores de tecnologia e lifestyle', 'Orgânico e busca', 'Marketplaces'],
  center: 'Hub de dados Wuben',
  outputs: ['Público próprio aquecido', 'Públicos semelhantes', 'Remarketing por interesse', 'Anúncios com criadores'],
  example: {
    label: 'Na prática',
    text: 'Quem assistiu ao vídeo de um criador tático e visitou o X1 Pro recebe anúncio com o mesmo criador e uma oferta de kit, enquanto públicos semelhantes levam a campanha a novas pessoas.',
  },
}

export const platform = {
  label: 'Plataforma de criadores',
  title: 'Uma plataforma *própria* de afiliados e influencers.',
  lead: 'Desenvolvida pelo nosso time de tech para a Wuben: o que hoje está espalhado passa a ser medido, comparado e otimizado em um só lugar.',
  features: [
    { icon: 'link', title: 'Rastreamento', text: 'Link, cupom e página por criador, com pixel e API de conversões.' },
    { icon: 'bar', title: 'Metrificação', text: 'Vendas, receita, CAC e ROAS por criador e por conteúdo.' },
    { icon: 'users', title: 'Estudo de público', text: 'Quem compra de cada criador: região, interesses, ticket.' },
    { icon: 'pie', title: 'B.I.', text: 'Painel único com canais, criadores, produtos e margem.' },
    { icon: 'target', title: 'Otimizações', text: 'Onde investir mais, o que escalar, quem renovar.' },
    { icon: 'wallet', title: 'Gestão de comissões', text: 'Cálculo e acompanhamento automático por criador.' },
  ],
  mock: {
    title: 'Painel de criadores',
    rows: ['Criador tático', 'Criador outdoor', 'Afiliado tech', 'Criador lifestyle', 'Afiliado esporte'],
    note: 'Interface ilustrativa',
  },
}

export const house = {
  label: 'House de conteúdo',
  title: 'Uma house de conteúdo que *coordena* os criadores.',
  lead: 'Roteiros, ganchos e movimentos coordenados nascem dos dados e voltam para os dados.',
  steps: [
    { name: 'Insight', text: 'O que vende, para quem e por quê' },
    { name: 'Roteiro', text: 'Sugestões de roteiro e gancho por persona' },
    { name: 'Movimento', text: 'Vários criadores no mesmo momento' },
    { name: 'Anúncio', text: 'O melhor conteúdo vira mídia paga' },
    { name: 'Aprendizado', text: 'Resultado medido volta para o insight' },
  ],
  deliverables: ['Briefings e roteiros por persona', 'Calendário editorial e de movimentos', 'Banco de criativos para anúncios', 'Testes de gancho e formato', 'Mapeamento de novos criadores dentro e fora do nicho'],
}

export const calendar = {
  label: 'Movimentos coordenados',
  title: 'Cada data vira um *movimento* de criadores e mídia.',
  months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  /** 0 = sempre ativo, 1 = reforço, 2 = pico de campanha (planejamento sugerido) */
  season: [1, 0, 0, 0, 0, 1, 1, 2, 0, 1, 2, 2],
  legend: ['Sempre ativo', 'Reforço', 'Pico de campanha'],
  events: [
    { month: 0, name: 'Férias e verão', play: 'Viagem, camping e praia' },
    { month: 5, name: 'Inverno e trilhas', play: 'Outdoor e lanternas de cabeça' },
    { month: 7, name: 'Dia dos Pais', play: 'Linha de presentes e kits' },
    { month: 9, name: 'Lançamentos', play: 'Movimento coordenado de criadores' },
    { month: 10, name: 'Black Friday', play: 'Aquecimento de público e oferta' },
    { month: 11, name: 'Natal', play: 'Presentes para o consumidor comum' },
  ],
  lowSeason: 'Entre os picos, campanhas sempre ativas por persona mantêm o público aquecido e o custo por cliente sob controle.',
  source: 'Calendário sugerido. Datas de lançamento seguem o cronograma global da marca.',
}

export type LeverChart = 'occupancy' | 'revpar' | 'ticket' | 'time'

export const levers = {
  label: 'Estratégia',
  title: 'Quatro alavancas de faturamento e uma base de canais.',
  ticketParts: ['Lanterna', 'Acessórios', 'Kits e presentes'],
  items: [
    {
      tab: 'Desejo e marca',
      title: 'Lanterna como objeto de desejo',
      points: ['Narrativa de tecnologia, design e uso diário', 'Conteúdo para o consumidor comum', 'Coleções, cores e edições especiais'],
      insight: 'A linha G5 e o E8 já têm cor, design e acabamento de objeto colecionável. Falta comunicar isso.',
      tags: ['↑ Mercado', '↑ Faturamento'],
      chart: 'occupancy' as LeverChart,
      chartLabel: 'Interesse pela marca ao longo do ano',
      photo: 'line',
    },
    {
      tab: 'Aquisição unificada',
      title: 'Criadores alimentando o tráfego central',
      points: ['Pixel e públicos a partir de cada criador', 'Públicos semelhantes e remarketing', 'Anúncios com o perfil dos criadores'],
      insight: 'Cada venda vinda de um criador também gera um público que a marca pode reutilizar.',
      tags: ['↓ CAC', '↑ ROAS'],
      chart: 'revpar' as LeverChart,
      chartLabel: 'Público próprio aquecido',
      labels: { legend: 'Público próprio' },
      photo: 'hero',
    },
    {
      tab: 'Conversão',
      title: 'Uma loja que vende',
      points: ['Loja 100% em português, com prova social brasileira', 'WhatsApp, garantia e políticas claras', 'Comparador: qual lanterna é para você'],
      insight: 'Para um produto de R$ 200 a R$ 800, confiança é parte do preço.',
      tags: ['↑ Conversão'],
      chart: 'time' as LeverChart,
      chartLabel: 'Atrito na compra',
      labels: { rows: ['Hoje', 'Com a nova loja'] },
      photo: 'studio',
    },
    {
      tab: 'Ticket e recompra',
      title: 'Mais valor em cada cliente',
      points: ['Kits e combos por uso', 'Acessórios no carrinho', 'CRM de recompra e datas de presente'],
      insight: 'Quem compra uma lanterna de qualidade costuma querer a próxima. O EDC é uma cultura de coleção.',
      tags: ['↑ Ticket', '↑ LTV'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Composição do ticket',
      photo: 'moment',
    },
    {
      tab: 'Canais e B2B',
      title: 'Presença oficial em todos os canais',
      points: ['Lojas oficiais em marketplaces', 'Controle de preço e de revendedores', 'Linha profissional: segurança, indústria e serviços'],
      insight: 'Hoje a marca aparece em marketplaces por meio de terceiros. Canal oficial protege preço e confiança.',
      tags: ['↑ Faturamento'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Fontes de receita',
      parts: ['Loja oficial', 'Marketplaces', 'B2B profissional'],
      photo: 'real',
    },
  ],
}

export const plan = {
  label: 'O que vamos fazer',
  title: 'O plano de execução, frente por frente.',
  lead: 'Cada entrega tem um objetivo claro no resultado da Wuben.',
  fronts: [
    {
      name: 'Dados e plataforma',
      goal: '↑ Assertividade',
      team: 'Time de tech · Dados e métricas',
      items: ['Plataforma própria de criadores', 'Pixel, API de conversões e atribuição', 'B.I. com canais, criadores e margem', 'Estudo de público por criador', 'CRM e automações'],
    },
    {
      name: 'Aquisição e mídia',
      goal: '↓ CAC · ↑ ROAS',
      team: 'Gestores de tráfego · Growth 360°',
      items: ['Tráfego central com públicos próprios', 'Remarketing por interesse e produto', 'Anúncios com criadores', 'Google Shopping e marketplaces', 'Campanhas por persona'],
    },
    {
      name: 'Influência e conteúdo',
      goal: '↑ Alcance e desejo',
      team: 'Diretor de marketing · Expansão',
      items: ['House de conteúdo e roteiros', 'Mapeamento de criadores dentro e fora do nicho', 'Movimentos coordenados', 'Banco de criativos e testes de gancho'],
    },
    {
      name: 'Loja e conversão',
      goal: '↑ Conversão · ↑ Ticket',
      team: 'Time de tech · Diretor de marketing',
      items: ['Loja em português e páginas por persona', 'Prova social, WhatsApp e políticas claras', 'Kits, acessórios e presentes', 'Recompra e pós-venda'],
    },
  ],
}

export const projection = {
  label: 'Para onde vamos',
  title: 'Novas fontes de receita somadas a um tráfego mais *eficiente*.',
  layers: ['Tráfego pago', 'Criadores e afiliados', 'Marketplaces e B2B', 'Recompra'],
  profit: 'Lucro',
  x: ['Hoje', 'Ciclo 1', 'Ciclo 2', 'Ciclo 3'],
  note: 'Cenário ilustrativo. Metas e números são definidos no diagnóstico, a partir do DRE da operação.',
}

export const method = {
  label: 'Metodologia',
  title: 'Do diagnóstico à *escala*.',
  steps: [
    { name: 'Diagnosticar', text: 'Raio-X de canais, criadores, loja e DRE' },
    { name: 'Estruturar', text: 'Plataforma, rastreamento, públicos e metas' },
    { name: 'Ativar', text: 'Movimentos, mídia e loja otimizada' },
    { name: 'Otimizar', text: 'Ajustes semanais guiados por dados' },
    { name: 'Escalar', text: 'Novos públicos, criadores e canais' },
  ],
}

export const rollout = {
  label: 'Implantação',
  title: 'Roteiro de implantação em ciclos.',
  lead: 'Cada ciclo entrega resultado e prepara o próximo.',
  cycles: [
    { name: 'Ciclo 1', sub: 'Diagnóstico e estrutura', items: ['Auditoria de canais, loja e criadores', 'Rastreamento e pixel unificados', 'Plataforma de criadores no ar'], kpi: 'Linha de base e atribuição definidas' },
    { name: 'Ciclo 2', sub: 'Ativação', items: ['Loja otimizada e kits', 'Primeiros movimentos coordenados', 'Tráfego central com públicos próprios'], kpi: 'Conversão e ROAS em alta' },
    { name: 'Ciclo 3', sub: 'Escala', items: ['Criadores fora do nicho', 'Marketplaces oficiais e B2B', 'CRM de recompra'], kpi: 'Mercado maior e lucro em alta' },
  ],
}

export const closing = {
  title: 'A Wuben já tem o produto. Com um QG estratégico, chega ao *próximo nível*.',
  next: 'Próximo passo',
  nextText: 'Diagnóstico de canais, criadores, loja e DRE.',
  receives: ['Raio-X de canais, criadores e loja', 'Mapa de públicos e de criadores', 'Plano de ação com metas e calendário'],
  signature: 'Studio Octus × Wuben Brasil',
}
