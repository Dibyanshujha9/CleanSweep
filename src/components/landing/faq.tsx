"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need to be home during cleaning?",
    answer: "No, you don't need to be home. Most of our clients provide us with a key or a code to access their property. All our staff are thoroughly vetted and trustworthy.",
  },
  {
    question: "Do you bring your own equipment?",
    answer: "Yes, we bring our own high-quality cleaning supplies and equipment. If you have specific products you'd like us to use, please let us know in advance.",
  },
  {
    question: "How to book?",
    answer: "You can book our services easily by clicking the 'Book a Service' button on our website, or by calling us directly. We'll discuss your needs and schedule a convenient time.",
  },
  {
    question: "What if I’m not satisfied?",
    answer: "Your satisfaction is our top priority. If you're not completely satisfied with our service, please contact us within 24 hours, and we will re-clean the area free of charge.",
  },
  {
    question: "One-time or regular cleaning?",
    answer: "We offer both! Whether you need a one-time deep clean or regular maintenance (weekly, bi-weekly, or monthly), we have a flexible plan to suit your needs.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
            Have questions? We've got answers.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
