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
        a: "Yes, we welcome walk-in patients during working hours (Mon–Sat, 9 AM – 7 PM), subject to doctor availability. For non-emergency visits, booking an appointment in advance ensures minimal wait time and dedicated attention for your pet.",
      },
      {
        q: "How do I book an appointment?",
        a: "You can book through our website's appointment form, call us directly at +91 98765 43210, or visit the clinic in person. We also accept WhatsApp bookings for your convenience.",
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
  },
  {
    category: "Vaccinations & Preventive Care",
    icon: Syringe,
    faqs: [
      {
        q: "Which vaccines are recommended for my pet?",
        a: "We tailor vaccination schedules based on your pet's age, breed, lifestyle, and current national guidelines. Core vaccines (Distemper, Parvo, Rabies for dogs; Panleukopenia, Calicivirus for cats) are recommended for all pets. Non-core vaccines are advised based on risk factors.",
      },
      {
        q: "When should puppies and kittens start their vaccines?",
        a: "Puppies typically start their vaccination course at 6–8 weeks of age, with boosters every 3–4 weeks until 16 weeks. Kittens follow a similar schedule starting at 8 weeks. Annual booster doses maintain long-term immunity.",
      },
      {
        q: "Do you offer deworming and anti-tick treatments?",
        a: "Absolutely. We recommend deworming every 3 months for adult pets and monthly for young ones. We also offer a range of flea, tick, and heartworm prevention treatments tailored to your pet's weight, lifestyle, and local parasite risk.",
      },
    ],
  },
  {
    category: "Surgery & Anesthesia",
    icon: Stethoscope,
    faqs: [
      {
        q: "Is anesthesia safe for my pet?",
        a: "Modern veterinary anesthesia is very safe when properly administered. We perform thorough pre-anesthetic blood work and physical exams, use age- and weight-appropriate drug protocols, and monitor your pet's vitals (heart rate, oxygen levels, temperature) continuously throughout the procedure.",
      },
      {
        q: "How do I prepare my pet for surgery?",
        a: "Your pet should be fasted for 8–12 hours before surgery (no food or water) unless advised otherwise. Bring them in calm and rested. Our team will walk you through pre- and post-operative care instructions specific to the procedure.",
      },
      {
        q: "What is the recovery process like after surgery?",
        a: "Recovery varies by procedure. Most pets go home the same day for minor surgeries and require 1–2 days of rest. Major surgeries may need hospitalization and a recovery period of 1–3 weeks with restricted activity. We provide detailed home-care instructions and are available for follow-up calls.",
      },
    ],
  },
  {
    category: "Grooming & Additional Services",
    icon: Scissors,
    faqs: [
      {
        q: "Do you offer grooming services?",
        a: "Yes! Our professional groomers use gentle, pet-safe, hypoallergenic products. Services include bathing, haircuts, nail trimming, ear cleaning, and de-shedding treatments. Grooming can be scheduled alongside medical visits for maximum convenience.",
      },
      {
        q: "Do you offer boarding or daycare?",
        a: "We offer short-term supervised boarding for pets recovering from procedures. For regular daycare or long-term boarding, we can recommend trusted partner facilities nearby.",
      },
    ],
  },
  {
    category: "Billing & Insurance",
    icon: CreditCard,
    faqs: [
      {
        q: "What payment methods do you accept?",
        a: "We accept cash, all major credit/debit cards, UPI (GPay, PhonePe, Paytm), and net banking. Payment is collected at the time of service. For major surgeries, a deposit may be required in advance.",
      },
      {
        q: "Do you work with pet insurance providers?",
        a: "Yes, we work with several pet insurance providers and can assist with documentation for claims. We recommend you check with your insurer directly about covered treatments and reimbursement procedures.",
      },
      {
        q: "Are there any free or subsidized services available?",
        a: "Dr. Ruchali Ghatage runs free monthly wellness camps for stray and community animals. We also offer discounted services for registered NGOs and animal rescue organizations. Contact us to learn more.",
      },
    ],
  },
  {
    category: "Emergency Care",
    icon: AlertCircle,
    faqs: [
      {
        q: "Do you handle pet emergencies?",
        a: "Yes. Emergency cases are always our top priority and attended to immediately regardless of appointment availability. If you're facing a life-threatening situation, call us first so we can prepare for your arrival.",
      },
      {
        q: "What counts as a pet emergency?",
        a: "Signs that require immediate attention include difficulty breathing, uncontrolled bleeding, suspected poisoning, seizures, loss of consciousness, inability to urinate (especially in cats), severe vomiting or diarrhea, suspected fractures, or any sudden and dramatic change in behavior.",
      },
    ],
  },
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
              "text": "You can book an appointment online through our website or call us at +91 99233 42709."
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