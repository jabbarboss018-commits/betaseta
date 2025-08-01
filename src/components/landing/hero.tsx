import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden" style={{ backgroundImage: 'url(/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-[5%]">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <p className="font-semibold text-lg text-gray-200">Business Loan Service</p>
          <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mt-2 text-white uppercase">
            Akhuwat Loan
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight text-white uppercase" style={{color: '#ffdd00'}}>
            Apply Today
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight mt-2 text-white uppercase">
            Akhuwat Loan
          </h2>

          <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
            Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit. 03478787625
          </p>

          <div className="mt-8 flex flex-col items-center lg:items-start space-y-4 max-w-md">
            <Image src="/herosec.jpg" alt="Informational banner" width={500} height={150} data-ai-hint="banner advertisement" className="rounded-lg"/>
            <div className="flex w-full">
              <Input 
                placeholder="1310167189479" 
                className="bg-gray-700/80 border-gray-600 placeholder-gray-400 text-white text-center flex-grow" 
              />
            </div>
            <Button className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-lg hover:from-yellow-500 hover:to-amber-600">
                PROCEED →
            </Button>
            <p className="text-red-400 text-xs text-center w-full">Please enter a valid 13-digit CNIC number.</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center items-start pt-20">
            <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-10 py-6 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all transform hover:scale-105">
              <Link href="/apply">Apply Loan</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
