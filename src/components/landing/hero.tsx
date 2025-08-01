import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="A vibrant community gathering, symbolizing support and unity."
        fill
        className="absolute inset-0 z-0 object-cover brightness-50"
        priority
        data-ai-hint="community support"
      />
      <div className="relative z-10 text-center p-4">
        <h1 className="text-5xl md:text-7xl font-bold font-headline leading-tight text-white drop-shadow-lg">
          Interest-Free Microfinance
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-white/90 drop-shadow-md">
          Empowering communities and alleviating poverty through Qard-e-Hasan, one loan at a time.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Link href="/apply">Apply for Loan</Link>
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/#process">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
