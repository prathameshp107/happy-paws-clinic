import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.05], [0, 1]);

  return (
    <motion.a
      href="https://wa.me/919923342709?text=Hi%20faunaPetcare!%20I'd%20like%20to%20book%20an%20appointment."
      target="_blank"
      rel="noopener noreferrer"
      style={{ opacity }}
      className="fixed bottom-8 left-8 z-50 group"
    >
      <div className="relative flex items-center">
        <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/30 transition-all duration-300 group-hover:scale-110">
          <MessageCircle className="h-6 w-6 text-white" />
        </div>
        <span className="absolute left-16 bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
