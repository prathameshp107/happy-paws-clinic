import { motion, useScroll, useTransform } from "framer-motion";

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
        {/* Button circle with WhatsApp brand green */}
        <div className="h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl shadow-[#25D366]/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#25D366]/60">
          {/* Official WhatsApp icon — white on transparent, fills the circle */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-9 w-9"
            fill="none"
          >
            {/* Speech bubble body */}
            <path
              fill="white"
              d="M24 4C13 4 4 13 4 24c0 3.6 1 7 2.7 9.9L4 44l10.4-2.7C17.1 43 20.5 44 24 44c11 0 20-9 20-20S35 4 24 4z"
            />
            {/* Phone handset cutout in green */}
            <path
              fill="#25D366"
              d="M19.2 15c-.4 0-.8.1-1.1.5l-1.2 1.3c-.7.8-1 1.8-.7 2.8.4 1.5 1.4 4.2 3.6 6.8 2.5 3 5.5 4.7 7.1 5.4 1 .4 2.1.2 2.9-.5l1.1-1c.5-.4.6-1.1.3-1.6l-2-3c-.3-.5-.9-.7-1.4-.5l-1.8.7c-.3.1-.6 0-.8-.2-1-1.1-1.8-2.4-2.2-3.6-.1-.3 0-.6.2-.8l1.2-1.2c.5-.5.6-1.2.3-1.8l-1.5-3.3c-.2-.5-.7-.8-1.2-.8h-.8z"
            />
          </svg>
        </div>

        {/* Tooltip */}
        <div className="absolute left-16 flex items-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 group-hover:translate-x-0">
          <div className="bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-xl whitespace-nowrap shadow-lg">
            Chat with us on WhatsApp
            {/* Arrow pointing left */}
            <span className="absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-gray-900 rotate-45 rounded-sm" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;