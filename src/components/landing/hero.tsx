import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative text-white py-20 lg:py-32 overflow-hidden">
      <Image
        src="/hero-bg.png"
        alt="Akhuwat Foundation beneficiary"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
        data-ai-hint="man portrait abstract"
      />
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left">
          <p className="font-semibold text-lg text-gray-300">Business Loan Service</p>
          <h1 className="text-4xl md:text-6xl font-bold font-headline leading-tight mt-2 text-white">
            AKHUWAT LOAN
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight mt-2 text-white">APPLY TODAY</h2>
          <h2 className="text-4xl md:text-6xl font-bold font-headline leading-tight mt-2 text-white">AKHUWAT LOAN</h2>

          <p className="mt-4 text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
            Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit. 03478787625
          </p>
          <div className="mt-8 flex justify-center lg:justify-start">
             <Button size="lg" asChild className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
              <Link href="/apply">Apply Loan</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white w-full max-w-md">
                <CardContent className="p-6">
                    <div className='bg-yellow-400 p-4 rounded-md text-center text-black'>
                        <h3 className='font-bold text-lg'>یجان صرف اخوت اون چیک کریں</h3>
                        <p className='font-semibold'>اخوت لون کی آفیشل ویبسائٹ</p>
                        <p className='font-bold mt-2'>http://akhuwatloan.pk</p>
                    </div>
                    <form className="mt-6 space-y-4">
                        <Input 
                            placeholder="1310167189479" 
                            className="bg-gray-700 border-gray-600 placeholder-gray-400 text-white text-center" 
                        />
                        <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                            PROCEED →
                        </Button>
                        <p className="text-red-500 text-xs text-center">Please enter a valid 13-digit CNIC number.</p>
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
