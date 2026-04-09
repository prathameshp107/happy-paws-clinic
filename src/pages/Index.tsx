import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Stethoscope, Syringe, Scissors, Clock, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroPets from "@/assets/hero-pets.jpg";
import doctorImg from "@/assets/doctor.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import vaccinationImg from "@/assets/service-vaccination.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const services = [
  { title: "Health Checkups", desc: "Comprehensive wellness exams for pets of all ages", icon: Stethoscope, img: checkupImg },
  { title: "Vaccination", desc: "Complete vaccination programs to keep your pet safe", icon: Syringe, img: vaccinationImg },
  { title: "Surgery", desc: "Advanced surgical care with modern equipment", icon: Stethoscope, img: surgeryImg },
  { title: "Grooming", desc: "Professional grooming to keep your pet looking great", icon: Scissors, img: groomingImg },
];

const testimonials = [
  { name: "Sarah M.", text: "PawCare saved my dog's life! The team is incredibly caring and professional.", rating: 5 },
  { name: "James K.", text: "Best vet clinic in town. They treat every pet like their own family member.", rating: 5 },
  { name: "Priya D.", text: "Clean facility, friendly staff, and my cat loves coming here. Highly recommend!", rating: 5 },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroPets} alt="Happy pets at clinic" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-40 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-4"
        >
          Caring for Your Pets<br />Like Family
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Premium veterinary care with compassion, expertise, and love. Your pet deserves the best.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="text-base">
            <Link to="/appointment">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+1234567890"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Our Services</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive pet care under one roof — from routine checkups to advanced surgery.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="card-elevated overflow-hidden border-0 h-full">
              <img src={s.img} alt={s.title} loading="lazy" width={640} height={640} className="w-full h-48 object-cover" />
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <s.icon className="h-5 w-5 text-primary" />
                  <h3 className="font-heading font-semibold text-foreground">{s.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild variant="outline">
          <Link to="/services">View All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    {/* Doctor Section */}
    <section className="bg-muted">
      <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <img src={doctorImg} alt="Dr. Emily Parker" loading="lazy" width={800} height={1024} className="rounded-2xl w-full max-w-md mx-auto" />
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Meet Dr. Emily Parker</h2>
          <p className="text-muted-foreground mb-4">
            With over 15 years of experience in veterinary medicine, Dr. Parker leads our team with passion and expertise. She specializes in small animal medicine and surgery.
          </p>
          <p className="text-muted-foreground mb-6">
            "Every pet that walks through our doors is treated with the same love and care as my own. We believe in human-grade care for every furry family member."
          </p>
          <Button asChild>
            <Link to="/appointment">Book a Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container mx-auto px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">What Pet Parents Say</h2>
        <p className="text-muted-foreground">Trusted by thousands of pet families</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="card-elevated border-0 h-full">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4">"{t.text}"</p>
                <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Timings */}
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 text-center">
        <Clock className="h-8 w-8 mx-auto mb-4" />
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-6">Clinic Hours</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto text-sm">
          <div className="bg-primary-foreground/10 rounded-xl p-4">
            <p className="font-semibold">Mon – Fri</p>
            <p className="opacity-80">9:00 AM – 8:00 PM</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-4">
            <p className="font-semibold">Saturday</p>
            <p className="opacity-80">9:00 AM – 5:00 PM</p>
          </div>
          <div className="bg-primary-foreground/10 rounded-xl p-4">
            <p className="font-semibold">Sunday</p>
            <p className="opacity-80">10:00 AM – 2:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
