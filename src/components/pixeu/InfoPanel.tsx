import React from 'react';

export function InfoPanel({ title, source, duration }: { title: string; source?: string; duration?: string }) {
  return (
    <section className="pixeu-info-panel" aria-label="Informações do conteúdo">
      <strong>{title}</strong>
      {source ? <div>{source}</div> : null}
      {duration ? <div>{duration}</div> : null}
    </section>
  );
}
