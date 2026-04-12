import { motion } from "framer-motion";
import { Stethoscope, HeartPulse, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import doctor1 from "@/assets/doctor-premium.webp";
import doctor2 from "@/assets/doctor.webp";

const doctors = [
  { name: "Dr. Ruchali Ghatage", role: "Chief Veterinarian", img: doctor1, badges: ["Surgery", "Internal Medicine"] },
  { name: "Dr. Liam Chen", role: "Senior Vet", img: doctor2, badges: ["Dermatology", "Dentistry"] },
  { name: "Dr. Sofia Reyes", role: "Vet Surgeon", img: doctor1, badges: ["Orthopedics", "Anesthesiology"] },
];

const Doctors = () => (
  <Layout>
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold">
          Meet Our Doctors
        </motion.h1>
        <div className="section-divider mt-4" />
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">Experts who combine compassion with precision to keep your pet thriving.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {doctors.map((d, i) => (
        <motion.div key={d.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
          <Card className="card-elevated border-0 overflow-hidden premium-border">
            <div className="relative h-64 overflow-hidden">
              <img src={d.img} alt={d.name} loading="lazy" width={640} height={640} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>
            <CardContent className="p-6">
              <h3 className="font-heading text-xl font-semibold">{d.name}</h3>
              <p className="text-sm text-muted-foreground">{d.role}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {d.badges.map((b) => (
                  <span key={b} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {b}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-5 text-muted-foreground">
                <span className="flex items-center gap-1 text-xs"><Stethoscope className="h-3.5 w-3.5 text-primary" /> MBVS</span>
                <span className="flex items-center gap-1 text-xs"><HeartPulse className="h-3.5 w-3.5 text-primary" /> 4.9 Rating</span>
                <span className="flex items-center gap-1 text-xs"><Award className="h-3.5 w-3.5 text-primary" /> 15+ yrs</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </section>
  </Layout>
);

export default Doctors;

