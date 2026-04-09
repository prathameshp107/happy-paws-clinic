import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Stethoscope, Syringe, Scissors, Clock, Star, ArrowRight, HeartPulse, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import heroPets from "@/assets/hero-premium.jpg";
import doctorImg from "@/assets/doctor-premium.jpg";
import checkupImg from "@/assets/service-checkup.jpg";
import vaccinationImg from "@/assets/service-vaccination.jpg";
import groomingImg from "@/assets/service-grooming.jpg";
import surgeryImg from "@/assets/service-surgery.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] } }),
};

const services = [
  { title: "Health Checkups", desc: "Comprehensive wellness exams for pets of all ages", icon: Stethoscope, img: checkupImg },
  { title: "Vaccination", desc: "Complete vaccination programs to keep your pet safe", icon: Syringe, img: vaccinationImg },
  { title: "Surgery", desc: "Advanced surgical care with modern equipment", icon: HeartPulse, img: surgeryImg },
  { title: "Grooming", desc: "Professional grooming to keep your pet looking great", icon: Scissors, img: groomingImg },
];

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Pets" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "99%", label: "Success Rate" },
  { icon: Star, value: "4.9", label: "Rating" },
];

const testimonials = [
  { name: "Sarah Mitchell", role: "Golden Retriever Mom", text: "fonaPetcare saved my dog's life! The team is incredibly caring and professional. I wouldn't trust anyone else.", rating: 5, avatar: "SM" },
  { name: "James Kumar", role: "Cat Parent", text: "Best vet clinic in town. They treat every pet like their own family member. The facility is immaculate.", rating: 5, avatar: "JK" },
  { name: "Priya Desai", role: "Multi-pet Household", text: "Clean facility, friendly staff, and my pets love coming here. The premium care is worth every penny.", rating: 5, avatar: "PD" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroPets} alt="Premium pet clinic interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-sm border border-accent/20"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Premium Pet Healthcare
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Where Every Pet
            <br />
            <span className="italic text-accent">Feels Like Family</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-primary-foreground/70 text-lg md:text-xl max-w-lg mb-10 font-light leading-relaxed"
          >
            Experience veterinary care reimagined — premium treatments, compassionate experts, and a clinic your pet will love.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="rounded-full text-base px-8 shadow-lg">
              <Link to="/appointment">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full text-base px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm">
              <a href="tel:+1234567890"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Stats Bar */}
    <section className="relative -mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <s.icon className="h-5 w-5 text-accent mx-auto mb-2" />
              <p className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services Preview */}
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
          What We Offer
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">
          Premium Care Services
        </motion.h2>
        <div className="section-divider mt-4" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s, i) => (
          <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="card-elevated overflow-hidden border-0 h-full group">
              <div className="relative overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <div className="absolute bottom-3 left-3 h-10 w-10 rounded-xl bg-card/90 backdrop-blur-sm flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild variant="outline" className="rounded-full px-8">
          <Link to="/services">Explore All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>

    {/* Doctor Section */}
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 py-24 grid md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="relative">
            <img src={doctorImg} alt="Dr. Emily Parker" loading="lazy" width={800} height={1024} className="rounded-3xl w-full max-w-md mx-auto relative z-10" />
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl bg-primary/10 z-0" />
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Meet Our Expert</p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">Dr. Emily Parker</h2>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            With over 15 years of experience in veterinary medicine, Dr. Parker leads our team with unmatched passion and expertise. She specializes in small animal medicine and advanced surgery.
          </p>
          <blockquote className="border-l-2 border-accent pl-5 my-6 italic text-foreground/80">
            "Every pet that walks through our doors is treated with the same love and care as my own. We believe in human-grade care for every furry family member."
          </blockquote>
          <Button asChild className="rounded-full px-8 mt-2">
            <Link to="/appointment">Book a Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">Testimonials</p>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4">Loved by Pet Parents</h2>
        <div className="section-divider mt-4" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div key={t.name} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Card className="card-elevated border-0 h-full premium-border">
              <CardContent className="p-8">
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary font-heading">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>

    {/* CTA + Timings */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/80" />
      <div className="relative container mx-auto px-4 py-20 text-center text-primary-foreground">
        <Clock className="h-8 w-8 mx-auto mb-4 opacity-80" />
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Visit Us Today</h2>
        <p className="opacity-70 mb-8 max-w-lg mx-auto">Your pet deserves world-class care. Walk in or book online — we're here for you.</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
            <p className="font-heading font-semibold text-sm">Mon – Fri</p>
            <p className="opacity-70 text-sm mt-1">9:00 AM – 8:00 PM</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
            <p className="font-heading font-semibold text-sm">Saturday</p>
            <p className="opacity-70 text-sm mt-1">9:00 AM – 5:00 PM</p>
          </div>
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-5 border border-primary-foreground/10">
            <p className="font-heading font-semibold text-sm">Sunday</p>
            <p className="opacity-70 text-sm mt-1">10:00 AM – 2:00 PM</p>
          </div>
        </div>
        <Button asChild size="lg" variant="outline" className="rounded-full px-10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
          <Link to="/appointment">Book Your Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Index;
