import Link from 'next/link';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 group ${className}`} aria-label="Akhuwat Homepage">
       <Image src="/logoo.webp" alt="Akhuwat Logo" width={200} height={70} className="w-auto h-full" />
    </Link>
  );
}
