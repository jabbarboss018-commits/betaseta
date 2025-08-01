import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Quote } from "lucide-react";

const stories = [
    {
        quote: "Akhuwat's loan helped me start my own tailoring business. I am now able to support my family and send my children to school.",
        name: "Fatima Bibi",
        location: "Lahore",
        image: "https://placehold.co/100x100.png",
        hint: "woman portrait"
    },
    {
        quote: "I was struggling to make ends meet. With the loan, I bought a rickshaw and now I have a steady income. Thank you, Akhuwat.",
        name: "Ali Ahmed",
        location: "Karachi",
        image: "https://placehold.co/100x100.png",
        hint: "man portrait"
    },
    {
        quote: "The interest-free loan was a blessing. I expanded my small grocery store and can now afford better for my family.",
        name: "Ayesha Khan",
        location: "Islamabad",
        image: "https://placehold.co/100x100.png",
        hint: "smiling woman"
    },
]

export function SuccessStories() {
  return (
    <section id="stories" className="py-20">
      <div className="container max-w-screen-2xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-headline text-foreground">Success Stories</h2>
          <p className="text-lg text-muted-foreground mt-2">Hear from the people whose lives we've changed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
                <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
                    <CardHeader>
                        <Quote className="h-8 w-8 text-primary" />
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground italic">"{story.quote}"</p>
                    </CardContent>
                    <CardFooter className="flex items-center gap-4 mt-auto pt-4">
                        <Image src={story.image} alt={story.name} width={60} height={60} className="rounded-full object-cover" data-ai-hint={story.hint} />
                        <div>
                            <p className="font-bold text-foreground">{story.name}</p>
                            <p className="text-sm text-muted-foreground">{story.location}</p>
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
