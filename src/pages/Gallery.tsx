"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Layout from "@/components/Layout"
import SEO from "@/components/SEO"
import { Card } from "@/components/ui/card"
import { 
  Stethoscope, 
  Building2, 
  PawPrint, 
  Scissors, 
  Users, 
  X, 
  ChevronLeft, 
  ChevronRight,
  ZoomIn,
  Grid3X3,
  Layers
} from "lucide-react"

// Existing images
import g1 from "@/assets/service-checkup.webp"
import g2 from "@/assets/service-vaccination.webp"
import g3 from "@/assets/service-grooming.webp"
import g4 from "@/assets/service-surgery.webp"
import hero from "@/assets/hero-pets.webp"
import heroPremium from "@/assets/hero-premium.webp"
import galleryPuppy from "@/assets/gallery-puppy.webp"
import galleryCat from "@/assets/gallery-cat.webp"
import galleryGrooming from "@/assets/gallery-grooming.webp"
import galleryFamily from "@/assets/gallery-family.webp"
import doctorPremium from "@/assets/doctor-premium.webp"
import doctor from "@/assets/doctor.webp"
import groomingService from "@/assets/Grooming.webp"
import vaccinationService from "@/assets/Vaccination.webp"
import doctorImage from "@/assets/docImage.webp"
import healthcheckup from "@/assets/healtcheckup.webp"

// Checkup Images - Doctor (18 images)
import checkup1 from "@/assets/Checkup-Images-Doctor (1).webp"
import checkup2 from "@/assets/Checkup-Images-Doctor (2).webp"
import checkup3 from "@/assets/Checkup-Images-Doctor (3).webp"
import checkup4 from "@/assets/Checkup-Images-Doctor (4).webp"
import checkup5 from "@/assets/Checkup-Images-Doctor (5).webp"
import checkup6 from "@/assets/Checkup-Images-Doctor (6).webp"
import checkup7 from "@/assets/Checkup-Images-Doctor (7).webp"
import checkup8 from "@/assets/Checkup-Images-Doctor (8).webp"
import checkup9 from "@/assets/Checkup-Images-Doctor (9).webp"
import checkup10 from "@/assets/Checkup-Images-Doctor (10).webp"
import checkup12 from "@/assets/Checkup-Images-Doctor (12).webp"
import checkup13 from "@/assets/Checkup-Images-Doctor (13).webp"
import checkup14 from "@/assets/Checkup-Images-Doctor (14).webp"
import checkup15 from "@/assets/Checkup-Images-Doctor (15).webp"
import checkup16 from "@/assets/Checkup-Images-Doctor (16).webp"
import checkup17 from "@/assets/Checkup-Images-Doctor (17).webp"
import checkup18 from "@/assets/Checkup-Images-Doctor (18).webp"

// Categories with icons
const categories = [
  { id: "all", label: "All Photos", icon: Grid3X3 },
  { id: "checkup", label: "Checkups", icon: Stethoscope },
  { id: "clinic", label: "Our Clinic", icon: Building2 },
  { id: "pets", label: "Happy Pets", icon: PawPrint },
  { id: "services", label: "Services", icon: Scissors },
  { id: "team", label: "Our Team", icon: Users },
]

// Images with categories
const allImages = [
  // Checkup & Treatment Images (18 images)
  { src: checkup1, label: "Patient Checkup", category: "checkup" },
  { src: checkup2, label: "Veterinary Examination", category: "checkup" },
  { src: checkup3, label: "Health Assessment", category: "checkup" },
  { src: checkup4, label: "Medical Consultation", category: "checkup" },
  { src: checkup5, label: "Pet Wellness", category: "checkup" },
  { src: checkup6, label: "Clinical Care", category: "checkup" },
  { src: checkup7, label: "Diagnostic Exam", category: "checkup" },
  { src: checkup8, label: "Treatment Session", category: "checkup" },
  { src: checkup9, label: "Professional Care", category: "checkup" },
  { src: checkup10, label: "Health Screening", category: "checkup" },
  { src: checkup12, label: "Veterinary Visit", category: "checkup" },
  { src: checkup13, label: "Pet Examination", category: "checkup" },
  { src: checkup14, label: "Medical Checkup", category: "checkup" },
  { src: checkup15, label: "Clinical Assessment", category: "checkup" },
  { src: checkup16, label: "Health Consultation", category: "checkup" },
  { src: checkup17, label: "Patient Care", category: "checkup" },
  { src: checkup18, label: "Wellness Check", category: "checkup" },
  
  // Clinic & Facility
  { src: hero, label: "Our Clinic", category: "clinic" },
  { src: heroPremium, label: "Premium Facility", category: "clinic" },
  
  // Pet Care
  { src: galleryPuppy, label: "Puppy Care", category: "pets" },
  { src: galleryCat, label: "Cat Wellness", category: "pets" },
  { src: galleryFamily, label: "Happy Families", category: "pets" },
  
  // Services
  { src: g1, label: "Health Checkup", category: "services" },
  { src: g2, label: "Vaccination", category: "services" },
  { src: g3, label: "Grooming Spa", category: "services" },
  { src: g4, label: "Surgical Suite", category: "services" },
  { src: galleryGrooming, label: "Premium Grooming", category: "services" },
  { src: groomingService, label: "Professional Grooming", category: "services" },
  { src: vaccinationService, label: "Vaccination Services", category: "services" },
  { src: healthcheckup, label: "Comprehensive Checkups", category: "services" },
  
  // Doctors & Staff
  { src: doctorPremium, label: "Expert Doctors", category: "team" },
  { src: doctor, label: "Veterinary Care", category: "team" },
  { src: doctorImage, label: "Compassionate Care", category: "team" },
]

