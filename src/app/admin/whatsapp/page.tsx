// src/app/admin/whatsapp/page.tsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { addWhatsappContact, deleteWhatsappContact, getWhatsappContacts } from "@/lib/firebase";
import { uploadImage } from "@/lib/cloudinary";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const formSchema = z.object({
  name: z.string().min(2, "Name is required."),
  title: z.string().min(2, "Title is required."),
  phone: z.string().regex(/^\+?\d{10,14}$/, "Please enter a valid phone number (e.g., +923447622377)."),
  avatar: z.any().refine(files => files?.length === 1, "Avatar image is required."),
});

type WhatsappContact = {
  id: string;
  name: string;
  title: string;
  phone: string;
  avatarUrl: string;
};

function fileToDataUri(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ManageWhatsappPage() {
  const { toast } = useToast();
  const [contacts, setContacts] = useState<WhatsappContact[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", title: "", phone: "" },
  });

  const fetchContacts = async () => {
    setIsLoading(true);
    const fetchedContacts = await getWhatsappContacts();
    setContacts(fetchedContacts as WhatsappContact[]);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const avatarFile = values.avatar[0];
      const avatarDataUri = await fileToDataUri(avatarFile);
      const avatarUrl = await uploadImage(avatarDataUri, 'whatsapp-avatars');

      await addWhatsappContact({
        name: values.name,
        title: values.title,
        phone: values.phone,
        avatarUrl,
      });

      toast({ title: "Success", description: "New contact added." });
      form.reset();
      fetchContacts(); // Refresh the list
    } catch (error) {
      console.error("Failed to add contact:", error);
      toast({ variant: "destructive", title: "Error", description: "Failed to add contact." });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDelete = async (id: string) => {
    try {
      await deleteWhatsappContact(id);
      toast({ title: "Success", description: "Contact deleted." });
      fetchContacts(); // Refresh the list
    } catch (error) {
      console.error("Failed to delete contact:", error);
      toast({ variant: "destructive", title: "Error", description: "Failed to delete contact." });
    }
  };

  return (
    <div className="container mx-auto py-10">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Add New Contact</CardTitle>
              <CardDescription>Add a new contact to the WhatsApp widget.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="title" render={({ field }) => (
                    <FormItem><FormLabel>Title</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="phone" render={({ field }) => (
                    <FormItem><FormLabel>Phone Number</FormLabel><FormControl><Input {...field} placeholder="+923447622377" /></FormControl><FormMessage /></FormItem>
                  )} />
                  <FormField control={form.control} name="avatar" render={({ field: { onChange, value, ...rest } }) => (
                     <FormItem><FormLabel>Avatar</FormLabel><FormControl><Input type="file" accept="image/*" onChange={(e) => onChange(e.target.files)} {...rest} /></FormControl><FormMessage /></FormItem>
                  )} />
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Add Contact
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
        <div className="md:col-span-2">
           <h2 className="text-2xl font-bold mb-4">Current Contacts</h2>
           <div className="space-y-4">
            {isLoading ? (
                Array.from({ length: 2 }).map((_, i) => (
                    <Card key={i} className="flex items-center p-4">
                        <Skeleton className="h-12 w-12 rounded-full" />
                        <div className="ml-4 flex-grow space-y-2">
                           <Skeleton className="h-4 w-1/2" />
                           <Skeleton className="h-4 w-1/3" />
                        </div>
                        <Skeleton className="h-10 w-10" />
                    </Card>
                ))
            ) : contacts.length > 0 ? (
                contacts.map((contact) => (
                    <Card key={contact.id} className="flex items-center p-4">
                        <Image src={contact.avatarUrl} alt={contact.name} width={50} height={50} className="rounded-full" />
                        <div className="ml-4 flex-grow">
                            <p className="font-semibold">{contact.name}</p>
                            <p className="text-sm text-muted-foreground">{contact.title} ({contact.phone})</p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleDelete(contact.id)}>
                            <Trash2 className="h-5 w-5 text-red-500" />
                        </Button>
                    </Card>
                ))
            ) : (
                <p>No contacts found.</p>
            )}
           </div>
        </div>
      </div>
    </div>
  );
}
