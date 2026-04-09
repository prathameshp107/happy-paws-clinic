import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle2, Shield, Clock, HeartPulse } from "lucide-react";
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
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h2 className="font-heading text-4xl font-bold text-foreground mb-3">Appointment Requested!</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">We'll call you shortly to confirm your visit. Thank you for choosing fonaPetcare!</p>
            <Button onClick={() => setSubmitted(false)} className="rounded-full px-8">Book Another</Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-accent text-sm font-semibold uppercase tracking-wider mb-3">
            Schedule a Visit
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4">
            Book an Appointment
          </motion.h1>
          <div className="section-divider mt-4 mb-6" />
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">Fill in the details and our team will confirm your visit promptly.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {highlights.map((h) => (
            <div key={h.label} className="flex items-center gap-2 text-sm text-muted-foreground">
              <h.icon className="h-4 w-4 text-primary" />
              {h.label}
            </div>
          ))}
        </div>

        <Card className="card-elevated border-0 premium-border">
          <CardContent className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="owner" className="text-foreground font-medium">Owner Name</Label>
                  <Input id="owner" placeholder="Your full name" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" required className="h-12 rounded-xl" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <Label htmlFor="petName" className="text-foreground font-medium">Pet Name</Label>
                  <Input id="petName" placeholder="Your pet's name" required className="h-12 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground font-medium">Pet Type</Label>
                  <Select required>
                    <SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Select type" /></SelectTrigger>
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
              <div className="space-y-2">
                <Label className="text-foreground font-medium">Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal h-12 rounded-xl", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" selected={date} onSelect={setDate} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason" className="text-foreground font-medium">Reason for Visit</Label>
                <Textarea id="reason" placeholder="Describe the reason for your visit..." rows={4} className="rounded-xl" />
              </div>
              <Button type="submit" className="w-full rounded-full h-12 text-base" size="lg">
                Request Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Appointment;
