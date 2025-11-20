import { CertificationSnakeGame } from '../components/CertificationSnakeGame';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function MemoryGamePage() {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#f9fafb', paddingTop: '2rem' }}>
      <div style={{ width: '100%', maxWidth: 900, padding: '0 1rem', marginBottom: '1rem' }}>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#d81b60', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
            <ArrowLeft size={16} />
            Back to Portfolio
          </a>
        </Link>
      </div>
      <CertificationSnakeGame />
    </div>
  );
}
