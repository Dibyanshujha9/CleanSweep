import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const phoneNumber = "+61451215776";
  const smsLink = `sms:${phoneNumber}`;
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Professional cleaning in progress"
          fill
          className="object-cover animate-ken-burns"
          data-ai-hint="cleaning service"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-shadow-lg">
          Professional Cleaning for Homes & Offices
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/90 mb-8 text-shadow">
          Reliable, affordable, and spotless cleaning – tailored to your space.
        </p>
        <Button asChild size="lg" className="shadow-lg">
          <Link href={smsLink}>Book a Service</Link>
        </Button>
      </div>
    </section>
  );
}
