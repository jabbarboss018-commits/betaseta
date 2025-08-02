"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';
import { getLoanApplicationByCnic } from '@/lib/firebase';
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Loader2, Facebook, Twitter, Instagram, Youtube, ChevronRight, PlayCircle } from 'lucide-react';
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
    setApplicationStatus(null); // Reset previous status

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
    } finally {
      setIsLoading(false);
    }
  };
  
  const openDialog = () => {
    // Reset state when opening dialog
    setIsStatusDialogOpen(true);
    setCnic('');
    setApplicationStatus(null);
    setIsLoading(false);
  }


  return (
    <section className="relative bg-secondary/30 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="flex items-center">
             {/* Social Icons */}
            <div className="hidden sm:flex flex-col items-center space-y-4 mr-6 text-muted-foreground">
                <div className="w-px h-8 bg-border"></div>
                <Link href="#" aria-label="Facebook"><Facebook className="h-5 w-5 hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="Twitter"><Twitter className="h-5 w-5 hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="Instagram"><Instagram className="h-5 w-5 hover:text-primary transition-colors" /></Link>
                <Link href="#" aria-label="Youtube"><Youtube className="h-5 w-5 hover:text-primary transition-colors" /></Link>
                <div className="w-px h-8 bg-border"></div>
            </div>

            <div className="text-center lg:text-left">
                <p className="font-semibold text-lg text-primary flex items-center gap-2 justify-center lg:justify-start">
                    <span className="w-8 h-px bg-primary"></span>
                    Business Loan Service
                </p>
                <h1 className="text-4xl md:text-5xl font-bold font-headline leading-tight mt-4 text-foreground">
                    Personal Loans To<br/> Fulfill Your Dreams
                </h1>

                <p className="mt-6 text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                Akhuwat Foundation stands out as a unique loan provider in Pakistan, offering ethical, interest-free loans (Qarz-e-Hasna) to those in need. Unlike conventional banks, Akhuwat prioritizes social welfare over profit.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <Button asChild size="lg" variant="cta" className="bg-primary text-primary-foreground font-bold text-lg px-8 py-6 rounded-lg shadow-lg hover:text-accent-foreground hover:bg-accent w-full sm:w-auto">
                        <Link href="/apply">Apply For Loan <ChevronRight className="ml-2 h-5 w-5" /></Link>
                    </Button>
                     <AlertDialog open={isStatusDialogOpen} onOpenChange={setIsStatusDialogOpen}>
                        <AlertDialogTrigger asChild>
                            <Button size="lg" variant="cta" className="bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground text-lg font-bold w-full sm:w-auto" onClick={openDialog}>
                                <PlayCircle className="mr-2 h-7 w-7"/>
                                Check Status
                            </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent className="sm:max-w-md p-0 overflow-hidden">
                             <div className="relative">
                                <Image src="/herosec.webp" alt="Check your loan status" width={600} height={150} className="w-full h-auto" data-ai-hint="banner advertisement" />
                             </div>
                            <div className="p-6 space-y-4">
                                <AlertDialogHeader className="text-center space-y-2">
                                    <AlertDialogTitle className="text-2xl font-headline">Check Application Status</AlertDialogTitle>
                                    <AlertDialogDescription>
                                    Enter your 13-digit CNIC number to check the status of your loan application.
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                
                                {isLoading ? (
                                    <div className="flex justify-center items-center p-8">
                                    <Loader2 className="h-10 w-10 animate-spin text-primary" />
                                    </div>
                                ) : applicationStatus ? (
                                    <div className="space-y-3 text-left bg-green-50 border border-green-200 p-4 rounded-lg">
                                        <p><strong>Name:</strong> {applicationStatus.fullName}</p>
                                        <p><strong>Loan Type:</strong> {applicationStatus.loanType}</p>
                                        <p><strong>Amount:</strong> {parseInt(applicationStatus.loanAmount).toLocaleString()} PKR</p>
                                        <p><strong>Status:</strong> <span className={`font-bold ${
                                            applicationStatus.status === "Approved" ? "text-green-600" :
                                            applicationStatus.status === "Rejected" ? "text-red-600" :
                                            "text-yellow-600"
                                        }`}>{applicationStatus.status}</span></p>
                                        {applicationStatus.adminNotes && <p><strong>Notes:</strong> {applicationStatus.adminNotes}</p>}
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <Input
                                            placeholder="Enter 13-digit CNIC without dashes"
                                            className="bg-gray-100 border-gray-300 text-black placeholder-gray-500 text-center h-12 text-lg"
                                            value={cnic}
                                            onChange={(e) => setCnic(e.target.value)}
                                        />
                                        <Button 
                                            className="w-full bg-primary text-primary-foreground font-bold text-lg h-12 hover:bg-primary/90"
                                            onClick={handleStatusCheck}
                                            disabled={isLoading}
                                        >
                                            PROCEED
                                        </Button>
                                        <p className="text-red-500 text-xs text-center">Please enter a valid 13-digit CNIC number.</p>
                                    </div>
                                )}
                                 <AlertDialogFooter className="mt-4">
                                    <AlertDialogAction className="w-full sm:w-auto" onClick={() => setIsStatusDialogOpen(false)}>Close</AlertDialogAction>
                                </AlertDialogFooter>
                            </div>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="relative hidden lg:flex justify-center items-center h-[500px]">
            <div className="absolute w-[500px] h-[500px] bg-primary/80 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute w-[480px] h-[480px] rounded-full border-4 border-dashed border-primary/20 animate-spin-slow"></div>

            <div className="relative w-[450px] h-[450px] rounded-full overflow-hidden shadow-2xl">
                 <Image 
                    src="/hero.jpeg" 
                    alt="Happy family discussing with a financial advisor"
                    layout="fill"
                    objectFit="cover"
                    className="scale-110"
                    data-ai-hint="family meeting advisor"
                 />
            </div>
             <div className="absolute top-10 right-0 w-16 h-16 bg-accent rounded-full shadow-lg"></div>
             <div className="absolute bottom-10 left-0 w-10 h-10 bg-primary rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
