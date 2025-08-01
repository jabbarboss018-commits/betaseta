import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { About } from '@/components/landing/about';
import { VideoSection } from '@/components/landing/video-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <VideoSection />
      </main>
      <Footer />
    </div>
  );
}
