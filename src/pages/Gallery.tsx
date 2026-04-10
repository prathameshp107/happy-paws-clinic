import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import g1 from "@/assets/service-checkup.jpg";
import g2 from "@/assets/service-vaccination.jpg";
import g3 from "@/assets/service-grooming.jpg";
import g4 from "@/assets/service-surgery.jpg";
import hero from "@/assets/hero-pets.jpg";

const images = [hero, g1, g2, g3, g4, g1, g2, g3, g4];

const Gallery = () => (
  <Layout>
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold">
          Clinic Gallery
        </motion.h1>
        <div className="section-divider mt-4" />
        <p className="text-muted-foreground max-w-xl mx-auto mt-4">A peek into our warm, premium spaces and happy patients.</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="overflow-hidden border-0 card-elevated premium-border">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 md:h-56 object-cover" />
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;

