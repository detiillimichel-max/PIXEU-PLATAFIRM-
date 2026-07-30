import React from 'react';

export function CarouselRow({ title }: { title: string }) {
  return (
    <section className="pixeu-carousel-row" aria-label={title}>
      <h3>{title}</h3>
      <div className="pixeu-carousel-row__items" />
    </section>
  );
}
