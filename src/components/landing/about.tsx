import Image from "next/image";

export function About() {
  return (
    <section className="py-20">
      <div className="container max-w-5xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline text-foreground">About Akhuwat Foundation</h2>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) designed to uplift those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="Volunteers in a boat during a flood relief operation" 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint="volunteers flood relief" 
                />
            </div>
            <div className="overflow-hidden rounded-lg">
                <Image 
                    src="https://placehold.co/600x400.png" 
                    alt="A volunteer distributing aid to a crowd of people" 
                    width={600} 
                    height={400} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    data-ai-hint="aid distribution community" 
                />
            </div>
        </div>
      </div>
    </section>
  );
}
