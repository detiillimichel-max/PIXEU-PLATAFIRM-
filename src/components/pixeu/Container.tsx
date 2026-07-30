import React from 'react';

export function Container({ children }: { children: React.ReactNode }) {
  return <div className="pixeu-container">{children}</div>;
}
