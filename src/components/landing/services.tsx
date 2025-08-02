import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const servicesData = [
  {
    title: "Akhuwat Business Loan",
    description: "Applying for a business loan with Akhuwat is simple and can be done entirely online from the comfort of your office. Akhuwat’s business loans are designed to meet short-term financial needs, with quick approvals typically granted within hours. The application process requires minimal documentation, ensuring a smooth and hassle-free experience, allowing you to focus on your business without delays.",
    imageSrc: "/ses.jpeg",
    aiHint: "charity clothes donation"
  },
  {
    title: "Akhuwat Home Loan",
    description: "The Akhuwat Foundation in Pakistan offers home loans for purchasing, building, or renovating residential properties. If you require fast financial assistance, the Akhuwat Home Loan provides a streamlined application process, ensuring you receive the funds you need without any delays. This service is perfect for individuals seeking urgent financial support in Pakistan, allowing you to secure the necessary funds quickly and efficiently for your housing needs.",
    imageSrc: "/ses1.jpeg",
aiHint: "happy family home"
  },
  {
    title: "Akhuwat Personal Loan",
    description: "The Akhuwat Foundation provides personal loans of up to Rs. 2.5 million, with the loan amount determined by factors such as your income, debt-to-income ratio, credit score, and employment status. To qualify, you must be between the ages of 24 and 60. You can easily track the status of your loan application through the Akhuwat Foundation’s website, providing you with real-time updates and transparency throughout the process.",
    imageSrc: "/ses2.jpeg",
    aiHint: "community meeting"
  },
];

export function Services() {
  return (
    <section className="py-20 px-[5%] relative overflow-hidden bg-secondary/20">
       <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-1/4 -left-24 w-48 h-48 bg-primary/10 rounded-full animate-spin-slow filter blur-xl"></div>
        <div className="absolute bottom-1/4 -right-24 w-48 h-48 bg-accent/10 rounded-full animate-spin-slow animation-delay-4000 filter blur-xl"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-6xl font-bold font-headline text-foreground">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <Card key={index} className="flex flex-col overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-white">
              <CardHeader className="p-0">
                <Image
                  src={service.imageSrc}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={service.aiHint}
                />
              </CardHeader>
              <CardContent className="flex flex-col flex-grow p-6">
                <h3 className="text-xl font-bold font-headline text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground flex-grow">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
