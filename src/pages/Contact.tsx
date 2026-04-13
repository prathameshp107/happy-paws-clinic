import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+91 99233 42709", href: "tel:+1234567890", gradient: "from-primary/15 to-primary/5" },
  { icon: Mail, label: "Email", value: "faunapetcareclinic@gmail.com", href: "mailto:faunapetcareclinic@gmail.com", gradient: "from-accent/15 to-accent/5" },
  { icon: MapPin, label: "Address", value: "Eraville Complex, shop no. 7, survey no. 182, beside Tupe corner, tupe patil road, behind Amanora mall, Hadapsar Pune Maharashtra India 411028", gradient: "from-primary/15 to-primary/5" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9am–8pm | Sat: 9am–5pm", gradient: "from-accent/15 to-accent/5" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const Contact = () => (
  <Layout>
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-secondary/50" />
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-card text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Reach Out
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-5">
          Contact Us
        </motion.h1>
        <div className="section-divider mt-5 mb-6" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto text-lg">
          We'd love to hear from you. Reach out anytime!
        </motion.p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16 md:py-20">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {contactInfo.map((c, i) => (
          <motion.div key={c.label} variants={fadeUp} custom={i}>
            <Card className="border-0 h-full text-center premium-border hover-glow card-elevated group">
              <CardContent className="p-8">
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${c.gradient} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-500`}>
                  <c.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-3 text-lg">{c.label}</h3>
                {c.href ? (
                  <a href={c.href} className="text-sm text-primary hover:underline">{c.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.value}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
        <Card className="border-0 overflow-hidden premium-border hover-glow card-elevated">
          <iframe
            title="faunaPetcare Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d236.45107732372824!2d73.93744664168142!3d18.519082759912717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1775980478301!5m2!1sen!2sin"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl"
          />
        </Card>
      </motion.div>
    </section>
  </Layout>
);

export default Contact;
