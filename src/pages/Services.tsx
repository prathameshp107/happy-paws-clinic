import { motion } from "framer-motion";
import { Stethoscope, Syringe, Scissors, HeartPulse, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import checkupImg from "@/assets/Grooming.webp";
import vaccinationImg from "@/assets/Vaccination.webp";
import groomingImg from "@/assets/gallery-grooming.webp";
import surgeryImg from "@/assets/service-surgery.webp";

const services = [
  {
    title: "Health Checkups",
    icon: Stethoscope,
    img: checkupImg,
    desc: "Comprehensive wellness exams including physical assessment, blood work, and diagnostic screening. We catch health issues early so your pet lives a longer, happier life.",
    features: ["Full physical examination", "Blood & urine tests", "Weight & nutrition counseling", "Senior pet wellness"],
  },
  {
    title: "Vaccination",
    icon: Syringe,
    img: vaccinationImg,
    desc: "Complete vaccination programs tailored to your pet's age, breed, and lifestyle. We follow the latest veterinary guidelines to ensure optimal protection.",
    features: ["Core & non-core vaccines", "Puppy & kitten series", "Annual boosters", "Vaccine records & reminders"],
  },
  {
    title: "Surgery",
    icon: HeartPulse,
    img: surgeryImg,
    desc: "State-of-the-art surgical suite equipped with advanced monitoring. From routine spay/neuter to complex procedures, your pet is in expert hands.",
    features: ["Spay & neuter", "Soft tissue surgery", "Orthopedic procedures", "Post-op recovery care"],
  },
  {
    title: "Grooming",
    icon: Scissors,
    img: groomingImg,
    desc: "Professional grooming services to keep your pet clean, comfortable, and looking their best. We use gentle, pet-safe products.",
    features: ["Bath & blow-dry", "Haircut & styling", "Nail trimming & ear cleaning", "De-shedding treatment"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Services = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Our Expertise
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-5">
          Premium Services
        </motion.h1>
        <div className="section-divider mt-5 mb-6" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto text-lg">
          Everything your pet needs — delivered with precision, luxury, and love.
        </motion.p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20 md:py-28 space-y-20">
      {services.map((s, i) => (
        <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <Card className="border-0 overflow-hidden premium-border hover-glow card-elevated">
            <div className="grid md:grid-cols-2">
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={s.img} alt={s.title} loading="lazy" width={640} height={640} className="w-full h-80 md:h-full object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              <CardContent className="p-10 md:p-14 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-5">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 flex items-center justify-center">
                    <s.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/80 flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-fit rounded-full px-10 py-6 text-base shadow-lg shadow-primary/20">
                  <Link to="/appointment">Book Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </CardContent>
            </div>
          </Card>
        </motion.div>
      ))}
    </section>
  </Layout>
);

export default Services;
