import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-base">f</span>
            </div>
            <span className="font-heading text-lg font-bold">fonaPetcare</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed mb-5">
            Premium veterinary care crafted with love. Where every pet is treated like royalty.
          </p>
          <div className="flex gap-3">
            <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="h-9 w-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Navigation</h4>
          <div className="flex flex-col gap-3 text-sm opacity-60">
            <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
            <Link to="/appointment" className="hover:opacity-100 transition-opacity">Book Appointment</Link>
            <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Services</h4>
          <div className="flex flex-col gap-3 text-sm opacity-60">
            <span>Health Checkups</span>
            <span>Vaccination</span>
            <span>Surgery</span>
            <span>Grooming</span>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Get in Touch</h4>
          <div className="flex flex-col gap-3 text-sm opacity-60">
            <a href="tel:+1234567890" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
              <Phone className="h-4 w-4 shrink-0" /> +1 (234) 567-890
            </a>
            <a href="mailto:hello@fonapetcare.com" className="flex items-center gap-2.5 hover:opacity-100 transition-opacity">
              <Mail className="h-4 w-4 shrink-0" /> hello@fonapetcare.com
            </a>
            <span className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 shrink-0" /> 123 Pet Street, Furry Town
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40">
        <span>© 2026 fonaPetcare Clinic. All rights reserved.</span>
        <span>Crafted with care for your furry family.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
