import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Application",
    description: "Submit your loan application through our simple online form.",
  },
  {
    title: "Verification",
    description: "Our team will verify your details and assess your needs.",
  },
  {
    title: "Approval",
    description: "Once approved, you will be notified about the loan disbursement.",
  },
  {
    title: "Disbursement",
    description: "Receive your interest-free loan and start your journey.",
  },
];

export function LoanProcess() {
  return (
    <section id="process" className="py-20 bg-secondary/50">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">Our Loan Process</h2>
          <p className="text-lg text-muted-foreground mt-2">A simple and transparent process to get you started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit">
                    <CheckCircle className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline mt-4 text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
