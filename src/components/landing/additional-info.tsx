"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Progress } from "@/components/ui/progress";

export function AdditionalInfo() {
    const [count, setCount] = useState(0);
    const [progress, setProgress] = useState(10);
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const end = 78998;
        if (count === end) return;

        const duration = 2000; // 2 seconds
        const startTime = Date.now();

        const animateCount = () => {
            const now = Date.now();
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            const currentCount = Math.floor(progress * end);
            setCount(currentCount);

            if (progress < 1) {
                requestAnimationFrame(animateCount);
            }
        };

        requestAnimationFrame(animateCount);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    const timer = setTimeout(() => setProgress(99), 500);
                    // Disconnect the observer once the animation is triggered
                    observer.disconnect();
                    return () => clearTimeout(timer);
                }
            },
            { threshold: 0.5 }
        );

        if (progressRef.current) {
            observer.observe(progressRef.current);
        }

        return () => {
            if (progressRef.current) {
                observer.unobserve(progressRef.current);
            }
        };
    }, []);

  return (
    <section className="py-20 px-[9%] bg-white">
      <div className="container mx-auto space-y-12">
        
        {/* First Image and Text Block */}
        <div className="text-center">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/akhuwat1.jpeg"
                    alt="Akhuwat Annual Newsletter"
                    width={1200}
                    height={580}
                    className="w-full h-auto object-contain"
                    data-ai-hint="newsletter cover"
                />
            </div>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                Akhuwat Loan Scheme 2025 program is a key part of the foundation's work to create positive change in Pakistan's economy and society. This program offers interest-free loans, which is rare in the microfinance industry worldwide. It aims to help people like small business owners, craftsmen, farmers, and women by giving them the money they need to achieve their goals and improve their lives.
            </p>
        </div>

        {/* Second Image and Text Block */}
        <div className="text-center">
             <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/girl.jpeg"
                    alt="Akhuwat College for Women, Chakwal"
                    width={1200}
                    height={1148}
                    className="w-full h-auto object-contain"
                    data-ai-hint="college students"
                />
            </div>
             <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                The Akhuwat Loan is different because it has no interest and is easy to get. The foundation relies on trust and community involvement, working with local leaders and groups to give out loans. This model makes the loans more than just money transactions; they also build trust and support in the community, promoting a culture of giving back.
            </p>
        </div>

        {/* How to Apply Section */}
        <div className="text-center">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/loan.jpeg"
                    alt="How to apply for loan"
                    width={1200}
                    height={485}
                    className="w-full h-auto object-contain"
                    data-ai-hint="business meeting agreement"
                />
            </div>
            <h3 className="text-2xl font-bold font-headline text-foreground mb-4">How to Apply for Loan?</h3>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                Contact the Akhuwat Head Office Contact Number, when you make a call to Akhuwat Helpline Number then officials will guide you or contact on whatsapp given button.
            </p>
        </div>

        {/* Story Section */}
        <div className="text-center">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/story.jpeg"
                    alt="The story of a relentless mother"
                    width={1200}
                    height={390}
                    className="w-full h-auto object-contain"
                    data-ai-hint="woman weaving empowering girls"
                />
            </div>
            <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Akhuwat Student Loan</h3>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                The Akhuwat Foundation offers student loan to make education more affordable and accessible. This program helps cover important costs like tuition fees, books, and study materials, making it easier for students to focus on their studies.
            </p>
        </div>
        
        {/* Adaptable Section */}
        <div className="text-center">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/student.jpeg"
                    alt="Winter clothing donation drive"
                    width={1200}
                    height={605}
                    className="w-full h-auto object-contain"
                    data-ai-hint="group photo donation drive"
                />
            </div>
            <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Adaptable and Convenient</h3>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                To develop and sustain a social system based on mutual support where each individual lives a life full of respect and dignity.
            </p>
        </div>

        {/* Contact and Counter Section */}
        <div className="text-center">
            <div className="flex justify-center mb-8">
                <Image
                    src="/dr.jpeg"
                    alt="Dr. Muhammad Amjad Saqib"
                    width={400}
                    height={270}
                    className="h-auto"
                    data-ai-hint="portrait man suit"
                />
            </div>
            <p className="text-2xl font-bold text-green-700">
                Akhuwat Loan Contact Number 03478787625
            </p>
            <div className="text-6xl font-bold text-blue-600 my-4">
                {count.toLocaleString()}
            </div>
            <p className="text-lg text-muted-foreground">Total Loan Approved Applications</p>
        </div>

        {/* Progress Bar Section */}
        <div ref={progressRef} id="progress-bar-section">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/lab.jpeg"
                    alt="Man working in a lab"
                    width={1200}
                    height={730}
                    className="w-full h-auto object-contain"
                    data-ai-hint="man lab science"
                />
            </div>
            <div className="px-[15%]">
                <p className="text-sm italic text-blue-600 mb-2 text-left">Peoples Trust on Akhuwat Foundation Loan</p>
                <div className="relative w-full h-2.5">
                    <Progress value={progress} className="w-full h-2.5" />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-bold text-white">
                        {Math.round(progress)}%
                    </span>
                </div>
            </div>
            <div className="text-center mt-8">
                <h3 className="text-2xl font-bold font-headline text-foreground mb-4">Akhuwat Loan</h3>
                <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                    Progressing from a historical and philosophical discourse towards a pragmatic model of poverty alleviation, Akhuwat was founded by Dr. Amjad Saqib in 2001. Prior to establishing Akhuwat, he served in the Civil Services of Pakistan in the District Management Group (DMG).
                </p>
            </div>
        </div>

        {/* Need a Loan Section */}
        <div className="text-center">
            <h3 className="text-2xl font-bold font-headline text-foreground mb-4">While serving as the General Manager</h3>
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/need.jpeg"
                    alt="Need a loan for a house"
                    width={1200}
                    height={650}
                    className="w-full h-auto object-contain"
                    data-ai-hint="house loan advertisement"
                />
            </div>
            <p className="text-lg text-muted-foreground max-w-5xl mx-auto">
                While serving as the General Manager of the Punjab Rural Support Program (PRSP) he had witnessed the devastating impact of poverty and was committed to dedicate the rest of his life to alleviate the suffering of the poor. He was took his friends to a visit to a village, to study the impact of the PRSP. Dr. Kambar Shame and he had a conversation with a local woman, inquiring what has been took from the PRSP.
            </p>
        </div>
        
        {/* Dr. Saqib Section */}
        <div className="text-center">
            <div className="flex justify-center mb-8 px-[15%]">
                <Image
                    src="/saqib.jpeg"
                    alt="Dr. Muhammad Amjad Saqib"
                    width={1200}
                    height={730}
                    className="w-full h-auto object-contain"
                    data-ai-hint="portrait man green background"
                />
            </div>
            <h3 className="text-2xl font-bold font-headline text-foreground mb-2">How to Apply for an Akhuwat Loan</h3>
            <h4 className="text-xl font-semibold text-primary mb-4">Types of Loans Offered:</h4>
            <ul className="list-disc list-inside text-lg text-muted-foreground max-w-md mx-auto text-left space-y-1">
                <li>Business Loans</li>
                <li>Education Loans</li>
                <li>Wedding Loans</li>
                <li>Health Loans</li>
                <li>Emergency Loans</li>
                <li>Apna Ghar Apna Chhat</li>
                <li>Personal Loan</li>
                <li>Car Loan</li>
                <li>Student Loan</li>
                <li>House Loan</li>
            </ul>
        </div>
      </div>
    </section>
  );
}
