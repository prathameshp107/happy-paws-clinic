import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarIcon, CheckCircle2 } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

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
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>
            <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Appointment Requested!</h2>
            <p className="text-muted-foreground mb-6">We'll call you shortly to confirm. Thank you for choosing PawCare!</p>
            <Button onClick={() => setSubmitted(false)}>Book Another</Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Book an Appointment
          </motion.h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Fill in the details below and we'll get back to you to confirm your visit.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-2xl">
        <Card className="card-elevated border-0">
          <CardHeader>
            <CardTitle className="font-heading">Appointment Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="owner">Owner Name</Label>
                  <Input id="owner" placeholder="Your full name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (234) 567-890" required />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="petName">Pet Name</Label>
                  <Input id="petName" placeholder="Your pet's name" required />
                </div>
                <div className="space-y-2">
                  <Label>Pet Type</Label>
                  <Select required>
                    <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
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
                <Label>Preferred Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}>
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit</Label>
                <Textarea id="reason" placeholder="Describe the reason for your visit..." rows={4} />
              </div>
              <Button type="submit" className="w-full" size="lg">Request Appointment</Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </Layout>
  );
};

export default Appointment;
