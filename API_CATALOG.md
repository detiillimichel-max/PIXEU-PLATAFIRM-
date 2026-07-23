# API CATALOG — PIXEU

Versão: 1.0

---

# OBJETIVO

Este documento descreve todas as APIs, provedores de conteúdo e serviços utilizados pela plataforma PIXEU.

Objetivos:

• Priorizar APIs públicas.

• Reduzir dependência de um único provedor.

• Facilitar substituição de APIs.

• Definir política de cache.

• Definir quando utilizar Front-end, Edge Functions ou Vault.

• Centralizar a documentação técnica das integrações.

---

# FILOSOFIA

Sempre que possível seguir esta ordem:

Cache

↓

Banco (Supabase)

↓

API Pública

↓

Edge Function

↓

IA

A IA somente deverá ser utilizada quando agregar valor.

---

# PADRÃO DE DOCUMENTAÇÃO

Toda API cadastrada deverá possuir obrigatoriamente:

• Nome

• Site Oficial

• Documentação

• Finalidade

• Categoria

• Tipo de Conteúdo

• Formato retornado

• Necessita API Key

• Gratuita ou Freemium

• Pode ser utilizada diretamente no Front-end

• Necessita Edge Function

• Necessita Vault

• TTL recomendado

• Rate Limit

• Licença

• Campos importantes

• Observações

• Prioridade PIXEU

• APIs de Backup (Fallback)

---

# CATEGORIAS

📺 Vídeos

📚 Livros

🎮 Jogos

🎵 Música

📻 Rádio

📰 Notícias

🖼 Imagens

🤖 Inteligência Artificial

🗺 Mapas

🌦 Clima

👥 Redes Sociais

🏛 Museus

🚀 Ciência

---

# ARQUITETURA

PIXEU

↓

Gateway

↓

Normalização

↓

Cache

↓

Banco

↓

Player / Interface

↓

Usuário

---

# ESTRATÉGIAS

## Front-end

Utilizar quando:

• API pública.

• Sem segredo.

• CORS permitido.

• Rate limit adequado.

---

## Edge Functions

Utilizar quando:

• API Key privada.

• Necessidade de agregação.

• Necessidade de normalização.

• Necessidade de autenticação.

• Controle de Rate Limit.

---

## Vault

Utilizar apenas para:

• Secrets.

• Tokens privados.

• OAuth.

• APIs pagas.

Nunca utilizar Vault para APIs totalmente públicas.

---

# POLÍTICA DE CACHE

Notícias

6 horas

Clima

12 horas

Clima com alerta

1 hora

Vídeos

7 dias

Filmes

30 dias

Livros

30 dias

Museus

30 dias

Jogos

24 horas

Catálogos

7 dias

Conteúdo histórico

365 dias

---

# FALLBACK

Sempre que possível cada categoria deverá possuir múltiplos provedores.

Exemplo:

PIXEU TV

↓

Internet Archive

↓

Wikimedia

↓

PeerTube

↓

Pixabay

↓

Coverr

↓

Mixkit

↓

Blender

↓

NASA

↓

ESA

↓

Europeana

↓

Smithsonian

Caso um provedor fique indisponível, outro deverá assumir automaticamente.

---

# OBJETIVO FINAL

Nenhum módulo da PIXEU deverá depender exclusivamente de um único provedor de conteúdo.

A arquitetura deverá permitir adicionar ou remover APIs sem modificar o Front-end.

Toda integração deverá passar pela camada de normalização da plataforma.
