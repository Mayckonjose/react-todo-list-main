import React from 'react';

interface ImageCardProps {
  src: string;
  legenda: string;
}

export function ImageCard({ src, legenda }: ImageCardProps) {
  return (
    <div className="image-card">
      <img src={src} alt={legenda} style={{ maxWidth: '100%', borderRadius: '8px' }} />
      <p style={{ marginTop: '8px', textAlign: 'center' }}>{legenda}</p>
    </div>
  );
} 