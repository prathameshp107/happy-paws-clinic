import { motion } from "framer-motion";
import { Stethoscope, Syringe, Scissors, HeartPulse, ArrowRight } from "lucide-react";
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
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } }),
};

const Services = () => (
  <Layout>
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Our Services
        </motion.h1>
        <p className="text-muted-foreground max-w-xl mx-auto">Everything your pet needs, all under one roof. Premium care delivered with love.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 space-y-12">
      {services.map((s, i) => (
        <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
          <Card className="card-elevated border-0 overflow-hidden">
            <div className={`grid md:grid-cols-2 ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
              <img src={s.img} alt={s.title} loading="lazy" width={640} height={640} className={`w-full h-64 md:h-full object-cover ${i % 2 === 1 ? "md:order-2" : ""}`} />
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground">{s.title}</h2>
                </div>
                <p className="text-muted-foreground mb-4">{s.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-fit">
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
