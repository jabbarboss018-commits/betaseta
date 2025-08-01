import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const AkhuwatLogo = ({ className }: { className?: string }) => (
    <svg
      className={cn("h-8 w-8", className)}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M50 0C22.38 0 0 22.38 0 50C0 77.62 22.38 100 50 100C77.62 100 100 77.62 100 50C100 22.38 77.62 0 50 0ZM50 88C29.01 88 12 70.99 12 50C12 29.01 29.01 12 50 12C70.99 12 88 29.01 88 50C88 70.99 70.99 88 50 88Z" fill="#38761D" />
      <path d="M50 25C44.48 25 40 29.48 40 35C40 40.52 44.48 45 50 45C55.52 45 60 40.52 60 35C60 29.48 55.52 25 50 25Z" fill="#38761D" />
      <path d="M35 50C29.48 50 25 54.48 25 60C25 65.52 29.48 70 35 70C40.52 70 45 65.52 45 60C45 54.48 40.52 50 35 50Z" fill="#38761D" />
      <path d="M65 50C59.48 50 55 54.48 55 60C55 65.52 59.48 70 65 70C70.52 70 75 65.52 75 60C75 54.48 70.52 50 65 50Z" fill="#38761D" />
    </svg>
);


export function Logo({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  return (
    <Link href="/" className="flex items-center gap-2 group" aria-label="Akhuwat Homepage">
       <AkhuwatLogo className={cn(variant === 'light' ? 'text-white' : 'text-primary')} />
      <span className={cn(
        "text-2xl font-bold font-headline",
        variant === 'light' ? 'text-white' : 'text-foreground'
      )}>
        AKHUWAT
      </span>
    </Link>
  );
}
