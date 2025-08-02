"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { getLoanApplicationByCnic } from '@/lib/firebase';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function Hero() {
  const [cnic, setCnic] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [applicationStatus, setApplicationStatus] = useState<any>(null);
  const [isStatusDialogOpen, setIsStatusDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleStatusCheck = async () => {
    if (!/^\d{13}$/.test(cnic)) {
       toast({
        variant: "destructive",
        title: "Invalid CNIC",
        description: "Please enter a valid 13-digit CNIC number.",
      });
      return;
    }

    setIsLoading(true);
    setIsStatusDialogOpen(true);

    try {
      const application = await getLoanApplicationByCnic(cnic);
      setApplicationStatus(application);
    } catch (error) {
      console.error("Error fetching application status:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not fetch application status. Please try again later.",
      });
      setIsStatusDialogOpen(false);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section
      className="relative text-white py-20 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/hero.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center px-[5%]">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <div className="max-w-[600px]">
            <p className="font-semibold text-lg text-gray-200">Business Loan Service</p>
            <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mt-2 text-white uppercase">
              Akhuwat Loan
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold font-headline leading-tight text-white uppercase" style={{ color: '#ffdd00' }}>
              Apply Today
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold font-headline leading-tight mt-2 text-white uppercase">
              Akhuwat Loan
            </h2>

            <p className="mt-4 text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
              Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) to those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit. 03478787625
            </p>

            <div className="mt-8 flex flex-col items-center lg:items-start space-y-4">
              <Image src="/herosec.webp" alt="Informational banner" width={600} height={150} unoptimized data-ai-hint="banner advertisement" className="rounded-lg" />
              <div className="relative w-full">
                <Input
                  placeholder="1310112345678"
                  className="peer bg-white border-gray-600 text-black placeholder-gray-400 text-center flex-grow transition-colors duration-300
                            peer-placeholder-shown:bg-white
                            peer-placeholder-shown:text-black
                            bg-gray-200 text-white"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
                />
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-normal text-lg hover:from-yellow-500 hover:to-amber-600"
                onClick={handleStatusCheck}
                disabled={isLoading}
              >
                {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'PROCEED →'}
              </Button>
              <p className="text-red-400 text-xs text-center w-full">Please enter a valid 13-digit CNIC number.</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex justify-center items-start pt-20">
          <Button size="lg" asChild className="bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-lg px-10 py-6 rounded-lg shadow-lg hover:from-green-600 hover:to-green-800 transition-all transform hover:scale-105">
            <Link href="/apply">Apply Loan</Link>
          </Button>
        </div>
      </div>
      <AlertDialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Application Status</AlertDialogTitle>
            <AlertDialogDescription>
              {isLoading ? (
                <div className="flex justify-center items-center p-8">
                  <Loader2 className="h-10 w-10 animate-spin" />
                </div>
              ) : applicationStatus ? (
                <div className="space-y-2 text-left">
                  <p><strong>Name:</strong> {applicationStatus.fullName}</p>
                  <p><strong>Loan Type:</strong> {applicationStatus.loanType}</p>
                  <p><strong>Loan Amount:</strong> {parseInt(applicationStatus.loanAmount).toLocaleString()} PKR</p>
                  <p><strong>Status:</strong> <span className={`font-bold ${
                      applicationStatus.status === "Approved" ? "text-green-600" :
                      applicationStatus.status === "Rejected" ? "text-red-600" :
                      "text-yellow-600"
                  }`}>{applicationStatus.status}</span></p>
                   {applicationStatus.adminNotes && <p><strong>Admin Notes:</strong> {applicationStatus.adminNotes}</p>}
                </div>
              ) : (
                <p>No application found for the provided CNIC.</p>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsStatusDialogOpen(false)}>Close</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}