// Lightbox Component
function Lightbox({ 
  image, 
  onClose, 
  onPrev, 
  onNext, 
  hasPrev, 
  hasNext 
}: { 
  image: typeof allImages[0]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation buttons */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      )}
      
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      )}

      {/* Main image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image.src}
          alt={image.label}
          className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
        />
        {/* Image info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
          <p className="text-white font-medium text-lg">{image.label}</p>
        </div>
      </motion.div>

      {/* Image counter */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        Press arrow keys to navigate • ESC to close
      </div>
    </motion.div>
  )
}

// Gallery Card Component
function GalleryCard({ 
  image, 
  index, 
  onClick 
}: { 
  image: typeof allImages[0]
  index: number
  onClick: () => void
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className="group cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative">
        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image.src}
            alt={image.label}
            loading="lazy"
            className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Zoom icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <ZoomIn className="w-6 h-6 text-white" />
            </div>
          </div>
          
          {/* Category badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-white rounded-full capitalize">
              {image.category}
            </span>
          </div>
        </div>
        
        {/* Card content */}
        <div className="p-4 bg-gradient-to-br from-card to-card/50">
          <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">
            {image.label}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
            <Layers className="w-3 h-3" />
            Click to enlarge
          </p>
        </div>
        
        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof allImages[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  // Filter images by category
  const filteredImages = activeCategory === "all" 
    ? allImages 
    : allImages.filter(img => img.category === activeCategory)

  // Get category count
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return allImages.length
    return allImages.filter(img => img.category === categoryId).length
  }

  // Lightbox handlers
  const openLightbox = (image: typeof allImages[0], index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const showPrev = () => {
    if (lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1
      setLightboxIndex(newIndex)
      setLightboxImage(filteredImages[newIndex])
    }
  }

  const showNext = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      const newIndex = lightboxIndex + 1
      setLightboxIndex(newIndex)
      setLightboxImage(filteredImages[newIndex])
    }
  }

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!lightboxImage) return
    if (e.key === "ArrowLeft") showPrev()
    if (e.key === "ArrowRight") showNext()
    if (e.key === "Escape") closeLightbox()
  }

  // Add keyboard listener
  useState(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => window.removeEventListener("keydown", handleKeyDown)
    }
  })

  return (
    <Layout>
      <SEO 
        title="Gallery — Our Clinic & Happy Pets"
        description="Browse photos of our premium veterinary clinic, expert staff, and happy pets at faunaPetcare Clinic in Hadapsar, Pune."
        canonical="/gallery"
      />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/10 to-primary/5" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23primary' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <PawPrint className="w-4 h-4" />
              Our Visual Journey
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
              Clinic Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our state-of-the-art facility, meet our compassionate team, 
              and see the happy tails of pets we've cared for.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon
              const isActive = activeCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300
                    ${isActive 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                  <span className={`
                    ml-1 px-2 py-0.5 text-xs rounded-full
                    ${isActive ? "bg-white/20" : "bg-primary/10"}
                  `}>
                    {getCategoryCount(category.id)}
                  </span>
                  
                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <GalleryCard
                key={`${image.category}-${index}`}
                image={image}
                index={index}
                onClick={() => openLightbox(image, index)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <PawPrint className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
            <p className="text-muted-foreground">No images found in this category.</p>
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={closeLightbox}
            onPrev={showPrev}
            onNext={showNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filteredImages.length - 1}
          />
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Photos", value: allImages.length },
              { label: "Happy Pets", value: "500+" },
              { label: "Years Experience", value: "10+" },
              { label: "Services", value: "8+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
