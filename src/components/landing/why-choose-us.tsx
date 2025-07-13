import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Award, CalendarClock, Leaf, ShieldCheck, Sparkles, Star } from "lucide-react";

const benefits = [
  {
    icon: <Star className="w-8 h-8 text-primary" />,
    title: "Experienced Staff",
    description: "Our team consists of highly trained and experienced cleaning professionals.",
  },
  {
    icon: <CalendarClock className="w-8 h-8 text-primary" />,
    title: "Flexible Scheduling",
    description: "We work around your schedule to provide cleaning services at your convenience.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    title: "Attention to Detail",
    description: "We pride ourselves on our meticulous approach to cleaning every corner.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Eco-Friendly Products",
    description: "We use safe, sustainable, and effective cleaning products for a healthy space.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
    title: "Trusted Professionals",
    description: "All our staff are background-checked, reliable, and committed to excellence.",
  },
  {
    icon: <Award className="w-8 h-8 text-primary" />,
    title: "Fully Insured Business",
    description: "We are fully insured, giving you peace of mind with every service.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Why Choose Us?</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We deliver exceptional quality and reliability. Here's what sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="text-center border-2 border-transparent hover:border-primary hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <CardHeader className="items-center">
                <div className="bg-primary/10 p-4 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
