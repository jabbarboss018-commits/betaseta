import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';
import { Heart, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex h-24 items-center justify-between px-6">
        
        {/* Logo with angled background */}
        <div className="absolute left-0 top-0 h-full w-48 md:w-64">
          <div 
            className="absolute left-0 top-0 h-full w-full animate-shimmer"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
            }}
          ></div>
          <div className="relative flex h-full items-center justify-center pr-8">
            <Logo className="h-[90px] w-auto" />
          </div>
        </div>
        
        {/* Spacer for the logo area */}
        <div className="w-48 md:w-64 flex-shrink-0"></div>

        {/* Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center gap-10 lg:gap-14 text-lg font-medium relative">
          <Link href="/" className="transition-colors hover:text-primary text-primary font-bold text-xl">
            Home
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60 text-xl">
            Check Status
          </Link>
          <Link href="/apply" className="transition-colors hover:text-primary text-foreground/60 text-xl">
            How To Apply
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60 text-xl">
            Our Impact
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60 text-xl">
            Contact And Help
          </Link>
          <Link href="#" className="transition-colors hover:text-primary text-foreground/60 text-xl">
            Privacy Policy
          </Link>
          {/* Yellow accent line */}
          <div className="absolute -bottom-9 h-1 w-full">
             <div className="h-full w-20 bg-yellow-400 mx-auto"></div>
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Search Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-10 w-10 text-foreground/60" />
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

          {/* Donate Button */}
          <Button
            className="bg-gradient-to-r from-green-500 to-yellow-400 text-white font-bold rounded-md flex items-center justify-center gap-2 text-lg hover:from-green-600 hover:to-yellow-500 shadow-lg px-12 py-5 h-auto"
          >
            <Heart className="h-5 w-5" />
            DONATE
          </Button>
        </div>
      </div>
    </header>
  );
}
