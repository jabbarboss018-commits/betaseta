import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';
import { Facebook, Twitter, Instagram, Rss, Heart, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar */}
      <div style={{ backgroundColor: '#006838' }} className="text-white">
        <div className="container flex items-center justify-between w-full h-[120px] px-[5%]">
          {/* Logo Section */}
          <div className="h-[70px] w-auto">
            <Logo className="h-full w-auto" />
          </div>

          <div className="flex items-center gap-4">
            {/* Social Media Icons */}
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
              <Link href="#" aria-label="Vimeo">
                <Rss className="h-5 w-5" />
              </Link>
            </div>

            {/* Donate Button */}
            <Button
              className="min-w-[80px] h-[38px] bg-yellow-400 hover:bg-yellow-500 text-white font-normal rounded-md flex items-center justify-center gap-2 text-md "
            >
              <Heart className="h-4 w-4" />
              DONATE
            </Button>
          </div>
        </div>
      </div>

      {/* Menu section */}
      <div className="container flex h-[80px] w-full items-center justify-between px-[5%] border-b border-dotted border-b-2 border-green-900">
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-md font-medium">
          <Link href="/" className="transition-colors hover:text-primary text-primary font-bold">
            Home
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">
            Check Status
          </Link>
          <Link href="/apply" className="transition-colors hover:text-primary text-foreground/60">
            How To Apply
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">
            Our Impact
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">
            Contact And Help
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">
            Privacy Policy
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60">
            Donate
          </Link>
        </nav>

        <div className="ml-auto">
          {/* Search Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-foreground/60" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <div className="p-4">
                <h4 className="text-lg font-medium">Search</h4>
                <p className="text-sm text-muted-foreground">What are you looking for?</p>
                <Input className="mt-4" placeholder="Search..." />
                <Button className="mt-4 w-full bg-primary text-primary-foreground">Search</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
