import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, Stethoscope, Syringe, Scissors, Clock, Star, ArrowRight, HeartPulse, Shield, Award, Users, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import ModernVisitSection from "@/components/ModernVisitSection";
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
  { icon: Users, value: "1,000+", label: "Happy Pets" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Shield, value: "Safe & Caring", label: "Trusted Care" },
  { icon: Star, value: "4.8", label: "Google Rating" },
];

const testimonials = [
  { name: "Mrs. Irani.", role: "Golden Retriever Mom", text: "Dr. Ruchali Ghatge has been kind & caring towards my  furries. She knows how to handle them & their various problems.", rating: 5, avatar: "IR" },
  { name: "Mr. Tushar Kapoor", role: "dog Parent", text: "Dr. Ruchali Ghatge has been an incredible support for my pets, Enzo and Bella, right from the very beginning. She is extremely professional, knowledgeable, and genuinely caring towards animals. One thing I truly appreciate is her availability—whenever we’ve needed guidance or help, she has always been approachable and responsive. She takes the time to explain every detail clearly, whether it’s about the diagnosis, treatment, or medication, which really helps in understanding and managing my pets’ health better. I’m very grateful to have such a reliable and dedicated vet for Enzo and Bella. Highly recommended!", rating: 5, avatar: "TK" },
  { name: "Priya Desai", role: "Multi-pet Household", text: "With three dogs and two cats, finding quality care was a challenge — until faunaPetcare. Their premium approach is worth every penny. Absolute game-changer.", rating: 5, avatar: "PD" },
  { name: "Kiran Kadam", role: "Puppy Parent", text: "From vaccinations to grooming, everything is handled with such professionalism. The facility feels like a five-star hotel for pets. Couldn't recommend more!", rating: 5, avatar: "KK" },
  { name: "Amigo's Pet Parent", role: "Puppy Parent", text: "We are truly blessed to have you as our fur baby, Amigo's doctor.Amigo, being a lockdown baby, has social anxiety and doesn't easily mingle with anyone. But, he feels so comfortable with you. From Amigo's regular check ups to his neutering surgery and post care, we are immensely grateful for your support. 🙏🏻 Thank you for being there for our baby.🙂", rating: 5, avatar: "KK" },
];

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroProgress, [0, 1], [0, 150]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000); // slightly slower for better reading
    return () => clearInterval(timer);
  }, [isHovered]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
    }),
  };

  const swipeConfidenceThreshold = 1000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentTestimonial(
      (prev) => (prev + newDirection + testimonials.length) % testimonials.length
    );
  };

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
              His Creation to Our Care <br /> Experience veterinary care reimagined — premium treatments, compassionate experts, and a space your pet will love.
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
              <img src={doctorImg} alt="Dr. Ruchali Ghatge" loading="lazy" width={800} height={1024} className="rounded-3xl w-full max-w-md mx-auto relative z-10 shadow-2xl" />
              <div className="absolute -bottom-6 -right-6 glass-card-strong rounded-2xl p-5 z-20 max-w-[200px]">
                <div className="flex gap-0.5 mb-1">
                  {[1, 2, 3, 4, 5].map(n => <Star key={n} className="h-3.5 w-3.5 fill-accent text-accent" />)}
                </div>
                <p className="text-xs text-foreground font-medium">4.8 / 5 Rating</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            <p className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Meet Our Expert
            </p>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2 leading-tight">
              Dr. Ruchali Ghatge
            </h2>

            <p className="text-sm text-muted-foreground mb-6">MSVC9548</p>

            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Fauna Pet Care is owned and led by a dedicated veterinarian with over 9 years of hands-on experience in animal healthcare. Built from a personal vision of compassionate and responsible veterinary care, the clinic reflects her belief that every animal deserves time, attention, and thoughtful treatment. Working across small and large animals, she combines strong clinical expertise with a calm, steady approach to diagnosis, treatment, and surgical care.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
              Every consultation is guided by intent, not urgency—ensuring each pet receives focused, individualized attention. Along with medical and surgical services, she emphasizes preventive health, nutrition, and long-term well-being, creating a complete circle of care rooted in trust, compassion, and responsibility.
            </p>

            <Button asChild className="rounded-full px-10 py-6 text-base shadow-lg shadow-primary/20">
              <Link to="/appointment">
                Book a Visit <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Animated Testimonials Slider */}
      <section className="container mx-auto px-4 py-28 md:py-36 overflow-hidden relative">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="text-center mb-20 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent text-sm font-semibold uppercase tracking-[0.2em] mb-4"
          >
            Testimonials
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-6"
          >
            Loved by Pet Parents
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2"
          >
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-primary-foreground shadow-sm">
                  {t.avatar}
                </div>
              ))}
              <div className="h-10 w-10 rounded-full border-2 border-background bg-secondary flex items-center justify-center text-xs font-bold text-foreground shadow-sm">
                +1k
              </div>
            </div>
            <div className="flex flex-col items-start ml-2 text-sm text-foreground">
              <div className="flex text-accent">
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
                <Star className="h-4 w-4 fill-current" />
              </div>
              <span className="font-medium text-muted-foreground mt-0.5"><span className="text-foreground font-bold">4.8/5</span> on Google</span>
            </div>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="md:grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">

            {/* Left Col: Main Interactive Card */}
            <div
              className="md:col-span-8 relative min-h-[500px] md:min-h-[450px] perspective-[1000px]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={currentTestimonial}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                    scale: { duration: 0.2 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                      paginate(-1);
                    }
                  }}
                  className="absolute inset-0 w-full touch-pan-y"
                >
                  <Card className="h-full border-0 glass-card-strong premium-border shadow-2xl overflow-hidden rounded-3xl cursor-grab active:cursor-grabbing backdrop-blur-xl bg-background/80 dark:bg-zinc-900/80 hover:border-primary/30 transition-colors">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-[60px] -mr-10 -mt-10 pointer-events-none" />
                    <CardContent className="p-8 md:p-12 flex flex-col h-full justify-between relative z-10">
                      <div className="mb-6 flex-1 overflow-y-auto pr-3 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border/50 hover:[&::-webkit-scrollbar-thumb]:bg-border/80 [&::-webkit-scrollbar-thumb]:rounded-full">
                        <Quote className="h-8 w-8 text-accent/30 mb-4 shrink-0" />
                        <div className="flex gap-1 mb-3 shrink-0">
                          {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, j) => (
                            <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                          ))}
                        </div>
                        <p className="text-foreground text-lg md:text-xl leading-relaxed font-light italic drop-shadow-sm select-none">
                          "{testimonials[currentTestimonial].text}"
                        </p>
                      </div>

                      <div className="flex items-center justify-between border-t border-border/50 pt-5 mt-2 shrink-0">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg ring-4 ring-background/50">
                            {testimonials[currentTestimonial].avatar}
                          </div>
                          <div>
                            <p className="font-heading font-bold text-foreground text-base">
                              {testimonials[currentTestimonial].name}
                            </p>
                            <p className="text-xs text-primary font-medium tracking-wide">
                              {testimonials[currentTestimonial].role}
                            </p>
                          </div>
                        </div>
                        <div className="hidden sm:flex bg-accent/10 px-3 py-1.5 rounded-full border border-accent/20 items-center gap-1.5 shadow-sm">
                          <svg className="h-3 w-3 text-accent" viewBox="0 0 16 16" fill="currentColor">
                            <path d="M8 0a8 8 0 100 16A8 8 0 008 0zm3.54 6.54l-4 4a.75.75 0 01-1.08 0l-2-2a.75.75 0 011.08-1.08L7 8.92l3.46-3.46a.75.75 0 011.08 1.08z" />
                          </svg>
                          <span className="text-[10px] font-semibold text-accent uppercase tracking-wider">Verified</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Col: Navigation & Leave Review */}
            <div className="md:col-span-4 mt-12 md:mt-0 flex flex-col justify-center space-y-8 px-4 md:px-6">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">Write a Review</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  Swipe left or right to read more experiences. Loved our service? Share your own story with our community.
                </p>
                <Button asChild className="rounded-full shadow-lg hover:shadow-primary/30 transition-all group w-full sm:w-auto px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://maps.app.goo.gl/Sc7UFwCbK2t64PbW8" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <Star className="h-5 w-5 group-hover:fill-current group-hover:scale-110 transition-all" />
                    Leave a Google Review
                  </a>
                </Button>
              </div>

              <div className="bg-foreground/[0.02] p-6 rounded-3xl border border-border/40 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Navigation</p>
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => {
                            setDirection(i > currentTestimonial ? 1 : -1);
                            setCurrentTestimonial(i);
                          }}
                          className={`rounded-full transition-all duration-500 ease-out ${i === currentTestimonial
                            ? "w-8 h-2.5 bg-primary shadow-sm shadow-primary/50"
                            : "w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                            }`}
                          aria-label={`Go to testimonial ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => paginate(-1)}
                      className="h-12 w-12 rounded-full bg-card border border-border/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm group"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="h-5 w-5 group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                      onClick={() => paginate(1)}
                      className="h-12 w-12 rounded-full bg-card border border-border/70 text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 flex items-center justify-center shadow-sm group"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Progress indicator line */}
                <div className="mt-6 h-1 w-full bg-border/50 rounded-full overflow-hidden flex">
                  <motion.div
                    key={currentTestimonial}
                    initial={{ width: "0%" }}
                    animate={{ width: isHovered ? "0%" : "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-primary rounded-full origin-left"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <ModernVisitSection />
    </Layout>
  );
};

export default Index;
