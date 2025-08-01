import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        {/* The About section is temporarily removed to focus on the hero section styling as requested */}
        {/* <About /> */}
      </main>
      <Footer />
    </div>
  );
}
