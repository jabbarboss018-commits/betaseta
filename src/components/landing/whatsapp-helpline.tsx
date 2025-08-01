import Image from "next/image";

export function WhatsappHelpline() {
  return (
    <section className="py-20 px-[9%] bg-secondary/20">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold text-primary mb-2">AKHUWAT CAR LOAN</h4>
        <h2 className="text-4xl font-bold font-headline text-foreground mb-12">
          Akhuwat Loan Whatsapp Helpline
        </h2>
        <div className="flex justify-center">
            <Image
                src="/global.jpeg"
                alt="Dr. Amjad Saqib awarded Global Man of the Decade"
                width={800}
                height={545}
                className="rounded-lg shadow-lg"
                data-ai-hint="award ceremony portrait"
            />
        </div>
      </div>
    </section>
  );
}
