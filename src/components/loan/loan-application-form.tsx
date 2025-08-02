"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { addLoanApplication } from "@/lib/firebase";
import { uploadSelfie } from "@/lib/cloudinary";

const formSchema = z.object({
  selfie: z.instanceof(FileList).refine(files => files?.length === 1, "Selfie is required."),
  fullName: z.string().min(2, { message: "Full name is required." }),
  cnic: z.string().regex(/^\d{13}$/, { message: "Please enter a valid 13-digit CNIC number." }),
  mobileNumber: z.string().regex(/^\d{11,12}$/, { message: "Please enter a valid phone number." }),
  loanType: z.string({ required_error: "Please select a loan type." }),
  loanAmount: z.string({ required_error: "Please select a loan amount." }),
});

const loanOptions = [
    { value: "50000", label: "50,000 PKR", period: "12 Months", fee: 4400 },
    { value: "100000", label: "100,000 PKR", period: "12 Months", fee: 4400 },
    { value: "200000", label: "200,000 PKR", period: "24 Months", fee: 4400 },
    { value: "300000", label: "300,000 PKR", period: "24 Months", fee: 4400 },
    { value: "400000", label: "400,000 PKR", period: "36 Months", fee: 4400 },
    { value: "500000", label: "500,000 PKR", period: "36 Months", fee: 4400 },
    { value: "1000000", label: "1,000,000 PKR", period: "48 Months", fee: 5600 },
    { value: "2000000", label: "2,000,000 PKR", period: "48 Months", fee: 5600 },
    { value: "3000000", label: "3,000,000 PKR", period: "60 Months", fee: 5600 },
    { value: "4000000", label: "4,000,000 PKR", period: "60 Months", fee: 5600 },
    { value: "5000000", label: "5,000,000 PKR", period: "60 Months", fee: 5600 },
];

function fileToDataUri(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

export function LoanApplicationForm() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLoan, setSelectedLoan] = useState<{ value: string; label: string; period: string; fee: number; } | null>(null);
  const [monthlyInstallment, setMonthlyInstallment] = useState(0);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      cnic: "",
      mobileNumber: "",
    },
  });

  const loanAmount = form.watch("loanAmount");

  useEffect(() => {
    if (loanAmount) {
      const loanData = loanOptions.find(option => option.value === loanAmount);
      setSelectedLoan(loanData || null);
      if (loanData) {
        const amount = parseInt(loanData.value);
        const periodInMonths = parseInt(loanData.period.split(" ")[0]);
        setMonthlyInstallment(amount / periodInMonths);
      } else {
        setMonthlyInstallment(0);
      }
    } else {
      setSelectedLoan(null);
      setMonthlyInstallment(0);
    }
  }, [loanAmount]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      const selfieFile = values.selfie[0];
      const selfieDataUri = await fileToDataUri(selfieFile);
      const selfieUrl = await uploadSelfie(selfieDataUri);

      await addLoanApplication({
        fullName: values.fullName,
        cnic: values.cnic,
        mobileNumber: values.mobileNumber,
        loanType: values.loanType,
        loanAmount: values.loanAmount,
        selfieUrl,
        loanPeriod: selectedLoan?.period,
        registrationFee: selectedLoan?.fee,
        monthlyInstallment: monthlyInstallment.toFixed(2),
        submittedAt: new Date(),
        status: "Pending",
        adminNotes: "",
      });
      
      toast({
        title: "Application Submitted Successfully!",
        description: "We have received your loan application. We will get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error adding document: ", error);
      toast({
        variant: "destructive",
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 max-w-lg mx-auto text-left">
        <FormField
            control={form.control}
            name="selfie"
            render={({ field: { onChange, value, ...rest } }) => (
                <FormItem>
                <FormLabel>Upload Selfie*</FormLabel>
                <FormControl>
                    <Input 
                        type="file" 
                        accept="image/*"
                        onChange={(e) => {
                            onChange(e.target.files)
                        }}
                        className="bg-white" 
                        {...rest}
                    />
                </FormControl>
                <FormMessage />
                <p className="text-xs text-muted-foreground">(Max image size: 1MB)</p>
                </FormItem>
            )}
        />
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name*</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cnic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>CNIC Number*</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number*</FormLabel>
              <FormControl>
                <Input className="bg-white" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
            control={form.control}
            name="loanType"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Loan Type*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="bg-white">
                        <SelectValue placeholder="--select--" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        <SelectItem value="apna-ghar">Apna Ghar Apni Chhat</SelectItem>
                        <SelectItem value="personal">Personal Loan</SelectItem>
                        <SelectItem value="home">Home Loan</SelectItem>
                        <SelectItem value="business">Business Loan</SelectItem>
                        <SelectItem value="wedding">Wedding Loan</SelectItem>
                        <SelectItem value="car">Car Loan</SelectItem>
                        <SelectItem value="student">Student Loan</SelectItem>
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="loanAmount"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Loan Amount*</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                    <SelectTrigger className="bg-white">
                        <SelectValue placeholder="--select--" />
                    </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                        {loanOptions.map(option => (
                            <SelectItem key={option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <FormMessage />
                </FormItem>
            )}
        />
        <FormItem>
            <FormLabel>Loan Period*</FormLabel>
            <FormControl>
                <Input readOnly value={selectedLoan?.period || ""} className="bg-gray-200" />
            </FormControl>
        </FormItem>
        <FormItem>
            <FormLabel>Registration Fees*</FormLabel>
            <FormControl>
                <Input readOnly value={selectedLoan ? `${selectedLoan.fee.toLocaleString()} PKR` : ""} className="bg-gray-200" />
            </FormControl>
        </FormItem>
        <FormItem>
            <FormLabel>Monthly Installment*</FormLabel>
            <FormControl>
                <Input readOnly value={monthlyInstallment ? `≈ ${Math.round(monthlyInstallment).toLocaleString()} PKR` : ""} className="bg-gray-200" />
            </FormControl>
        </FormItem>
       
        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 text-lg py-6" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          SUBMIT APPLICATION
        </Button>
      </form>
    </Form>
  );
}
