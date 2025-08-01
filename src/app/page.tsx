import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { LoanProcess } from '@/components/landing/loan-process';
import { SuccessStories } from '@/components/landing/success-stories';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <LoanProcess />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  );
}
