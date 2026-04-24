import { motion } from "framer-motion";
import { HeartPulse, Shield, Award, Users, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import heroPets from "@/assets/hero-premium.webp";
import doctorImg from "@/assets/docImage.webp";

const highlights = [
  {
    icon: HeartPulse,
    title: "Compassion First",
    desc: "We treat every pet like family with gentle, loving care."

  },
  {
    icon: Shield,
    title: "Safety & Hygiene",
    desc: "We follow strong clinical hygiene practices and use well-maintained, reliable equipment to provide safe care for every pet.",
  },
  {
    icon: Award,
    title: "Personalized Expert Care",
    desc: "From diagnosis to treatment and minor surgeries, every animal—small or large—receives one-on-one attention from a veterinarian with 10 years of experience, ensuring continuity, safety, and quality care.",
  },
  {
    icon: Users,
    title: "Community Trust",
    desc: "1000s+ happy pets and pet parents served with care and compassion.",
  },
];

const About = () => (
  <Layout>
    <SEO 
      title="About Us — Our Story & Mission"
      description="Learn about faunaPetcare Clinic's mission to provide premium veterinary care with compassion, expertise, and modern facilities in Hadapsar, Pune."
      canonical="/about"
    />
    <section className="relative overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroPets} alt="Clinic" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-20">
        <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-primary-foreground">
          About faunaPetcare
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-primary-foreground/70 max-w-2xl mt-4">
          Premium veterinary care designed for comfort, safety, and excellence. Our mission is to deliver human‑grade care to every furry family member.
        </motion.p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
      <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <img src={doctorImg} alt="Our Clinic" loading="lazy" width={800} height={1024} className="rounded-3xl w-full max-w-lg mx-auto" />
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">Care that feels premium</h2>
        <p className="text-muted-foreground leading-relaxed">
          Premium Care, Personally Delivered From a warm welcome to thoughtfully designed treatment spaces, every detail is created to keep your pets calm, safe, and comfortable. Your pet is cared for directly by our dedicated veterinarian, who blends compassion with clinical expertise to ensure trusted outcomes—and a reassuring experience for both you and your pet.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {highlights.map((h) => (
            <Card key={h.title} className="premium-border border-0 card-elevated">
              <CardContent className="p-5">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <h.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{h.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{h.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>

    <section className="container mx-auto px-4 pb-20">
      <Card className="border-0 card-elevated premium-border overflow-hidden">
        <div className="grid md:grid-cols-3">
          <CardContent className="p-8 md:col-span-2">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              At Fauna Pet Care, our philosophy is simple From His Creation to Our Care. Every life entrusted to us is treated with responsibility, compassion, and respect. Led by a dedicated veterinarian with 10 years of experience across small and large animals, the clinic is built on a commitment to provide honest, consistent, and personalized care. From consultation to treatment and routine surgeries, every step is guided by precision and empathy. As we grow, we remain focused on what truly matters serving each animal with integrity and a genuine sense of purpose.
            </p>
          </CardContent>
          <div className="hidden md:block bg-secondary/60 p-8">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Stethoscope className="h-5 w-5 text-primary" />
              </div>
              <p className="font-heading font-semibold">Care, You Can Trust</p>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Simple, effective clinical practices with attentive monitoring and a gentle approach—supported by grooming and nutrition guidance to keep your pet healthy, comfortable, and well cared for.
            </p>
          </div>
        </div>
      </Card>
    </section>
  </Layout>
);

export default About;

