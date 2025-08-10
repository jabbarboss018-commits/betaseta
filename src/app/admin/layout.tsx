"use client";

import { useLayoutEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useLayoutEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        router.push("/login");
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return null; // The redirect is handled in the effect
  }
  
  const navLinks = [
    { href: "/admin", label: "Applications" },
    { href: "/admin/whatsapp", label: "Manage WhatsApp" },
  ];

  return (
    <div className="min-h-screen bg-secondary/50">
       <header className="bg-white shadow-sm">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold text-primary">Admin Dashboard</h1>
            <nav className="flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <Button variant="outline" onClick={handleLogout}>Logout</Button>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
