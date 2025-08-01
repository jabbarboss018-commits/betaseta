import Link from 'next/link';
import { Handshake } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Digital Akhuwat Homepage">
      <Handshake className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold font-headline text-foreground">
        Digital Akhuwat
      </span>
    </Link>
  );
}
