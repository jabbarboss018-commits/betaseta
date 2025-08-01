import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';
import { Facebook, Twitter, Instagram, Youtube, Heart, Search } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="bg-primary text-primary-foreground">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <Logo variant="light" />
          <div className="ml-auto flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" aria-label="Youtube">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
            <Button variant="default" size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </div>
        </div>
      </div>
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-primary text-accent">Home</Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">Check Status</Link>
          <Link href="/apply" className="transition-colors hover:text-primary text-foreground/60">How To Apply</Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">Our Impact</Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">Contact And Help</Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">Privacy Policy</Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">Donate</Link>
        </nav>
        <div className="ml-auto">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-foreground/60" />
          </Button>
        </div>
      </div>
    </header>
  );
}
