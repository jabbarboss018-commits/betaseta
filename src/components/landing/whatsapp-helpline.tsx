
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function WhatsappHelpline() {
  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="flex justify-center">
            <Image
              src="/global.jpeg"
              alt="Dr. Amjad Saqib awarded Global Man of the Decade"
              width={600}
              height={400}
              className="rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-ai-hint="award ceremony portrait"
            />
          </div>
          {/* Content Column */}
          <div className="text-left">
            <p className="font-semibold text-lg text-primary mb-2">
              AKHUWAT CAR LOAN & HELPLINE
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground mb-6">
              Get Support Instantly via WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're interested in our interest-free car loan program or need assistance with your application, our dedicated team is just a message away. Connect with us on WhatsApp for quick, reliable support and get answers to all your questions in real-time. We're here to help you every step of the way.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-accent-foreground hover:bg-accent">
                <Link href="/apply">Apply For Loan <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
