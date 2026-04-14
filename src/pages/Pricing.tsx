import { motion } from "framer-motion";
import { Check, PawPrint } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Essential",
    price: "$49",
    period: "/visit",
    features: ["General checkup", "Vaccination review", "Nutrition advice"],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "$129",
    period: "/visit",
    features: ["Comprehensive exam", "Lab tests", "Dental evaluation", "Personalized care plan"],
    highlighted: true,
  },
  {
    name: "Wellness Plan",
    price: "$299",
    period: "/quarter",
    features: ["3 visits", "Vaccinations", "Grooming credit", "Priority booking"],
    highlighted: false,
  },
];

const Pricing = () => (
  <Layout>
    <SEO 
      title="Pricing — Affordable Pet Care Plans"
      description="Transparent pricing for premium veterinary services. Explore our essential, premium, and wellness plans at faunaPetcare Clinic."
      canonical="/pricing"
    />
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold">
          Transparent Pricing
        </motion.h1>
        <div className="section-divider mt-4" />
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">Premium care designed for every pet parent.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 grid gap-8 md:grid-cols-3">
      {plans.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card className={`card-elevated border-0 premium-border ${p.highlighted ? "ring-2 ring-accent" : ""}`}>
            <CardContent className="p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-xl font-semibold">{p.name}</h3>
                {p.highlighted && (
                  <span className="text-xs px-2.5 py-1 rounded-full bg-accent text-accent-foreground">Popular</span>
                )}
              </div>
              <div className="mt-4">
                <span className="font-heading text-4xl font-bold">{p.price}</span>
                <span className="text-muted-foreground ml-1">{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
              <Button className="w-full mt-7 rounded-full">
                <PawPrint className="h-4 w-4 mr-2" /> Choose {p.name}
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </section>
  </Layout>
);

export default Pricing;

