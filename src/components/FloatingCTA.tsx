import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarPlus } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.1], [20, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed bottom-8 right-8 z-50"
    >
      <Link
        to="/appointment"
        className="group flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 rounded-full shadow-2xl hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
      >
        <CalendarPlus className="h-5 w-5" />
        <span className="font-medium text-sm hidden sm:inline">Book Appointment</span>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
