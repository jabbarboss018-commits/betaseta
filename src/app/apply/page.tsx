import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoanApplicationForm } from "@/components/loan/loan-application-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/50">
      <Header />
      <main className="flex-grow py-12">
        <div className="container max-w-4xl">
          <Card className="shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-headline">Loan Application Form</CardTitle>
              <CardDescription>Please fill out the form below to apply for a loan.</CardDescription>
            </CardHeader>
            <CardContent>
              <LoanApplicationForm />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
