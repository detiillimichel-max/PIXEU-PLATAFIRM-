# Catálogo de Edge Functions do PIXEU

## Objetivo

Este documento consolida o catálogo das Edge Functions do projeto PIXEU e serve como referência oficial para o front-end, para o `oio-master-sync` e para a manutenção da arquitetura.

As Edge Functions são organizadas por blocos funcionais. O front-end não deve precisar descobrir isso por tentativa e erro: ele deve consumir a arquitetura já documentada e o catálogo já sincronizado no banco de dados.

---

## Fluxo arquitetural

Edge Functions → sincronização → banco de dados → front-end → feed e módulos do PIXEU.

O `oio-master-sync` atua como agregador/orquestrador das fontes, reduzindo a necessidade de chamadas diretas e mantendo a experiência leve.

---

## Bloco 1: Academic, News & Archives

- Academic Earth: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/academic-earth-sync-clips
- Al Jazeera Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/al-jazeera-media-sync-clips
- AP Video Metadata: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/ap-video-metadata-sync-clips
- Archive Animation: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-animation-sync-clips
- Archive Community Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-community-video-sync-clips
- Archive Cultural Collections: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-cultural-collections-sync-clips
- Archive Feature Films: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-feature-films-sync-clips
- Archive Movie Trailers: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-movie-trailers-sync-clips
- Archive Sports: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-sports-sync-clips
- Archive TV News: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/archive-tv-news-sync-clips
- Australian Screen: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/australian-screen-sync-clips

---

## Bloco 2: Mídia, Vídeos e Catálogos Públicos

- BBC Programme: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/bbc-programme-sync-clips
- Beachfront B-Roll: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/beachfront-broll-sync-clips
- Big Buck Bunny: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/big-buck-bunny-sync-clips
- Blender Movies: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/blender-movies-sync-clips
- Blender Studio: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/blender-studio-sync-clips
- British Pathé: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/british-pathe-sync-clips
- C-SPAN Video Library: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/c-span-video-library-sync-clips
- CERN Document Server: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/c-stern-document-server-sync-clips
- CERN Media Archive: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/cern-media-archive-sync-clips
- Clipstill: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/clipstill-sync-clips
- Coursera Public Catalog: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/coursera-public-catalog-sync-clips
- Coverr Feed: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/coverr-feed-sync-clips
- Creative Commons Search: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/creativecommons-search-sync-clips

---

## Bloco 3: Integrações, Dados e Plataformas

- Daily: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/daily
- Dareful: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/dareful-sync-clips
- Digital Public Library of America (DPLA): https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/digital-public-library-of-america-sync-clips
- DW Media Center: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/dw-media-center-sync-clips
- edX Public Catalog: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/edx-public-catalog-sync-clips
- Elephants Dream: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/elephants-dream-sync-clips
- ElevenLabs: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/elevenlabs
- ESA Multimedia: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/esa-multimedia-sync-clips
- ESA Web TV: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/esa-web-tv-sync-clips
- European Commission Audiovisual Service: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/european-commission-audiovisual-service-sync-clips

---

## Bloco 4: Cultura, Educação e IA/APIs

- Europeana Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/europeana-sync-clips
- Europeana Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/europeana-video-sync-clips
- Facebook: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/facebook
- Firebase: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/firebase
- Flickr CC Videos: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/flickr-cc-videos-sync-clips
- France 24 Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/france24-media-sync-clips
- Free Stock Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/free-stock-video-sync-clips
- FutureLearn Public Courses: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/futurelearn-public-courses-sync-clips
- Gemini: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/gemini
- GNews: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/gnews
- Groq: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/groq

---

## Bloco 5: Harvard, Universidades e Bibliotecas

