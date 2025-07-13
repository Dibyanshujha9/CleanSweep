import Image from "next/image";

export function AboutUs() {
  return (
    <section id="about-us" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About CleanSweep Pro</h2>
            <p className="text-lg text-muted-foreground">
              We’re more than just cleaners—we enhance comfort, hygiene, and presentation across Forster, Tuncurry, and nearby suburbs. Our mission is to provide a reliable, high-quality cleaning service that allows our clients to focus on what matters most to them.
            </p>
            <p className="text-muted-foreground">
              Founded on principles of trust, efficiency, and customer satisfaction, CleanSweep Pro has grown to be a leading name in professional cleaning services in the area. Our dedicated team is the backbone of our success.
            </p>
          </div>
          <div className="space-y-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1571757392455-1e359f196412?q=80&w=600&auto=format&fit=crop"
                alt="Cleaning professional wiping a surface"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="cleaning surface"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
               <Image
                src="https://images.unsplash.com/photo-1628177142432-864573827d58?q=80&w=600&auto=format&fit=crop"
                alt="Team of cleaners working together"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                data-ai-hint="cleaning team"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
