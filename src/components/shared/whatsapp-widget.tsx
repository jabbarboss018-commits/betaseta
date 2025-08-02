
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M16.75,13.96C17.02,14.24 17.02,14.68 16.82,15.14C16.57,15.68 15.64,16.22 15.2,16.35C14.76,16.48 14.32,16.5 13.97,16.31C13.62,16.11 12.87,15.86 11.93,14.95C10.84,13.87 10.19,12.63 9.97,12.2C9.76,11.78 9.89,11.55 10.08,11.36C10.25,11.19 10.45,11 10.63,10.84C10.8,10.67 10.87,10.55 10.8,10.38C10.73,10.21 10.24,9 10.04,8.53C9.84,8.06 9.64,8.14 9.48,8.14H9.12C8.76,8.14 8.41,8.23 8.14,8.51C7.87,8.78 7.2,9.38 7.2,10.56C7.2,11.74 8.16,12.83 8.33,13.04C8.5,13.25 10.23,15.79 12.75,16.83C15.27,17.9 15.27,17.42 15.78,17.35C16.29,17.28 17.2,16.77 17.44,16.1C17.68,15.43 17.68,14.84 17.58,14.68C17.48,14.52 17.28,14.42 17.01,14.29C16.74,14.16 16.48,14.1 16.35,14.29C16.22,14.49 16.48,14.91 16.75,13.96M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22C13.66,22 15.25,21.54 16.63,20.72L22,22L20.72,16.63C21.54,15.25 22,13.66 22,12A10,10 0 0,0 12,2Z"></path>
    </svg>
)

const teamMembers = [
    {
        name: "Zeeshan ",
        title: "Customer Support",
        avatar: "/profile.png",
        phone: "+92 344 7622377",
        aiHint: "man portrait"
    },
    
];

export function WhatsappWidget() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={`fixed bottom-5 right-5 z-50 transition-all duration-300 ${isOpen ? "opacity-0 scale-90" : "opacity-100 scale-100"}`}>
                <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
                    aria-label="Open WhatsApp Chat"
                >
                    <WhatsappIcon />
                </Button>
            </div>

            <div
                className={`fixed bottom-5 right-5 z-50 w-80 bg-white rounded-lg shadow-2xl transition-all duration-300 ease-in-out transform ${
                    isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
            >
                <header className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <MessageSquare className="w-6 h-6" />
                        <h3 className="font-bold text-lg">Contact Us</h3>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="text-white hover:bg-green-700 h-8 w-8"
                    >
                        <X className="w-5 h-5" />
                        <span className="sr-only">Close Chat</span>
                    </Button>
                </header>
                <main className="p-4 space-y-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
                            <Image
                                src={member.avatar}
                                alt={member.name}
                                width={50}
                                height={50}
                                className="rounded-full"
                                data-ai-hint={member.aiHint}
                            />
                            <div className="flex-1">
                                <p className="font-semibold">{member.name}</p>
                                <p className="text-sm text-gray-500">{member.title}</p>
                            </div>
                            <Link href={`https://wa.me/${member.phone}`} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="bg-green-500 hover:bg-green-600 text-white text-xs">
                                    Chat
                                </Button>
                            </Link>
                        </div>
                    ))}
                </main>
            </div>
        </>
    );
}
