import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SprayCan, Wind, Building, Sparkles } from "lucide-react";

const services = [
  {
    icon: <SprayCan className="w-10 h-10 text-primary" />,
    title: "Domestic Cleaning",
    description: "Tailored cleaning for your home, ensuring a pristine living space.",
  },
  {
    icon: <Wind className="w-10 h-10 text-primary" />,
    title: "Carpet Cleaning",
    description: "Deep cleaning for carpets, removing stains and allergens.",
  },
  {
    icon: <Building className="w-10 h-10 text-primary" />,
    title: "Commercial Cleaning",
    description: "Professional cleaning services for offices and commercial properties.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-primary" />,
    title: "Window Cleaning",
    description: "Streak-free cleaning for all types of windows, inside and out.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From homes to offices, we offer a wide range of cleaning solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="text-center h-full card-3d">
                  <CardHeader className="items-center pb-4">
                      <div className="p-4 bg-primary/10 rounded-full">
                          {service.icon}
                      </div>
                  </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold mb-2">{service.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 scroll-reveal">
          <Button variant="outline" size="lg">More Services</Button>
        </div>
      </div>
    </section>
  );
}
