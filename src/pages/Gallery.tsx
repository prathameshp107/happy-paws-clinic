import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Card } from "@/components/ui/card";
import g1 from "@/assets/service-checkup.jpg";
import g2 from "@/assets/service-vaccination.jpg";
import g3 from "@/assets/service-grooming.jpg";
import g4 from "@/assets/service-surgery.jpg";
import hero from "@/assets/hero-pets.jpg";
import galleryPuppy from "@/assets/gallery-puppy.jpg";
import galleryCat from "@/assets/gallery-cat.jpg";
import galleryGrooming from "@/assets/gallery-grooming.jpg";
import galleryFamily from "@/assets/gallery-family.jpg";

const images = [
  { src: hero, label: "Our Clinic" },
  { src: galleryPuppy, label: "Puppy Care" },
  { src: galleryCat, label: "Cat Wellness" },
  { src: g1, label: "Health Checkup" },
  { src: galleryGrooming, label: "Premium Grooming" },
  { src: g2, label: "Vaccination" },
  { src: galleryFamily, label: "Happy Families" },
  { src: g3, label: "Grooming Spa" },
  { src: g4, label: "Surgical Suite" },
];

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
        {images.map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Card className="overflow-hidden border-0 card-elevated premium-border group relative">
              <img src={item.src} alt={item.label} loading="lazy" width={1024} height={768} className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-heading font-semibold text-sm">{item.label}</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;
