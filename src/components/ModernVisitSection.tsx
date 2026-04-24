import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernVisitSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 20%, hsl(var(--accent)) 0%, transparent 50%)" }} />
      <div className="relative container mx-auto px-4 py-24 md:py-32 text-center text-primary-foreground">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Clock className="h-10 w-10 mx-auto mb-5 opacity-80" />
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">Visit Us Today</h2>
          <p className="opacity-70 mb-10 max-w-lg mx-auto text-lg">Your pet deserves world-class care. Walk in or book online.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-xl mx-auto mb-12">
            {[
              { day: "Mon – Saturday", time: "10:00 AM – 2:30 PM <br /> 5:00 PM – 9:30 PM" },
              { day: "Sunday", time: "6:00 PM – 8:00 PM" },
            ].map((t) => (
              <div
                key={t.day}
                className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors duration-300"
              >
                <p className="font-heading font-semibold text-base">{t.day}</p>
                <p
                  className="opacity-70 text-sm mt-1"
                  dangerouslySetInnerHTML={{ __html: t.time }}
                />
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
  );
};

export default ModernVisitSection;
