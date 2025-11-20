import React, { useState, useEffect, useRef } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

type Certification = {
  id: string;
  name: string;
  image: string;
};

type CardType = {
  id: number;
  cert: Certification;
  flipped: boolean;
  matched: boolean;
};

const CARD_BORDER_RADIUS = 16;

const CERTIFICATIONS: Certification[] = [
  // Prioritize non-Boomi certifications
  { id: '1', name: 'Azure - Describe cloud concepts', image: '/certifications/1.png' },
  { id: '2', name: 'Azure - Describe Azure architecture', image: '/certifications/2.png' },
  { id: '3', name: 'Azure - Prerequisites for administrators', image: '/certifications/3.png' },
  { id: '4', name: 'Azure - Implement and manage storage', image: '/certifications/4.png' },
  { id: '5', name: 'Programming with Python', image: '/certifications/5.png' },
  { id: '6', name: 'Intercultural Competencies', image: '/certifications/6.png' },
  { id: '7', name: 'Information Security', image: '/certifications/7.png' },
  { id: '8', name: 'Digital Project Management', image: '/certifications/8.png' },
  { id: '9', name: 'Qualtrics Online Surveys', image: '/certifications/9.png' },
  { id: '10', name: 'Boomi - Professional API Management', image: '/certifications/10.png' },
  { id: '11', name: 'Boomi - Professional API Design', image: '/certifications/11.png' },
  { id: '12', name: 'Boomi - Installing and Configuring SAP', image: '/certifications/12.png' },
  { id: '13', name: 'Boomi - Associate Runtime Architect', image: '/certifications/13.png' },
];

function getGridDimensions(numCards: number): { cols: number; rows: number } {
  if (numCards <= 4) return { cols: 2, rows: 2 };
  if (numCards <= 6) return { cols: 3, rows: 2 };
  if (numCards <= 8) return { cols: 4, rows: 2 };
  if (numCards <= 12) return { cols: 4, rows: 3 };
  return { cols: 5, rows: Math.ceil(numCards / 5) };
}

function shuffle<T>(array: T[]): T[] {
  let arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Different pattern variations for each level
const getCardBackPattern = (levelIndex: number) => {
  const patterns = [
    // Pattern 1: Damask with floral elements (Level 1-2)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="damask" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="#d81b60"/>
          <g fill="rgba(255,255,255,0.15)">
            <ellipse cx="60" cy="20" rx="8" ry="12"/>
            <path d="M 45 20 Q 50 15 55 20" stroke="rgba(255,255,255,0.2)" fill="none" stroke-width="1"/>
            <path d="M 75 20 Q 70 15 65 20" stroke="rgba(255,255,255,0.2)" fill="none" stroke-width="1"/>
            <path d="M 60 40 L 70 60 L 60 80 L 50 60 Z" fill="rgba(239,68,68,0.2)"/>
            <circle cx="15" cy="15" r="3" fill="rgba(255,255,255,0.1)"/>
            <circle cx="105" cy="15" r="3" fill="rgba(255,255,255,0.1)"/>
            <circle cx="15" cy="105" r="3" fill="rgba(255,255,255,0.1)"/>
            <circle cx="105" cy="105" r="3" fill="rgba(255,255,255,0.1)"/>
            <path d="M 30 60 Q 40 50 50 60" stroke="rgba(255,255,255,0.1)" fill="none" stroke-width="1.5"/>
            <path d="M 70 60 Q 80 50 90 60" stroke="rgba(255,255,255,0.1)" fill="none" stroke-width="1.5"/>
          </g>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#damask)"/>
    </svg>
    `,
    // Pattern 2: Geometric circles (Level 3-4)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="circles" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="#b91c1c"/>
          <circle cx="30" cy="30" r="15" fill="rgba(255,255,255,0.1)"/>
          <circle cx="30" cy="30" r="10" fill="rgba(251,113,133,0.2)"/>
          <circle cx="30" cy="30" r="5" fill="rgba(255,255,255,0.15)"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#circles)"/>
    </svg>
    `,
    // Pattern 3: Ornate lattice (Level 5-6)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="lattice" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <rect width="40" height="40" fill="#d81b60"/>
          <path d="M 0 0 L 40 40" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <path d="M 40 0 L 0 40" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
          <circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.3)"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#lattice)"/>
    </svg>
    `,
    // Pattern 4: Wavy lines (Level 7-8)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="waves" x="0" y="0" width="120" height="20" patternUnits="userSpaceOnUse">
          <rect width="120" height="20" fill="#b91c1c"/>
          <path d="M 0 10 Q 10 5 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10" stroke="rgba(255,255,255,0.2)" fill="none" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#waves)"/>
    </svg>
    `,
    // Pattern 5: Moroccan tiles (Level 9-10)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="moroccan" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <rect width="60" height="60" fill="#d81b60"/>
          <polygon points="30,10 50,20 40,40 30,45 20,40 10,20" fill="rgba(255,255,255,0.15)"/>
          <circle cx="30" cy="30" r="12" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="1"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#moroccan)"/>
    </svg>
    `,
    // Pattern 6: Dotted grid (Level 11-12)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="dotgrid" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
          <rect width="30" height="30" fill="#b91c1c"/>
          <circle cx="15" cy="15" r="2" fill="rgba(255,255,255,0.25)"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#dotgrid)"/>
    </svg>
    `,
    // Pattern 7: Ornamental corners (Level 13)
    `
    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120">
      <defs>
        <pattern id="corners" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <rect width="120" height="120" fill="#d81b60"/>
          <path d="M 10 10 L 20 10 L 10 20 Z" fill="rgba(255,255,255,0.2)"/>
          <path d="M 110 10 L 100 10 L 110 20 Z" fill="rgba(255,255,255,0.2)"/>
          <path d="M 10 110 L 20 110 L 10 100 Z" fill="rgba(255,255,255,0.2)"/>
          <path d="M 110 110 L 100 110 L 110 100 Z" fill="rgba(255,255,255,0.2)"/>
          <circle cx="60" cy="60" r="20" fill="none" stroke="rgba(255,255,255,0.15)" stroke-width="2"/>
        </pattern>
      </defs>
      <rect width="120" height="120" fill="url(#corners)"/>
    </svg>
    `,
  ];
  
  return patterns[(levelIndex - 2) % patterns.length];
};

