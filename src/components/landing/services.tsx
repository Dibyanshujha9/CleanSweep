import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    title: "Domestic Cleaning",
    image: "https://images.unsplash.com/photo-1585421514738-01798e368626?q=80&w=600&auto=format&fit=crop",
    hint: "clean living room",
  },
  {
    title: "Carpet Cleaning",
    image: "https://images.unsplash.com/photo-1605663869915-1c495c3735ce?q=80&w=600&auto=format&fit=crop",
    hint: "vacuuming carpet",
  },
  {
    title: "Commercial Cleaning",
    image: "https://images.unsplash.com/photo-1600880292210-859b9101bf4e?q=80&w=600&auto=format&fit=crop",
    hint: "modern office",
  },
  {
    title: "Glass Window Cleaning",
    image: "https://images.unsplash.com/photo-1596634430752-32a55855c328?q=80&w=600&auto=format&fit=crop",
    hint: "cleaning window",
  },
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Services</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            From homes to offices, we offer a wide range of cleaning solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden group rounded-lg">
              <CardContent className="p-0 relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  data-ai-hint={service.hint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300 flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{service.title}</h3>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">More Services</Button>
        </div>
      </div>
    </section>
  );
}
