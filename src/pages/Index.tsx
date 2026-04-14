import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Stethoscope, Syringe, Scissors, Clock, Star, ArrowRight, HeartPulse, Shield, Award, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroPets from "@/assets/hero-pets.webp";
import doctorImg from "@/assets/docImage.webp";
import checkupImg from "@/assets/healtcheckup.webp";
import vaccinationImg from "@/assets/Vaccination.webp";
import groomingImg from "@/assets/Grooming.webp";
import surgeryImg from "@/assets/service-surgery.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const services = [
  { title: "Health Checkups", desc: "Comprehensive wellness exams with advanced diagnostics", icon: Stethoscope, img: checkupImg, color: "from-primary/20 to-primary/5" },
  { title: "Vaccination", desc: "Complete immunization programs for lifelong protection", icon: Syringe, img: vaccinationImg, color: "from-accent/20 to-accent/5" },
  { title: "Surgery", desc: "State-of-the-art surgical care with expert precision", icon: HeartPulse, img: surgeryImg, color: "from-primary/20 to-primary/5" },
  { title: "Grooming", desc: "Premium spa-grade grooming for your beloved pet", icon: Scissors, img: groomingImg, color: "from-accent/20 to-accent/5" },
];

const stats = [
  { icon: Users, value: "15,000+", label: "Happy Pets" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Shield, value: "99%", label: "Success Rate" },
  { icon: Star, value: "4.9", label: "Google Rating" },
];

