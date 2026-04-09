import { motion } from "framer-motion";
import { Stethoscope, Syringe, Scissors, HeartPulse, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import checkupImg from "@/assets/service-checkup.jpg";
import vaccinationImg from "@/assets/service-vaccination.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";

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
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } }),
};

const Services = () => (
  <Layout>
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
          Our Expertise
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          Premium Services
        </motion.h1>
        <div className="section-divider mt-4 mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">Everything your pet needs — delivered with precision and love.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-20 space-y-16">
      {services.map((s, i) => (
        <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Card className="card-elevated border-0 overflow-hidden premium-border">
            <div className={`grid md:grid-cols-2`}>
              <div className={`relative overflow-hidden ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={s.img} alt={s.title} loading="lazy" width={640} height={640} className="w-full h-72 md:h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              <CardContent className="p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{s.desc}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-foreground/80 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-fit rounded-full px-8">
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
