import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Syringe,
  Stethoscope,
  Scissors,
  Clock,
  CreditCard,
  PawPrint,
  ShieldCheck,
  AlertCircle,
  Phone,
} from "lucide-react";

const faqCategories = [
  {
    category: "Appointments & Visits",
    icon: Clock,
    faqs: [
      {
        q: "Do you accept walk-ins?",
        a: "Yes, we welcome walk-in patients during working hours (Mon – Sat: 10:00 AM – 2:30 PM & 5:00 PM – 9:30 PM; Sunday: 6:00 PM – 8:00 PM), subject to doctor availability. For a smoother and stress-free experience, we recommend booking an appointment in advance through a call or via our website to ensure minimal waiting time and dedicated attention for your pet.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book through our website's appointment form, call us directly at +91 99233 42709 or +91 87935 72269, or visit the clinic in person. We also accept WhatsApp bookings for your convenience.",
      },
      {
        q: "What should I bring for my pet's first visit?",
        a: "Please bring any previous vaccination records, medical history, or reports you have. For puppies and kittens, note their date of birth and deworming history if available. A familiar toy or blanket can also help keep your pet calm.",
      },
      {
        q: "How long does a typical consultation take?",
        a: "A routine wellness consultation takes 20–30 minutes. Surgical consultations or complex case discussions may take 45–60 minutes. Emergency cases are always prioritized and attended to immediately.",
      },
    ],
  }
];

const Faq = () => (
  <Layout>
    <SEO
      title="FAQ — Frequently Asked Questions"
      description="Find answers to common questions about veterinary services, appointments, pricing, and pet care at faunaPetcare Clinic in Pune."
      canonical="/faq"
      schemaMarkup={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer comprehensive veterinary services including health checkups, vaccinations, surgery, grooming, dental care, and emergency services."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book an appointment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book an appointment online through our website or call us at +91 9923342709."
            }
          },
          {
            "@type": "Question",
            "name": "What are your clinic hours?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We are open Monday to Saturday from 9:00 AM to 7:00 PM."
            }
          }
        ]
      }}
    />
    {/* Hero */}
    <section className="relative bg-secondary/50 py-20 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 40%, hsl(var(--primary)) 0%, transparent 60%)",
        }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5">
            <PawPrint className="h-3.5 w-3.5" /> Got Questions?
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground max-w-xl mx-auto mt-4">
            Everything you need to know about our clinic, care standards, and services — answered clearly.
          </p>
        </motion.div>
      </div>
    </section>

    {/* FAQ Body */}
    <section className="container mx-auto px-4 py-16 max-w-3xl">
      <div className="flex flex-col gap-10">
        {faqCategories.map((cat, ci) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.07, duration: 0.5 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <h2 className="font-heading text-lg font-semibold">{cat.category}</h2>
                <div className="flex-1 h-px bg-border ml-2" />
              </div>

              {/* Accordion */}
              <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <Accordion type="single" collapsible className="w-full">
                  {cat.faqs.map((f, i) => (
                    <AccordionItem
                      key={f.q}
                      value={`${ci}-${i}`}
                      className="border-b border-border last:border-0"
                    >
                      <AccordionTrigger className="text-left px-5 py-4 text-sm font-medium hover:no-underline hover:text-primary transition-colors">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-sm px-5 pb-4 leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>

    {/* Still have questions CTA */}
    <section className="bg-primary/5 border-t border-border py-14">
      <motion.div
        className="container mx-auto px-4 max-w-xl text-center"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="flex justify-center mb-4">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <ShieldCheck className="h-6 w-6 text-primary" />
          </div>
        </div>
        <h3 className="font-heading text-2xl font-bold mb-2">Still have questions?</h3>
        <p className="text-muted-foreground text-sm mb-6">
          Our team is always happy to help. Reach out and we'll get back to you promptly.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-2.5 text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
        >
          <Phone className="h-4 w-4" /> Contact Us
        </a>
      </motion.div>
    </section>
  </Layout>
);

export default Faq;