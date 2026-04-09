import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const contactInfo = [
  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: Mail, label: "Email", value: "hello@fonapetcare.com", href: "mailto:hello@fonapetcare.com" },
  { icon: MapPin, label: "Address", value: "123 Pet Street, Furry Town, CA 90210" },
  { icon: Clock, label: "Hours", value: "Mon–Fri: 9am–8pm | Sat: 9am–5pm | Sun: 10am–2pm" },
];

const Contact = () => (
  <Layout>
    <section className="bg-secondary/50 py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
          Reach Out
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
          Contact Us
        </motion.h1>
        <div className="section-divider mt-4 mb-6" />
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">We'd love to hear from you. Reach out anytime!</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
        {contactInfo.map((c, i) => (
          <motion.div key={c.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
            <Card className="card-elevated border-0 h-full text-center premium-border">
              <CardContent className="p-7">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <c.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{c.label}</h3>
                {c.href ? (
                  <a href={c.href} className="text-sm text-primary hover:underline">{c.value}</a>
                ) : (
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.value}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Card className="border-0 card-elevated overflow-hidden premium-border">
        <iframe
          title="fonaPetcare Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977927620115!2d-122.41941568468255!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1680000000000"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-2xl"
        />
      </Card>
    </section>
  </Layout>
);

export default Contact;
