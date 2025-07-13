import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export function Hero() {
  const phoneNumber = "+61451215776";
  const smsLink = `sms:${phoneNumber}`;
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] max-h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Professional cleaning in progress"
          fill
          priority
          className="object-cover animate-ken-burns"
          data-ai-hint="cleaning service"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-lg opacity-0 fade-in">
          Professional Cleaning for Homes & Offices
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8 text-shadow opacity-0 fade-in-delay">
          Reliable, affordable, and spotless cleaning – tailored to your space.
        </p>
        <Button asChild size="lg" className="shadow-lg button-shine opacity-0 fade-in-delay">
          <Link href={smsLink}>
            Book a Service <MoveRight className="ml-2"/>
          </Link>
        </Button>
      </div>
    </section>
  );
}
