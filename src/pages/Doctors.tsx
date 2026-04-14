import { motion } from "framer-motion";
import {
  Stethoscope,
  HeartPulse,
  Award,
  GraduationCap,
  Star,
  MapPin,
  Phone,
  Calendar,
  CheckCircle2,
  Microscope,
  Syringe,
  PawPrint,
  BadgeCheck,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import doctor1 from "@/assets/docImage.webp";
import logoImg from "@/assets/logo.webp";

const doctor = {
  name: "Dr. Ruchali Ghatage",
  role: "Chief Veterinarian & Founder",
  professionalTitle: "Veterinary Physician, Surgeon and Animal Health/Nutrition Consultant",
  registrationNumber: "MSVC9548",
  img: doctor1,
  tagline: "Healing animals with science, empathy, and devotion.",
  rating: 4.9,
  reviews: 312,
  experience: "15+ Years",
  location: "Pimpri-Chinchwad, Pune",
  qualifications: ["BVSc & AH (MAFSU)", "MVSc – Surgery & Radiology", "PGDCR – Clinical Research"],
  specializations: [
    { label: "Soft Tissue Surgery", icon: Syringe },
    { label: "Internal Medicine", icon: Microscope },
    { label: "Exotic Animal Care", icon: PawPrint },
    { label: "Critical & Emergency Care", icon: HeartPulse },
    { label: "Preventive Healthcare", icon: CheckCircle2 },
    { label: "Diagnostic Imaging", icon: Stethoscope },
  ],
  about: `Dr. Ruchali Ghatage is a distinguished veterinarian with over 10 years of dedicated service to animal health in Pune. Known for her exceptional surgical precision and compassionate approach, she has transformed the lives of thousands of pets and their families. 

Her expertise spans small animal surgery, diagnostic imaging, and managing complex multi-system diseases — making her one of the most trusted names in veterinary care across the region. She believes every pet deserves the same standard of care as any human patient.`,
  highlights: [
    "Performed 2,500+ successful surgeries",
    "Published in 3 national veterinary journals",
    "Guest faculty at Maharashtra Animal Sciences University",
    "Runs free monthly wellness camps for strays",
  ],
};

const Doctors = () => (
  <Layout>
    <SEO 
      title="Our Doctors — Expert Veterinarians"
      description="Meet Dr. Ruchali Ghatage, our chief veterinarian with 15+ years of experience in surgery, internal medicine, and animal health care at faunaPetcare Clinic."
      canonical="/doctors"
      schemaMarkup={{
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Ruchali Ghatage",
        "image": "https://faunapetcareclinic.com/src/assets/docImage.webp",
        "url": "https://faunapetcareclinic.com/doctors",
        "telephone": "+919923342709",
        "medicalSpecialty": ["Veterinary Surgery", "Internal Medicine", "Animal Nutrition"],
        "knowsAbout": ["Small Animal Surgery", "Diagnostic Imaging", "Preventive Healthcare"],
        "alumniOf": "Maharashtra Animal & Fishery Sciences University",
        "hasCredential": "MSVC9548"
      }}
    />
    {/* Hero Section */}
    <section className="relative bg-secondary/50 py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 60%)" }}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/10 px-4 py-1.5 rounded-full mb-5">
            <Stethoscope className="h-3.5 w-3.5" /> Our Lead Specialist
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-bold">
            Meet Our Doctor
          </h1>
          <div className="section-divider mt-4" />
          <p className="text-muted-foreground max-w-lg mx-auto mt-4 text-base">
            Dedicated expertise, surgical excellence, and heartfelt care — all under one roof.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Main Profile Section */}
    <section className="container mx-auto px-4 py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* Left – Photo & Quick Stats */}
          <motion.div
            className="lg:col-span-2 flex flex-col gap-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Photo Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl premium-border">
              <div className="relative h-[420px]">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                {/* Clinic Logo */}
                <div className="absolute top-4 left-4 h-14 w-14 rounded-xl overflow-hidden shadow-lg bg-white/90 backdrop-blur-sm p-1">
                  <img src={logoImg} alt="faunaPetcare Clinic" className="w-full h-full object-cover" />
                </div>
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h2 className="font-heading text-2xl font-bold leading-tight">{doctor.name}</h2>
                  <p className="text-sm text-white/80 mt-0.5">{doctor.role}</p>
                </div>
              </div>
            </div>

            {/* Stat Pills */}
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center gap-1 rounded-xl bg-primary/10 p-3 text-center">
                <HeartPulse className="h-4 w-4 text-primary" />
                <span className="font-heading font-bold text-lg leading-none">{doctor.rating}</span>
                <span className="text-[11px] text-muted-foreground">Rating</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-primary/10 p-3 text-center">
                <Award className="h-4 w-4 text-primary" />
                <span className="font-heading font-bold text-lg leading-none">{doctor.experience}</span>
                <span className="text-[11px] text-muted-foreground">Exp.</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-xl bg-primary/10 p-3 text-center">
                <Star className="h-4 w-4 text-primary" />
                <span className="font-heading font-bold text-lg leading-none">{doctor.reviews}</span>
                <span className="text-[11px] text-muted-foreground">Reviews</span>
              </div>
            </div>

            {/* Contact / Location */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                {doctor.location}
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 text-primary shrink-0" />
                Mon – Sat · 9:00 AM – 7:00 PM
              </div>
              <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                +91 98765 43210
              </div>
            </div>

            {/* Registration & Professional Title */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 flex flex-col gap-3">
              <div className="flex items-start gap-2.5">
                <BadgeCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-primary uppercase tracking-wide">Veterinary Council Registration</p>
                  <p className="text-sm font-bold text-foreground mt-0.5">Reg. No: {doctor.registrationNumber}</p>
                </div>
              </div>
              <div className="border-t border-primary/20 pt-3">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">Professional Title</p>
                <p className="text-sm text-foreground leading-relaxed">{doctor.professionalTitle}</p>
              </div>
            </div>
          </motion.div>

          {/* Right – Bio & Details */}
          <motion.div
            className="lg:col-span-3 flex flex-col gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Tagline */}
            <div>
              <p className="text-primary font-medium italic text-base mb-3">"{doctor.tagline}"</p>
              <p className="text-muted-foreground leading-relaxed text-sm whitespace-pre-line">{doctor.about}</p>
            </div>

            {/* Qualifications */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" /> Qualifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {doctor.qualifications.map((q) => (
                  <span key={q} className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
                    {q}
                  </span>
                ))}
              </div>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-3 flex items-center gap-2">
                <Stethoscope className="h-4 w-4 text-primary" /> Areas of Expertise
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {doctor.specializations.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 rounded-lg bg-secondary/60 hover:bg-primary/10 transition-colors px-3 py-2.5 text-sm font-medium"
                  >
                    <Icon className="h-3.5 w-3.5 text-primary shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights */}
            <div>
              <h4 className="font-heading font-semibold text-base mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" /> Career Highlights
              </h4>
              <ul className="flex flex-col gap-2.5">
                {doctor.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="flex gap-3 flex-wrap mt-2">
              <a
                href="/book-appointment"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-sm font-semibold shadow-md hover:opacity-90 transition-opacity"
              >
                <Calendar className="h-4 w-4" /> Book Appointment
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-2.5 text-sm font-semibold hover:bg-secondary transition-colors"
              >
                <Phone className="h-4 w-4" /> Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Review Strip */}
    <section className="bg-primary/5 border-t border-border py-10">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm italic max-w-lg mx-auto">
            "Dr. Ruchali's dedication and care for our furry family member was truly beyond words. She's not just a great vet — she's a great human being."
          </p>
          <p className="mt-3 text-xs font-semibold text-primary">— Priya S., Pune · Verified Patient</p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Doctors;