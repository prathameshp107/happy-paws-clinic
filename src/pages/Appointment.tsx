import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle2, Shield, Clock, HeartPulse, Sparkles } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const highlights = [
  { icon: Shield, label: "Trusted by 15,000+ pets" },
  { icon: Clock, label: "Quick confirmation" },
  { icon: HeartPulse, label: "Expert veterinarians" },
];

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-32 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-12 w-12 text-primary" />
            </div>
            <h2 className="font-heading text-5xl font-bold text-foreground mb-4">Appointment Requested!</h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg">We'll call you shortly to confirm your visit. Thank you for choosing fonaPetcare!</p>
            <Button onClick={() => setSubmitted(false)} className="rounded-full px-10 py-6 text-base">Book Another</Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
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
            Schedule a Visit
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-5xl md:text-7xl font-bold text-foreground mb-5">
            Book an Appointment
          </motion.h1>
          <div className="section-divider mt-5 mb-6" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-muted-foreground max-w-xl mx-auto text-lg">
            Fill in the details and our team will confirm your visit promptly.
          </motion.p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap justify-center gap-8 mb-12">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
              <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <h.icon className="h-4 w-4 text-primary" />
              </div>
              {h.label}
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <Card className="border-0 glass-card-strong premium-border hover-glow">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label htmlFor="owner" className="text-foreground font-medium">Owner Name</Label>
                    <Input id="owner" placeholder="Your full name" required className="h-13 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2.5">
                    <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (234) 567-890" required className="h-13 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2.5">
                    <Label htmlFor="petName" className="text-foreground font-medium">Pet Name</Label>
                    <Input id="petName" placeholder="Your pet's name" required className="h-13 rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                  </div>
                  <div className="space-y-2.5">
                    <Label className="text-foreground font-medium">Pet Type</Label>
                    <Select required>
                      <SelectTrigger className="h-13 rounded-xl bg-background/50 border-border/50"><SelectValue placeholder="Select type" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">Dog</SelectItem>
                        <SelectItem value="cat">Cat</SelectItem>
                        <SelectItem value="bird">Bird</SelectItem>
                        <SelectItem value="rabbit">Rabbit</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2.5">
                  <Label className="text-foreground font-medium">Preferred Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-13 rounded-xl bg-background/50 border-border/50", !date && "text-muted-foreground")}>
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2.5">
                  <Label htmlFor="reason" className="text-foreground font-medium">Reason for Visit</Label>
                  <Textarea id="reason" placeholder="Describe the reason for your visit..." rows={4} className="rounded-xl bg-background/50 border-border/50 focus:border-primary/50 transition-colors" />
                </div>
                <Button type="submit" className="w-full rounded-full h-14 text-base shadow-lg shadow-primary/20" size="lg">
                  Request Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Appointment;
