import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function About() {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Image Composition */}
          <div className="relative min-h-[500px] hidden lg:flex items-center justify-center">
            {/* Background Image */}
            <Image 
              src="/sec.jpeg" 
              alt="Community gathering"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              data-ai-hint="community gathering"
            />
            
            {/* Floating Image */}
            <div className="absolute top-8 left-8 w-[350px] h-[350px] z-10 rounded-lg overflow-hidden shadow-2xl border-4 border-white -ml-[5%]">
              <Image 
                  src="/sec1.jpeg" 
                  alt="Aid distribution" 
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-105"
                  data-ai-hint="aid distribution community" 
              />
            </div>

            {/* Particles */}
            <div className="absolute top-1/4 -right-8 w-24 h-24 bg-primary/30 rounded-full animate-spin-slow filter blur-xl"></div>
            <div className="absolute bottom-16 -left-12 w-32 h-32 bg-accent/30 rounded-full animate-spin-slow animation-delay-4000 filter blur-xl"></div>
            <div className="absolute bottom-1/2 right-1/2 w-16 h-16 bg-primary/20 rounded-full animate-spin-slow animation-delay-2000 filter blur-lg"></div>
            <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-accent/20 rounded-full animate-spin-slow filter blur-lg"></div>
          </div>

           {/* Right Side: Content */}
           <div className="text-left">
            <p className="font-semibold text-lg text-primary mb-2">
                About Our Mission
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground mb-6">
                Ethical, Interest-Free Loans to Uplift Pakistan
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
                Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) designed to uplift those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit, helping create a sustainable social system based on mutual support where every individual can live a life of dignity.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-accent-foreground hover:bg-accent">
                <Link href="/apply">Apply Loan Now <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
