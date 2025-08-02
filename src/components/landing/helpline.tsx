
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Helpline() {
  return (
    <section className="relative py-20 px-5% bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-full animate-spin-slow filter blur-md"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full animate-spin-slow animation-delay-2000 filter blur-lg"></div>
        <div className="absolute bottom-1/2 left-1/3 w-20 h-20 bg-accent/20 rounded-full animate-spin-slow animation-delay-4000 filter blur-xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline text-primary">
            AKHUWAT LOAN HELPLINE NUMBER 2025
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Content Card */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl rounded-lg border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold font-headline text-foreground">Akhuwat Loan Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you are considering applying for a loan from the Akhuwat Foundation, you're making a smart choice. Akhuwat offers interest-free loans (Qarz-e-Hasna) to help individuals meet their financial needs while improving their quality of life. You can apply easily online, with loan options ranging from Rs. 500,000 to Rs. 50 million, all from the comfort of your home.
              </p>
              <div className="bg-primary text-primary-foreground p-4 rounded-md text-center">
                <p className="text-lg font-semibold">Contact our Helpline</p>
                <p className="text-2xl font-bold tracking-wider">
                  0347-8787625
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Right Side: Image */}
          <div className="flex justify-center items-center">
            <Image
              src="/help.jpeg"
              alt="Akhuwat College for Women"
              width={686}
              height={386}
              className="rounded-lg shadow-2xl object-cover w-full h-full"
              data-ai-hint="female students education"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
