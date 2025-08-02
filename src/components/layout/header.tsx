import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';
import { Heart, Menu, Search } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '../ui/input';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const navLinks = [
    { href: "/", label: "Home" },
    { href: "#", label: "Check Status" },
    { href: "/apply", label: "How To Apply" },
    { href: "#", label: "Our Impact" },
    { href: "#", label: "Contact And Help" },
    { href: "#", label: "Privacy Policy" },
];

export function Header() {
  return (
    <header className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex h-24 items-center justify-between px-4 sm:px-6">
        
        {/* Mobile: Hamburger Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-6 p-6">
                {navLinks.map(link => (
                    <Link key={link.href} href={link.href} className="text-lg font-medium text-foreground/80 hover:text-primary">
                        {link.label}
                    </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop: Angled Logo Background */}
        <div className="hidden md:block absolute left-0 top-0 h-full w-64">
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
        
        {/* Desktop: Spacer for the logo area */}
        <div className="hidden md:block w-64 flex-shrink-0"></div>

        {/* Mobile: Centered Logo */}
        <div className="md:hidden flex-1 flex justify-center">
             <Logo className="h-[40px] w-auto" />
        </div>

        {/* Desktop: Navigation */}
        <nav className="hidden md:flex flex-grow items-center justify-center gap-8 lg:gap-12 text-lg font-medium relative">
          {navLinks.map((link, index) => (
             <Link key={link.href} href={link.href} className={`transition-colors hover:text-primary text-foreground/60 ${index === 0 ? 'text-primary font-bold' : ''}`}>
                {link.label}
            </Link>
          ))}
          {/* Yellow accent line */}
          <div className="absolute -bottom-9 h-1 w-full">
             <div className="h-full w-20 bg-yellow-400 mx-auto"></div>
          </div>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-1 md:gap-4">
          {/* Search Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon">
                <Search className="h-7 w-7 md:h-10 md:w-10 text-foreground/60" />
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
            className="bg-gradient-to-r from-green-500 to-yellow-400 text-white font-bold rounded-md flex items-center justify-center gap-2 hover:from-green-600 hover:to-yellow-500 shadow-lg px-2 md:px-12 py-2 md:py-3 h-auto text-xs md:text-lg"
            style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)' }}
          >
            <Heart className="h-5 w-5 hidden md:block" />
            <span className="md:hidden">DONATE</span>
            <span className="hidden md:block">DONATE</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