- Harvard Online Learning: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/harvard-online-learning-sync-clips
- IgniteMotion: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/ignitemotion-sync-clips
- INA Mediapro: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/ina-mediapro-sync-clips
- Internet2 Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/internet2-media-sync-clips
- Khan Academy Videos: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/khan-academy-videos-sync-clips
- Library of Congress: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/library-of-congress-sync-clips
- LibreTexts Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/libretexts-media-sync-clips
- Life of Vids: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/life-of-vids-sync-clips
- Mazwai: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/mazwai-sync-clips
- MIT Open Learning Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/mit-open-learning-video-sync-clips
- MIT OpenCourseWare: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/mit-opencourseware-sync-clips

---

## Bloco 6: NASA, Master Sync e Open Content

- Mixkit Feed: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/mixkit-feed-sync-clips
- Motion Places: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/motion-places-sync-clips
- Moving Image Archive: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/moving-image-archive-sync-clips
- NASA: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/nasa
- NASA Scientific Visualization Studio: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/nasa-scientific-visualization-studio-sync-clips
- National Archives: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/national-archives-sync-clips
- NFB Canada: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/nfb-canada-sync-clips
- NHK World Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/nhk-world-media-sync-clips
- OIO Master Sync: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/oio-master-sync
- Open Culture Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/open-culture-video-sync-clips
- Open Media Library: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/open-media-library-sync-clips
- Open-Meteo: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/Open-Meteo

---

## Bloco 7: Open Education, Stock Videos e Domínio Público

- OpenLearn (Open University): https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/openlearn-open-university-sync-clips
- Openverse: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/openverse-sync-clips
- PBS Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/pbs-video-sync-clips
- PeerTube: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/PeerTube
- Pexels: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/pexels
- Pikwizard Video: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/pikwizard-video-sync-clips
- Prelinger Archives: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/prelinger-archives-sync-clips
- Public Domain Movies: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/public-domain-movies-sync-clips
- Public Domain Torrents: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/public-domain-torrents-sync-clips
- Reuters Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/reuters-media-sync-clips
- Screen Australia: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/screen-australia-sync-clips
- Smithsonian Open Access: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/smithsonian-open-access-sync-clips

---

## Bloco 8: TED, Twitch e Utilitários Finais

- Splitshire Videos: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/splitshire-videos-sync-clips
- Stanford Online Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/stanford-online-media-sync-clips
- TED Talks RSS: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/ted-talks-rss-sync-clips
- TEDx RSS: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/tedx-rss-sync-clips
- Test Vault: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/test-vault
- TMDb: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/tmdb
- Twitch: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/twitch
- UC Berkeley Webcast: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/uc-berkeley-webcast-sync-clips
- UN Web TV: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/un-web-tv-sync-clips
- US National Archives Catalog: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/us-national-archives-catalog-sync-clips
- User Profile: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/user-profile
- Vapid: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/vapid

---

## Bloco 9: Wikimedia, YouTube e Encerramento

- Videezy Public: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/videezy-public-sync-clips
- Vidsplay: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/vidsplay-sync-clips
- Voice of America: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/voice-of-america-sync-clips
- Wikimedia Education: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/wikimedia-education-sync-clips
- Wikimedia Sync: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/wikimedia-sync-clips
- Wikipedia: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/Wikip-dia
- Xiph Media: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/xiph-media-sync-clips
- Yale Open Courses: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/yale-open-courses-sync-clips
- YouTube: https://uqdwtzlkaosnweyoyit.supabase.co/functions/v1/youtube

---

## Regras de uso no front-end

- O front-end não deve depender de chamadas diretas a cada item visualizado.
- O catálogo existe para orientar a sincronização e o consumo em lote.
- O `oio-master-sync` é o ponto preferencial para consolidar fontes.
- A exibição no feed deve vir do banco ou de lotes já preparados, e não de chamadas fragmentadas por interação.

---

## Observação final

Este catálogo é a base de referência para o PIXEU. Ele deve permanecer alinhado ao banco de dados e à camada de sincronização sempre que novas Edge Functions forem adicionadas ou renomeadas.
