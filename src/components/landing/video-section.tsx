import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Content */}
          <div className="text-left">
            <p className="font-semibold text-lg text-primary mb-2">
                A Message From Our Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground mb-6">
                The Vision Behind Akhuwat
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
                Hear from Dr. Muhammad Amjad Saqib, the founder and chairman of Akhuwat, as he shares the vision and impact of the foundation.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
                His message encapsulates our core mission: to build a poverty-free society on the principles of compassion and mutual support. Discover the story behind our interest-free microfinance model and how it's empowering millions across Pakistan.
            </p>
            <Button asChild size="lg" variant="cta" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-accent-foreground hover:bg-accent">
                <Link href="#contact">Learn More <ChevronRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>

          {/* Right Side: Video Player */}
          <div className="aspect-w-16 aspect-h-9">
            <video
              controls
              className="w-full h-full rounded-lg shadow-2xl"
              src="https://akhuwatloan.pk/wp-content/uploads/2025/06/WhatsApp-Video-2025-06-13-at-3.30.47-PM.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
