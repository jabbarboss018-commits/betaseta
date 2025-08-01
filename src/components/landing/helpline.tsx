import Image from "next/image";

export function Helpline() {
  return (
    <section className="py-20 px-[5%] bg-secondary/30">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold font-headline text-primary mb-12">
          AKHUWAT LOAN HELPLINE NUMBER 2025
        </h2>
        <div className="flex justify-center mb-12">
            <Image
                src="https://placehold.co/670x400.png"
                alt="Akhuwat College for Women"
                width={670}
                height={400}
                className="rounded-lg shadow-lg"
                data-ai-hint="female students education"
            />
        </div>
        <div className="max-w-4xl mx-auto text-left space-y-4">
            <h3 className="text-2xl font-bold font-headline text-foreground">Akhuwat Loan</h3>
            <p className="text-muted-foreground">
             If you are considering applying for a loan from the Akhuwat Foundation, you're making a smart choice. Akhuwat offers interest-free loans (Qarz-e-Hasna) to help individuals meet their financial needs while improving their quality of life. You can apply easily online, with loan options ranging from Rs. 500,000 to Rs. 50 million, all from the comfort of your home.
            </p>
            <p className="text-xl font-bold text-primary">
                Akhuwat Loan Helpline 03478787625
            </p>
        </div>
      </div>
    </section>
  );
}
