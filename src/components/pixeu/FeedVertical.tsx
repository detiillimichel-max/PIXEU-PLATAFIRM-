import React from 'react';

export type FeedVerticalProps = {
  title: string;
};

export function FeedVertical({ title }: FeedVerticalProps) {
  return (
    <section aria-label={title} className="pixeu-feed-vertical">
      <header className="pixeu-feed-vertical__header">
        <h1>{title}</h1>
      </header>
      <div className="pixeu-feed-vertical__placeholder">
        <p>Feed vertical do PIXEU</p>
        <p>Conteúdo será renderizado em lotes, sem busca automática e sem mídia no banco.</p>
      </div>
    </section>
  );
}
