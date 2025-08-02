
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function AdditionalInfo() {
  return (
    <>
      {/* Section 1: Apply for Loan */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="flex justify-center">
              <Image
                src="/loan.jpeg"
                alt="Business loan consultation"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-ai-hint="business meeting agreement"
              />
            </div>
            {/* Content Column */}
            <div className="text-left">
              <p className="font-semibold text-lg text-primary mb-2">
                Empower Your Future
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground mb-6">
                Take the First Step Towards Financial Independence
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                The Akhuwat Loan Scheme is a cornerstone of our mission to foster economic and social prosperity in Pakistan. By providing interest-free loans, we empower small business owners, artisans, and farmers to achieve their dreams. Our community-based lending model builds trust and promotes a culture of mutual support.
              </p>
              <Button asChild size="lg" variant="cta" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-accent-foreground hover:bg-accent">
                <Link href="/apply">Apply Loan Now <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Apply for Admission */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content Column */}
            <div className="text-left">
              <p className="font-semibold text-lg text-primary mb-2">
                Education for All
              </p>
              <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight text-foreground mb-6">
                Unlock Your Potential with Quality Education
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Akhuwat believes in the transformative power of education. Our student loan programs and educational institutions are designed to make learning accessible and affordable. We cover essential costs like tuition, books, and materials, enabling students to focus on their studies and build a brighter future for themselves and their communities.
              </p>
              <Button asChild size="lg" variant="cta" className="bg-accent text-accent-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-primary-foreground hover:bg-primary">
                <Link href="#">Apply for Admission <ChevronRight className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
            {/* Image Column */}
            <div className="flex justify-center">
              <Image
                src="/student.jpeg"
                alt="Students in a classroom"
                width={600}
                height={400}
                className="rounded-lg shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                data-ai-hint="group photo donation drive"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
