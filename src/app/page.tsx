"use client";

import { useEffect } from "react";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { WhyChooseUs } from "@/components/landing/why-choose-us";
import { Services } from "@/components/landing/services";
import { FAQ } from "@/components/landing/faq";
import { Testimonials } from "@/components/landing/testimonials";
import { AboutUs } from "@/components/landing/about-us";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhyChooseUs />
        <Services />
        <Testimonials />
        <FAQ />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}
