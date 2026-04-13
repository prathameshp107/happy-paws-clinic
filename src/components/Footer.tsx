import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, ChevronUp, Clock, PawPrint } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.webp";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const navLinks = ["Home", "About", "Services", "Doctors", "Pricing", "FAQ", "Gallery", "Contact"];

const services = ["Health Checkups", "Vaccination", "Surgery", "Grooming", "Dental Care", "Emergency Care"];

const Footer = () => (
  <footer className="relative overflow-hidden border-t border-border">
    {/* Subtle background glow */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 15% 80%, hsl(var(--primary)) 0%, transparent 55%)",
      }}
    />

    <div className="relative container mx-auto px-6 mt-8">

      {/* Newsletter CTA Banner */}
      {/* <div className="relative -mt-px border border-border rounded-2xl bg-card px-8 py-8 md:py-7 my-12 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 0% 50%, hsl(var(--primary)) 0%, transparent 60%)" }}
        />
        <div className="relative flex items-center gap-4">
          <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
            <PawPrint className="h-5 w-5 text-primary" />
          </div>
          <div>
            <p className="font-heading font-semibold text-base">Stay Connected with faunaPetcare</p>
            <p className="text-xs text-muted-foreground mt-0.5">Get pet care tips, health reminders & clinic updates.</p>
          </div>
        </div>
        <div className="relative flex flex-col sm:flex-row gap-2.5 w-full md:w-auto md:max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-10 rounded-full px-5 bg-background border border-border text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Button className="rounded-full h-10 px-5 text-sm font-semibold shadow-md shadow-primary/15 shrink-0">
            Subscribe <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
          </Button>
        </div>
      </div> */}

      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-5 group w-fit">
            <div className="h-11 w-11 rounded-xl overflow-hidden shadow-md ring-1 ring-border group-hover:ring-primary/40 transition-all">
              <img src={logoImg} alt="faunaPetcare Logo" loading="lazy" width={44} height={44} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-base font-bold leading-tight">faunaPetcare</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Veterinary Clinic</span>
            </div>
          </Link>

          <p className="text-sm text-muted-foreground leading-relaxed mb-5 max-w-[240px]">
            Premium veterinary care crafted with love — where every pet is treated like family.
          </p>

          {/* Hours */}
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground mb-5">
            <div className="h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="h-3 w-3 text-primary" />
            </div>
            <span>Mon – Sat &nbsp;·&nbsp; 9:00 AM – 7:00 PM</span>
          </div>

          {/* Socials */}
          <div className="flex gap-2.5">
            <a
              href="#"
              aria-label="Instagram"
              className="h-9 w-9 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="h-9 w-9 rounded-xl border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            >
              <Facebook className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5">
            {navLinks.map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-1.5 group"
                >
                  <span className="h-px w-3 bg-border group-hover:w-4 group-hover:bg-primary transition-all duration-200" />
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Our Services
          </h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((s) => (
              <li key={s}>
                <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary/50 shrink-0" />
                  {s}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-5">
            Get in Touch
          </h4>
          <div className="flex flex-col gap-4">
            <a
              href="tel:+919923342709"
              className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
            >
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-3.5 w-3.5 text-primary" />
              </div>
              +91 99233 42709
            </a>
            <a
              href="mailto:faunapetcareclinic@gmail.com"
              className="flex items-start gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
            >
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="break-all">faunapetcareclinic@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="h-3.5 w-3.5 text-primary" />
              </div>
              <span className="leading-relaxed">
                Shop No. 7, Eraville Complex,<br />
                Survey No. 182, Tupe Patil Road,<br />
                Behind Amanora Mall, Hadapsar,<br />
                Pune – 411028, Maharashtra
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="text-xs text-muted-foreground">
          © 2026 faunaPetcare Clinic. All rights reserved.
        </span>

        <div className="flex items-center gap-4">
          <span className="text-xs text-muted-foreground hidden sm:block">
            Crafted with ♥ for your furry family.
          </span>
          <button
            onClick={scrollToTop}
            className="h-9 w-9 rounded-full border border-border bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>

    </div>
  </footer>
);

export default Footer;