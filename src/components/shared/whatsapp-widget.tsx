
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsappIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
)

const teamMembers = [
    {
        name: "Usman Ghani",
        title: "Customer Support",
        avatar: "https://placehold.co/50x50.png",
        phone: "923478787625",
        aiHint: "man portrait"
    },
    {
        name: "Ayesha Khan",
        title: "Loan Specialist",
        avatar: "https://placehold.co/50x50.png",
        phone: "923478787626",
        aiHint: "woman portrait"
    },
    {
        name: "Ali Ahmed",
        title: "Technical Support",
        avatar: "https://placehold.co/50x50.png",
        phone: "923478787627",
        aiHint: "man smiling"
    }
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
