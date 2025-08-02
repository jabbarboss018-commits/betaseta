import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LoanApplicationForm } from "@/components/loan/loan-application-form";

export default function ApplyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow py-12 lg:py-20">
        <div className="container max-w-5xl text-center">
          <h1 className="text-3xl lg:text-4xl font-bold font-headline text-primary">How to Apply for an Akhuwat Loan Online</h1>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Fill out the required details carefully, providing accurate information about yourself and your financial needs. Akhuwat offers rapid funding, enabling you to receive your loan on the same day you apply. Additionally, you can choose your preferred funding date, giving you full control over the process.
          </p>

          <div className="mt-12 bg-gray-100/80 p-6 sm:p-8 lg:p-12 rounded-lg">
              <h2 className="text-2xl lg:text-3xl font-bold font-headline">APPLY FOR LOAN</h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                To apply for a loan, please fill out the form with the required details. Ensure that all information is accurate to avoid any delays in processing your application.
              </p>
              <div className="mt-8">
                <LoanApplicationForm />
              </div>
          </div>
            <p className="mt-8 text-red-600 text-sm text-center max-w-4xl mx-auto">
                Note: After filling out the form, it is mandatory to send a copy of your utility bill, Selfie and the front and back of your CNIC to our WhatsApp number using the same name you provided in the form. The registration fee for loans between one lakh and five lakhs is 4,400 rupees. For loans over five lakhs, the fee is 5,600 rupees. You will need to pay the file registration fee first. Once the fee is paid, your loan will be approved in approximately 2 hours.
            </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
