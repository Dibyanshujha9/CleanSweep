"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah L.",
    image: "https://placehold.co/100x100.png",
    hint: "woman portrait",
    rating: 5,
    review: "Absolutely fantastic service! My home has never been cleaner. The team was professional, punctual, and incredibly thorough. Highly recommend CleanSweep Pro!",
  },
  {
    name: "John D.",
    image: "https://placehold.co/100x100.png",
    hint: "man portrait",
    rating: 5,
    review: "We used them for our office cleaning, and the difference is night and day. Their attention to detail is impeccable. Our workspace feels so much more productive now.",
  },
  {
    name: "Emily R.",
    image: "https://placehold.co/100x100.png",
    hint: "person smiling",
    rating: 5,
    review: "The eco-friendly products were a huge plus for me and my family. The house smells fresh and clean, not like harsh chemicals. A wonderful, reliable service.",
  },
  {
    name: "Mark T.",
    image: "https://placehold.co/100x100.png",
    hint: "man smiling",
    rating: 4,
    review: "Great value and very flexible with scheduling. They did a great job on a deep clean before we moved in. A few minor spots missed but they came back to fix it immediately.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            We're proud to have happy clients. See what they think about our work.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="h-full flex flex-col">
                    <CardContent className="flex flex-col items-center text-center p-6 flex-grow">
                      <Avatar className="w-20 h-20 mb-4 border-2 border-primary/50">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.hint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <div className="flex gap-1 my-2">
                        {Array(5).fill(0).map((_, i) => (
                          <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mt-2 flex-grow">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
