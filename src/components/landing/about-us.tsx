import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Users, ShieldCheck, Heart, MapPin } from "lucide-react";

const aboutPoints = [
  {
    icon: <Users className="w-10 h-10 text-primary" />,
    title: "Dedicated Team",
    description: "Our dedicated team is the backbone of our success, founded on principles of trust and efficiency.",
  },
  {
    icon: <Heart className="w-10 h-10 text-primary" />,
    title: "Enhancing Comfort",
    description: "We’re more than just cleaners—we enhance comfort, hygiene, and presentation for our clients.",
  },
  {
    icon: <MapPin className="w-10 h-10 text-primary" />,
    title: "Local Service",
    description: "Proudly serving Forster, Tuncurry, and nearby suburbs with reliable, high-quality cleaning.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Customer Focused",
    description: "Our mission is to provide a service that allows our clients to focus on what matters most to them.",
  },
];

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About CleanSweep Pro</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            A leading name in professional cleaning services, built on trust, efficiency, and customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutPoints.map((point, index) => (
                <Card key={index} className="text-center border-2 border-transparent hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <CardHeader className="items-center pb-4">
                        <div className="p-4 bg-primary/10 rounded-full">
                            {point.icon}
                        </div>
                    </CardHeader>
                    <CardContent>
                        <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                        <p className="text-muted-foreground text-sm">{point.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}