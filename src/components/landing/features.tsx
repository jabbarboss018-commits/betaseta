import { Clock, Users, BadgePercent, HandCoins } from "lucide-react";

const features = [
  {
    icon: <Clock className="h-10 w-10 text-accent" />,
    title: "Fast Approvals",
  },
  {
    icon: <Users className="h-10 w-10 text-accent" />,
    title: "50k+ Customers",
  },
  {
    icon: <BadgePercent className="h-10 w-10 text-accent" />,
    title: "No Payment Fees",
  },
  {
    icon: <HandCoins className="h-10 w-10 text-accent" />,
    title: "Flexible Payments",
  },
];

export function Features() {
  return (
    <section className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              {feature.icon}
              <h3 className="text-lg font-semibold">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
