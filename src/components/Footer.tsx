import { PawPrint, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <PawPrint className="h-6 w-6 text-primary" />
          <span className="font-heading text-lg font-bold">PawCare</span>
        </div>
        <p className="text-sm opacity-70">
          Caring for your pets like family. Premium veterinary care with love and compassion.
        </p>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <Link to="/" className="hover:opacity-100 transition-opacity">Home</Link>
          <Link to="/services" className="hover:opacity-100 transition-opacity">Services</Link>
          <Link to="/appointment" className="hover:opacity-100 transition-opacity">Book Appointment</Link>
          <Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-heading font-semibold mb-3">Contact Us</h4>
        <div className="flex flex-col gap-2 text-sm opacity-70">
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (234) 567-890</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@pawcare.vet</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Pet Street, Furry Town</span>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 text-center py-4 text-xs opacity-50">
      © 2026 PawCare Veterinary Clinic. All rights reserved.
    </div>
  </footer>
);

export default Footer;
