import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  { q: "Do you accept walk-ins?", a: "Yes. We welcome walk-ins during working hours, subject to doctor availability." },
  { q: "Which vaccines are recommended?", a: "We tailor vaccination based on age, breed, lifestyle, and current guidelines." },
  { q: "Is anesthesia safe for my pet?", a: "We perform pre-anesthetic exams, monitor continuously, and use safest modern protocols." },
  { q: "Do you offer grooming?", a: "Yes. Our groomers use gentle, pet‑safe products and can coordinate with medical visits." },
];

const Faq = () => (
  <Layout>
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold">
          Frequently Asked Questions
        </motion.h1>
        <div className="section-divider mt-4" />
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">Answers to common questions about our clinic and care.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <Card className="border-0 card-elevated premium-border">
        <CardContent className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  </Layout>
);

export default Faq;

