import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/landing/hero';
import { Features } from '@/components/landing/features';
import { About } from '@/components/landing/about';
import { VideoSection } from '@/components/landing/video-section';
import { Services } from '@/components/landing/services';
import { Helpline } from '@/components/landing/helpline';
import { AdditionalInfo } from '@/components/landing/additional-info';
import { HowToApply } from '@/components/landing/how-to-apply';
import { WhatsappHelpline } from '@/components/landing/whatsapp-helpline';
import { AdditionalResources } from '@/components/landing/additional-resources';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <About />
        <VideoSection />
        <Services />
        <Helpline />
        <AdditionalInfo />
        <HowToApply />
        <WhatsappHelpline />
        <AdditionalResources />
      </main>
      <Footer />
    </div>
  );
}
