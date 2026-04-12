import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logoImg from "@/assets/logo.webp";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/doctors", label: "Doctors" },
  { to: "/pricing", label: "Pricing" },
  { to: "/faq", label: "FAQ" },
  { to: "/gallery", label: "Gallery" },
  { to: "/appointment", label: "Book Appointment" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "glass-card-strong shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="h-12 w-12 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-lg">
            <img src={logoImg} alt="faunaPetcare Logo" loading="lazy" width={48} height={48} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-bold text-foreground leading-tight tracking-tight">
              fauna<span className="text-primary">Petcare</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-body">Clinic</span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-primary ${
                location.pathname === l.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {l.label}
              {location.pathname === l.to && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-2 right-2 h-0.5 bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-3">
            <ThemeToggle />
          </div>
          <div className="ml-2">
            <Button asChild size="sm" className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <a href="tel:+1234567890">
                <Phone className="h-3.5 w-3.5 mr-1.5" /> Call Now
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden h-10 w-10 flex items-center justify-center rounded-xl glass-card text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden glass-card-strong border-b border-border"
          >
            <div className="flex flex-col gap-1 p-4">
              {navLinks.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`py-3 px-4 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === l.to
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 mt-3">
                <ThemeToggle />
                <Button asChild size="sm" className="rounded-full flex-1 shadow-lg shadow-primary/20">
                  <a href="tel:+1234567890">
                    <Phone className="h-3.5 w-3.5 mr-1.5" /> Call Now
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
