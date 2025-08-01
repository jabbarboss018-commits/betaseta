import Link from 'next/link';
import Image from 'next/image';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Akhuwat Homepage">
       <Image src="/logoo.png" alt="Akhuwat Logo" width={150} height={40} />
    </Link>
  );
}
