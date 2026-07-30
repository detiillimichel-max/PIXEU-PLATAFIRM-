import React from 'react';

export function WatchFullButton({ label = 'Ver na íntegra' }: { label?: string }) {
  return (
    <button type="button" className="pixeu-watchfull-button">
      {label}
    </button>
  );
}
