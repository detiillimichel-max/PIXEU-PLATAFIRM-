import React from 'react';

export function PlayButton({ label = 'Assistir completo' }: { label?: string }) {
  return (
    <button type="button" className="pixeu-play-button">
      {label}
    </button>
  );
}
