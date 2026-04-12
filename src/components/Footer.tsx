import { Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo.jpeg";

const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const Footer = () => (
  <footer className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/30" />
    <div className="relative container mx-auto px-4 pt-20 pb-8">
      {/* Newsletter CTA */}
      <div className="glass-card-strong rounded-3xl p-10 md:p-14 mb-16 text-center">
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">Stay Connected</h3>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">Get pet care tips, special offers, and updates from faunaPetcare.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 h-12 rounded-full px-6 bg-background/50 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <Button className="rounded-full px-8 h-12 shadow-lg shadow-primary/20">
            Subscribe <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl overflow-hidden shadow-lg">
              <img src={logoImg} alt="faunaPetcare Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-lg font-bold">faunaPetcare</span>
              <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Clinic</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-5">
            Premium veterinary care crafted with love. Where every pet is treated like royalty.
          </p>
          <div className="flex gap-3">
            <a href="#" className="h-10 w-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-10 w-10 rounded-xl glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-[0.15em] text-muted-foreground">Navigation</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            {["Home", "About", "Services", "Doctors", "Pricing", "FAQ", "Gallery", "Contact"].map((item) => (
              <Link key={item} to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="hover:text-primary transition-colors duration-300">
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-[0.15em] text-muted-foreground">Services</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>Health Checkups</span>
            <span>Vaccination</span>
            <span>Surgery</span>
            <span>Grooming</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-5 text-sm uppercase tracking-[0.15em] text-muted-foreground">Get in Touch</h4>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            <a href="tel:+919923342709" className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
              <Phone className="h-4 w-4 shrink-0" /> +91 99233 42709
            </a>
            <a href="mailto:hello@faunapetcare.com" className="flex items-center gap-3 hover:text-primary transition-colors duration-300">
              <Mail className="h-4 w-4 shrink-0" /> hello@faunapetcare.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-1 shrink-0" />
              <span className="leading-relaxed">
                Shop No. 7, Eraville Complex,<br />
                Survey No. 182, Beside Tupe Corner,<br />
                Tupe Patil Road, Behind Amanora Mall,<br />
                Hadapsar, Pune, Maharashtra - 411028, India
              </span>
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <span>© 2026 faunaPetcare Clinic. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <span>Crafted with ♥ for your furry family.</span>
          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Go to top"
          >
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
  </footer>
);

export default Footer;
