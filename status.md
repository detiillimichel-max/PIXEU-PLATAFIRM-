# ESTADO DO PROJETO — PIXEU

> Documento oficial de continuidade do desenvolvimento da plataforma PIXEU.

---

# CONTROLE RÁPIDO

## Estado geral

- [x] Repositório principal identificado
- [x] Documento de continuidade criado
- [x] API Catalog documentado
- [x] Estrutura base de PWA disponível
- [ ] Layout Shell implementado
- [ ] Home finalizada
- [ ] Busca global integrada
- [ ] Cache inteligente ativado
- [ ] Supabase conectado ao fluxo principal
- [ ] Edge Functions organizadas por domínio
- [ ] Autenticação completa
- [ ] Chat e social prontos
- [ ] Streaming persistente pronto
- [ ] Clips com backend pronto
- [ ] Marketplace/Afiliados conectados

---

# OBJETIVO

Este documento é a referência oficial para continuidade do desenvolvimento da PIXEU.

Ao iniciar uma nova sessão utilizando o GitHub, este deverá ser o primeiro documento consultado.

Após sua leitura, o desenvolvimento deverá continuar exatamente do ponto registrado abaixo.

Não reiniciar o planejamento.

Não alterar a arquitetura sem necessidade.

---

# ACESSO RÁPIDO

## Repositório GitHub

- [x] https://github.com/detiillimichel-max/PIXEU-PLATAFIRM-

Branch principal

- [x] main

---

## GitHub Pages

- [x] https://detiillimichel-max.github.io/PIXEU-PLATAFIRM-/

---

## Supabase

Projeto

- [x] PIXEU

Dashboard

- [x] https://supabase.com/dashboard/project/uqdwtzlkqaosnweyoyit

API

- [x] https://uqdwtzlkqaosnweyoyit.supabase.co

---

# FASE ATUAL

Front-end

- [x] React
- [x] Vite
- [x] Tailwind CSS
- [x] PWA
- [x] GitHub Pages

Status:

🟢 Em desenvolvimento

---

# ÚLTIMO COMMIT CONCLUÍDO

- [x] 0015 — PWA

Itens concluídos:

- [x] Manifest
- [x] Service Worker
- [x] Registro do Service Worker
- [x] CSS Global
- [x] GitHub Pages

---

# PRÓXIMO COMMIT

- [ ] 0017 — Header

Criar:

- [ ] src/components/layout/Header.tsx
- [ ] Botão de menu
- [ ] Área de logo/nome
- [ ] Ações rápidas no topo

Objetivo:

Criar o cabeçalho principal da PIXEU com identidade visual consistente.

---

# PRÓXIMA SPRINT

- [ ] 0017 — Header
- [ ] 0018 — Sidebar
- [ ] 0019 — Bottom Navigation
- [ ] 0020 — Tema Claro / Escuro
- [ ] 0021 — Responsividade
- [ ] 0022 — Home estilo Netflix
- [ ] 0023 — Banner
- [ ] 0024 — Carrosséis

---

# PRÓXIMAS ETAPAS

- [ ] Home
- [ ] Busca
- [ ] Gateway Home
- [ ] Gateway Search
- [ ] Cache Inteligente
- [ ] Supabase
- [ ] Edge Functions
- [ ] Administração das APIs
- [ ] AI Router
- [ ] Analytics
- [ ] Moderação

---

# PARTES DO PROJETO

## Parte 1 — Base de integração

- [x] src/lib/oio-api.ts
- [x] src/lib/oio-taxonomy.ts
- [x] Wrapper safeTmdb para tolerar 401/500 sem quebrar UI
- [x] YouTube corrigido para usar playlistId obrigatório (YT_PLAYLISTS)

## Parte 2 — Content Hub

- [x] src/routes/hub.tsx
- [x] Busca global
- [x] 18 chips de categoria
- [x] Carrosséis dinâmicos
- [x] Fallback silencioso para blocos que falham

## Parte 3 — Abas principais

- [x] Home: Clima (Open-Meteo), Rádios, Jogos, TrendingVideos (YouTube), Cosmos
- [x] Streaming: hero + continuar assistindo + Top 10 (TMDB)
- [x] Clips: feed vertical snap fullscreen
- [x] Criar: hub de formatos + rascunhos
- [x] Perfil: badge OIO, stats, PIX cópia-e-cola, menu

## Parte 4 — APIs públicas isoladas

- [x] src/lib/public-apis.ts
- [x] Open Library
- [x] Gutenberg
- [x] LibriVox
- [x] Wikimedia Commons
- [x] REST Countries
- [x] DiceBear
- [x] parseShopeeAffiliate
- [x] Rota /publico com busca unificada + blocos Clima/Países/Avatares/Shopee

## Parte 5 — Autenticação & Perfil real

- [ ] Integrar Supabase Auth (profiles, user_roles) usando VITE_OIO_ANON_KEY
- [ ] Tela de login/registro com magic link + Google
- [ ] Sincronizar perfil.tsx com tabela profiles (avatar, nome, bio)

## Parte 6 — Chat & Social

- [ ] Aba/rota de mensagens (direct_messages, groups, group_messages)
- [ ] typing_status em tempo real via Supabase Realtime
- [ ] Stories/Status (stories, status_media, media_comments)
- [ ] Follows (follows) + feed social

## Parte 7 — Streaming persistente

- [ ] tveio_continue_watching (progresso real do usuário)
- [ ] tveio_favorites, tveio_playlists, tveio_playlist_items
- [ ] tveio_history + tveio_comments

## Parte 8 — Clips com backend

- [ ] Upload para Supabase Storage
- [ ] videos
- [ ] video_views
- [ ] video_likes
- [ ] video_shares
- [ ] video_comments

---

# PRINCÍPIOS

- [x] Arquitetura antes da implementação.
- [x] Documentação antes do código.
- [x] Nenhum commit sem documentação.
- [x] Supabase como cérebro da plataforma.
- [x] APIs públicas sempre que possível.
- [x] Edge Functions somente quando necessário.
- [x] Cache antes da IA.
- [x] IA apenas quando agregar valor.
- [x] Economia de recursos como requisito de engenharia.
- [x] Código único para celular, tablet, desktop e TV.

---

# FLUXO DE DESENVOLVIMENTO

Selecionar GitHub.

↓

Continuar exatamente do último commit registrado.

↓

Executar o maior número possível de commits relacionados.

↓

Próximo do limite da sessão:

Atualizar apenas:

- [x] Documentação dos COMMITS realizados.
- [x] ESTADO_DO_PROJETO.md.
- [x] PROXIMA_SESSAO.md.
- [x] CHANGELOG.md (quando necessário).

---

# CONTROLE DA SESSÃO

Última atualização

- [x] 2026-07-26

Último Commit Executado

- [x] 0015

Próxima Faixa de COMMITS

- [x] 0017 em diante

---

# IMPORTANTE

Ao final de cada sessão de desenvolvimento, atualizar obrigatoriamente:

- [x] Último Commit Executado.
- [x] Próxima Faixa de COMMITS.
- [x] Última Atualização.

Este documento é o ponto oficial de retomada do projeto PIXEU.

Este documento possui prioridade sobre qualquer conversa anterior.

Em caso de divergência, seguir sempre o ESTADO_DO_PROJETO.md.