const testimonials = [
  { name: "Mrs. Irani.", role: "Golden Retriever Mom", text: "Dr. Ruchali Ghatge has been kind & caring towards my  furries. She knows how to handle them & their various problems.", rating: 5, avatar: "IR" },
  { name: "Mr. Tushar Kapoor", role: "dog Parent", text: "Dr. Ruchali Ghatge has been an incredible support for my pets, Enzo and Bella, right from the very beginning. She is extremely professional, knowledgeable, and genuinely caring towards animals. One thing I truly appreciate is her availability—whenever we’ve needed guidance or help, she has always been approachable and responsive. She takes the time to explain every detail clearly, whether it’s about the diagnosis, treatment, or medication, which really helps in understanding and managing my pets’ health better. I’m very grateful to have such a reliable and dedicated vet for Enzo and Bella. Highly recommended!", rating: 5, avatar: "TK" },
  { name: "Priya Desai", role: "Multi-pet Household", text: "With three dogs and two cats, finding quality care was a challenge — until faunaPetcare. Their premium approach is worth every penny. Absolute game-changer.", rating: 5, avatar: "PD" },
  { name: "Kiran Kadam", role: "Puppy Parent", text: "From vaccinations to grooming, everything is handled with such professionalism. The facility feels like a five-star hotel for pets. Couldn't recommend more!", rating: 5, avatar: "KK" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Layout>
      <SEO 
        title="Home — Premium Pet Healthcare"
        description="Experience veterinary care reimagined at faunaPetcare Clinic. Premium treatments, compassionate experts, and a space your pet will love in Hadapsar, Pune."
        canonical="/"
      />
      {/* Cinematic Hero */}
      <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: heroScale }}>
          <img src={heroPets} alt="Premium pet clinic" loading="lazy" className="w-full h-full object-cover" width={1920} height={1080} />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20 dark:from-black/80 dark:via-black/50 dark:to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />

        <motion.div style={{ opacity: heroOpacity }} className="relative container mx-auto px-4 py-32 md:py-40">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full glass-card text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-8"
            >
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              Premium Pet Healthcare
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-[1.05] mb-8"
            >
              Where Every Pet
              <br />
              <span className="italic text-accent">Feels Like Family</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-primary-foreground/70 text-lg md:text-xl max-w-lg mb-12 font-light leading-relaxed"
            >
              Experience veterinary care reimagined — premium treatments, compassionate experts, and a space your pet will love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="rounded-full text-base px-10 py-6 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/appointment">Book Appointment <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base px-10 py-6 border-2 border-white/50 text-lightblack hover:bg-white hover:text-primary backdrop-blur-md transition-all duration-300">
                <a href="tel:+919923342709"><Phone className="mr-2 h-4 w-4" /> Call Now</a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-1.5"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-primary-foreground/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar - Glassmorphism */}
      <section className="relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                custom={i}
                className="glass-card-strong rounded-2xl p-7 text-center group hover:scale-105 transition-transform duration-500"
              >
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-500">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="font-heading text-3xl md:text-4xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] mt-1.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-28 md:py-36">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            What We Offer
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-5">
            Premium Care Services
          </motion.h2>
          <div className="section-divider mt-5" />
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto mt-6 text-lg">
            Every service crafted with precision, compassion, and the finest medical expertise.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="overflow-hidden border-0 h-full group cursor-pointer relative shimmer hover-glow card-elevated">
                <div className="relative overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={640}
                    height={640}
                    className="w-full h-56 object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 h-12 w-12 rounded-2xl glass-card flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <s.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                </div>
                <CardContent className="p-6 relative">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  <div className="mt-4 flex items-center text-sm text-primary font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Learn more <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-14">
          <Button asChild variant="outline" className="rounded-full px-10 py-6 text-base hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            <Link to="/services">Explore All Services <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </motion.div>
      </section>

      {/* Doctor Section with Parallax */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
        <div className="relative container mx-auto px-4 py-28 md:py-36 grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-[2rem] blur-2xl" />
              <img src={doctorImg} alt="Dr. Ruchali Ghatage" loading="lazy" width={800} height={1024} className="rounded-3xl w-full max-w-md mx-auto relative z-10 shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 glass-card-strong rounded-2xl p-5 z-20 max-w-[200px]">
                <div className="flex gap-0.5 mb-1">
                  {[1,2,3,4,5].map(n => <Star key={n} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                </div>
                <p className="text-xs text-foreground font-medium">4.9 / 5 Rating</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Based on 2,400+ reviews</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">Meet Our Expert</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Dr. Ruchali Ghatage
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              With over 10 years of experience in veterinary medicine, Dr. Parker leads our team with unmatched passion and expertise. She specializes in small animal medicine, advanced diagnostics, and surgical innovation.
            </p>
            <blockquote className="border-l-2 border-accent pl-6 my-8">
              <p className="italic text-foreground/80 text-lg leading-relaxed">
                "Every pet that walks through our doors receives the same love and attention as my own. We believe in human-grade care for every furry family member."
              </p>
            </blockquote>
            <Button asChild className="rounded-full px-10 py-6 text-base shadow-lg shadow-primary/20">
              <Link to="/appointment">Book a Visit <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Animated Testimonials Slider */}
      <section className="container mx-auto px-4 py-28 md:py-36">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
            Testimonials
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-5">
            Loved by Pet Parents
          </motion.h2>
          <div className="section-divider mt-5" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <Card className="border-0 glass-card-strong premium-border overflow-hidden">
                  <CardContent className="p-10 md:p-14">
                    <Quote className="h-10 w-10 text-accent/30 mb-6" />
                    <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-10 font-light italic">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground font-heading">
                        {testimonials[currentTestimonial].avatar}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-foreground text-lg">{testimonials[currentTestimonial].name}</p>
                        <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                      </div>
                      <div className="ml-auto flex gap-1">
                        {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, j) => (
                          <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="h-12 w-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === currentTestimonial ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="h-12 w-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Timings */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)" }} />
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-center text-primary-foreground">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Clock className="h-10 w-10 mx-auto mb-5 opacity-80" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visit Us Today</h2>
            <p className="opacity-70 mb-10 max-w-lg mx-auto text-lg">Your pet deserves world-class care. Walk in or book online.</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto mb-12">
              {[
                { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
                { day: "Saturday", time: "9:00 AM – 5:00 PM" },
                { day: "Sunday", time: "10:00 AM – 2:00 PM" },
              ].map((t) => (
                <div key={t.day} className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors duration-300">
                  <p className="font-heading font-semibold text-base">{t.day}</p>
                  <p className="opacity-70 text-sm mt-1">{t.time}</p>
                </div>
              ))}
            </div>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="rounded-full px-12 py-6 text-base border-2 border-white/50 text-neutral-800 hover:bg-white hover:text-primary transition-all duration-300"
            >
              <Link to="/appointment">
                Book Your Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
