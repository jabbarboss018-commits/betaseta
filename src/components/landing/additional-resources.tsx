import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const threeColumnData = [
  {
    title: "Akhuwat Education",
    description: "Now is the time for Approving your Loan easy and fast with Live chat Akhuwat Loan Helpline Agent.",
    imageSrc: "/zu.jpeg",
    aiHint: "group meeting business"
  },
  {
    title: "Social media",
    description: "The Akhuwat Foundation offers car loans with interest rates beginning at just 1% per annum. With up to 100% on-road financing, they simplify the process of purchasing your dream car.",
    imageSrc: "/zu1.jpeg",
    aiHint: "man smiling portrait"
  },
  {
    title: "Akhuwat Edu UK",
    description: "Assistance for students pursuing education in Pakistan or abroad.",
    imageSrc: "/zu2.jpeg",
    aiHint: "students lab experiment"
  },
];

const loanInfoData = [
    {
        title: "Microfinance Loans",
        amount: "PKR 1,500,000",
        description: "These loans designed for small businesses, including retail, agriculture, and manufacturing. They help entrepreneurs to start or expand their ventures."
    },
    {
        title: "Housing Loans",
        amount: "PKR 2,500,000",
        description: "Akhuwat offers housing loans to individuals who need financial support to build or repair their homes. These loans meant to provide shelter to low-income families."
    },
    {
        title: "Education Loans",
        amount: "PKR 5,000,000",
        description: "These loans offered to students from underprivileged backgrounds who need financial assistance for their education. Covering tuition fees, books, and other educational expenses."
    },
    {
        title: "Healthcare Loans",
        amount: "PKR 7,000,000",
        description: "Akhuwat provides healthcare loans to cover medical treatment and expenses for individuals who cannot afford necessary healthcare services."
    },
    {
        title: "Agricultural Loans",
        amount: "PKR 50,000,000",
        description: "These loans aimed at farmers who need capital for purchasing seeds, fertilizers, or other farming equipment to improve agricultural productivity."
    },
]


export function AdditionalResources() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-[15%] space-y-16">
        
        {/* Three Column Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {threeColumnData.map((item, index) => (
            <Card key={index} className="border-none shadow-none bg-transparent flex flex-col">
              <div className="overflow-hidden mb-4">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                  data-ai-hint={item.aiHint}
                />
              </div>
              <CardContent className="flex flex-col flex-grow p-0">
                <h3 className="text-xl font-bold font-headline text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm flex-grow mb-2">
                  {item.description}
                </p>
                <Link href="#" className="text-primary hover:underline text-sm">Read More</Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Akhuwat Foundation Loan Section */}
        <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold font-headline">Akhuwat Foundation Loan</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">
                If you are considering applying for a loan from the Akhuwat Foundation, you’re making a smart choice. Akhuwat offers interest-free loans (Qarz-e-Hasna) to help individuals meet their financial needs while improving their quality of life. You can apply easily online, with loan options ranging from Rs. 500,000 to Rs. 50 million, all from the comfort of your home.
            </p>
            <div className="flex justify-center">
                <Image 
                    src="/cert.jpeg"
                    alt="Akhuwat Foundation Loan Certificate"
                    width={800}
                    height={560}
                    className="w-full max-w-4xl h-auto object-contain"
                    data-ai-hint="certificate award group photo"
                />
            </div>
            <p className="text-muted-foreground max-w-4xl mx-auto">
                Akhuwat provides five types of loans to suit various needs: Personal Loans, Student Loans, Wedding Loans, Business Loans, and Car Loans. Their application process is simple and user-friendly, allowing you to access ethical, interest-free support.
            </p>
        </div>

        {/* Relief and Disaster Program Section */}
        <div className="text-center space-y-6">
            <div className="flex justify-center">
                <Image 
                    src="/riv.jpeg"
                    alt="Akhuwat Relief and Disaster Management Program"
                    width={800}
                    height={570}
                    className="w-full max-w-4xl h-auto object-contain"
                    data-ai-hint="flood relief boat"
                />
            </div>
            <h2 className="text-3xl font-bold font-headline text-green-700">Akhuwat Relief and Disaster Management Program (ARDMP)</h2>
            <p className="text-muted-foreground max-w-4xl mx-auto">
                Works in times of natural disasters, such as earthquakes, floods, and COVID-19 to provide relief and rehabilitation to the affected people.
            </p>
        </div>

        <div className="space-y-8 text-center">
            <div className="flex justify-center">
                <Image 
                    src="/apply.jpeg"
                    alt="Apply for Akhuwat Loan"
                    width={800}
                    height={514}
                    className="w-full max-w-4xl h-auto object-contain"
                    data-ai-hint="loan application information"
                />
            </div>
            <p className="text-muted-foreground font-bold max-w-4xl mx-auto">
                At Akhuwat, we believe in the power of informed lending. By leveraging data-driven insights, we ensure that every loan—whether for microfinance, education, or healthcare—drives meaningful change and creates lasting opportunities for growth.
            </p>
            <div className="flex justify-center">
                <Image 
                    src="/sch.jpeg"
                    alt="Akhuwat Home Loan Scheme"
                    width={800}
                    height={770}
                    className="w-full max-w-4xl h-auto object-contain"
                    data-ai-hint="home loan advertisement"
                />
            </div>
        </div>
      </div>
      
        {/* Green Section */}
        <div className="mt-16 py-12 bg-green-200/50">
            <div className="container mx-auto px-[15%] space-y-6 text-center">
                {loanInfoData.map((loan, index) => (
                    <div key={index}>
                        <h3 className="text-xl font-bold">{loan.title}</h3>
                        <p className="font-semibold">Maximum Amount: {loan.amount}</p>
                        <p className="text-muted-foreground max-w-2xl mx-auto">{loan.description}</p>
                    </div>
                ))}
                 <p className="text-center font-bold tracking-widest mt-8">PIERRE OMIDYAR</p>
            </div>
        </div>

    </section>
  );
}