export function CertificationSnakeGame() {
  // Level is the number of unique cards (pairs) in the current round.
  const [level, setLevel] = useState<number>(2);
  const [cards, setCards] = useState<CardType[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [moves, setMoves] = useState<number>(0);

  // Build deck based on current level (N unique cards -> 2N cards)
  useEffect(() => {
    const pairs = CERTIFICATIONS.slice(0, Math.min(level, CERTIFICATIONS.length));
    const deck: CardType[] = shuffle(
      [...pairs, ...pairs].map((cert, idx) => ({ id: idx, cert, flipped: false, matched: false }))
    );
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }, [level]);

  useEffect(() => {
    if (flipped.length === 2) {
      setTimeout(() => {
        const [first, second] = flipped;
        if (cards[first] && cards[second] && cards[first].cert.id === cards[second].cert.id) {
          setMatched(prev => (prev.includes(cards[first].cert.id) ? prev : [...prev, cards[first].cert.id]));
        }
        setFlipped([]);
        setMoves(m => m + 1);
      }, 900);
    }
  }, [flipped, cards]);

  // Auto-advance to next level when all pairs for current level have been matched
  useEffect(() => {
    if (matched.length > 0 && matched.length >= Math.min(level, CERTIFICATIONS.length)) {
      const timer = setTimeout(() => {
        if (level < CERTIFICATIONS.length) setLevel(l => Math.min(l + 1, CERTIFICATIONS.length));
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [matched, level]);

  const handleFlip = (idx: number) => {
    if (flipped.length < 2 && !flipped.includes(idx) && !matched.includes(cards[idx].cert.id)) {
      setFlipped(prev => [...prev, idx]);
    }
  };

  const grid: { cols: number; rows: number } = getGridDimensions(cards.length);
  const cols = grid.cols;
  const currentPattern = getCardBackPattern(level);
  const CARD_SIZE = 260; // Fixed card size in pixels
  const SPACING = 6; // 0.2cm ≈ 6px

  return (
    <section style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'none',
    }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, ${CARD_SIZE}px)`,
          gap: `${SPACING}px`,
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
        }}
      >
        {cards.map((card, idx) => {
          const isFlipped = flipped.includes(idx) || matched.includes(card.cert.id);
          return (
            <button
              key={card.id}
              onClick={() => handleFlip(idx)}
              style={{
                  width: `${CARD_SIZE}px`,
                  height: `${CARD_SIZE}px`,
                  borderRadius: CARD_BORDER_RADIUS,
                  boxShadow: isFlipped ? '0 8px 32px rgba(0, 0, 0, 0.12)' : '0 8px 32px rgba(233, 30, 99, 0.18)',
                  background: isFlipped ? '#fff' : `url('data:image/svg+xml;utf8,${encodeURIComponent(currentPattern.trim())}')`,
                  backgroundSize: '120px 120px',
                  backgroundPosition: '0 0',
                  border: isFlipped ? '2px solid #d81b60' : '2px solid #ef4444',
                  cursor: isFlipped ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  transition: 'transform 0.18s ease',
                  overflow: 'hidden',
                  padding: 0,
              }}
              aria-label={isFlipped ? card.cert.name : 'Flip card'}
              disabled={isFlipped}
            >
              {isFlipped ? (
                <img
                  src={card.cert.image}
                  alt={card.cert.name}
                  style={{
                    width: '90%',
                    height: '90%',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                  onError={e => {
                    const target = e.target as HTMLImageElement;
                    if (target.src.endsWith('.png')) {
                      target.src = card.cert.image.replace('.png', '.jpg');
                    }
                  }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {/* Pattern is in background, no overlay needed */}
                </div>
              )}
            </button>
          );
        })}
      </div>
      <div style={{ textAlign: 'center', marginTop: 18, color: '#222', fontSize: 16 }}>
        Moves: {moves} | Matches: {matched.length}/{Math.min(level, CERTIFICATIONS.length)}
      </div>
      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button
          onClick={() => {
            // restart current level
            setLevel(l => l);
          }}
          style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', background: '#fff' }}
        >
          Restart Level
        </button>
        {level < CERTIFICATIONS.length && (
          <button
            onClick={() => setLevel(l => Math.min(l + 1, CERTIFICATIONS.length))}
            style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #ef4444', background: '#ef4444', color: '#fff' }}
          >
            Skip Level
          </button>
        )}
      </div>
    </section>
  );
}

