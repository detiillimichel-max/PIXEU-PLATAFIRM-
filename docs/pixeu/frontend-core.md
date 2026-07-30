# PIXEU Front-end Core

## Objetivo

Este documento define o núcleo do front-end do PIXEU.

Ele cobre a base visual, a navegação, o tema, a adaptação por dispositivo e os componentes fundamentais usados pelo aplicativo.

---

## Princípios

- Primeiro mobile.
- Responsivo para desktop.
- Responsivo para Smart TV via URL.
- Interface leve.
- Componentes reutilizáveis.
- Navegação simples.
- Sem busca na Home.
- Sem dependência de IA para navegação.

---

## Layout responsivo

O PIXEU deve adaptar a interface para três contextos principais:

### Mobile

- uma coluna principal;
- navegação por toque;
- barras compactas;
- cards verticais;
- carrosséis horizontais no conteúdo.

### Desktop

- mais espaço lateral;
- maior densidade de informação;
- navegação por mouse e teclado;
- painéis laterais mais visíveis;
- carrosséis horizontais com mais itens aparentes.

### TV

- fontes maiores;
- foco em navegação por controle remoto;
- áreas clicáveis amplas;
- foco visual forte;
- menos elementos por tela;
- atenção total ao conteúdo destacado.

---

## Sistema de rotas

A navegação deve ser organizada por módulos.

Exemplo de rotas:

- `/` → Home
- `/feed/:category` → Feed vertical por categoria
- `/watch/:id` → vídeo completo
- `/music/:id` → música completa
- `/module/cinema` → módulo PIXEU Cinema
- `/module/music` → módulo PIXEU Música
- `/module/news` → módulo PIXEU Notícias
- `/module/science` → módulo PIXEU Ciência
- `/module/learn` → módulo PIXEU Aprenda

As rotas devem ser simples, previsíveis e fáceis de compartilhar por URL.

---

## Tema

O tema deve ser consistente em todo o PIXEU.

### Diretrizes

- visual limpo;
- contraste alto;
- suporte claro a modo escuro;
- identidade premium;
- uso de espaçamento consistente;
- foco em legibilidade;
- sem poluição visual.

### Estados do tema

- `light`
- `dark`
- `system`

O padrão recomendado é respeitar o sistema do dispositivo, com opção manual para o usuário.

---

## Componentes base

Os seguintes componentes devem existir como base do front-end:

### Estrutura

- `AppShell`
- `TopBar`
- `BottomNav`
- `SideRail`
- `SectionHeader`
- `PageTitle`
- `Container`

### Conteúdo

- `HeroBanner`
- `CarouselRow`
- `VerticalFeed`
- `FeedCard`
- `MediaPoster`
- `MediaMeta`
- `ActionRail`
- `InfoPanel`

### Interação

- `PlayButton`
- `WatchFullButton`
- `LikeButton`
- `ShareButton`
- `InfoButton`
- `BackButton`

### Estado

- `LoadingState`
- `EmptyState`
- `ErrorState`
- `SkeletonCard`

---

## Regras de navegação

- A Home não faz busca.
- A Home não consulta o banco para cada interação.
- O conteúdo é carregado por blocos.
- O feed vertical deve receber lotes prontos.
- As ações devem ser leves.
- O front-end deve priorizar experiência instantânea.

---

## Bibliotecas base

### Obrigatórias

- React
- TypeScript
- lucide-react

### Recomendadas

- React Router
- utilitários de classe de CSS
- persistência local para estado leve

---

## Responsividade

O layout deve se reorganizar automaticamente conforme a largura da tela.

### Quebras principais

- Mobile
- Tablet
- Desktop
- TV

### Ajustes esperados

- tamanhos de fonte;
- tamanhos de botões;
- quantidade de itens por linha;
- largura de carrosséis;
- presença ou ausência de painéis laterais.

---

## Acessibilidade

- contraste adequado;
- foco visível;
- navegação por teclado;
- textos legíveis;
- alvos de toque amplos;
- ícones acompanhados de rótulos quando necessário.

---

## Observação de arquitetura

Este núcleo não define lógica de moderação nem regras do feed.

Ele apenas garante a base visual e estrutural para todo o PIXEU.
