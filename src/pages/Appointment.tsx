import { useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarIcon,
  CheckCircle2,
  Shield,
  Clock,
  HeartPulse,
  Sparkles,
  PawPrint,
  User,
  Phone,
  MessageSquare,
  ChevronRight,
  Star,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const highlights = [
  { icon: Shield, label: "Trusted by pet parents", sub: "Quality care & hygiene" },
  { icon: Clock, label: "Flexible timings", sub: "Morning & evening slots" },
  { icon: HeartPulse, label: "Experienced care", sub: "10+ years of practice" },
  { icon: Star, label: "Happy pets & owners", sub: "Care with compassion" },
];

const steps = ["Pet Owner Info", "Pet Details", "Schedule"];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "2:00 PM", "2:30 PM",
  "3:00 PM", "3:30 PM", "4:00 PM", "5:00 PM",
];

const Appointment = () => {
  const [date, setDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    ownerName: '',
    phone: '',
    email: '',
    petName: '',
    petType: '',
    breed: '',
    age: '',
    serviceNeeded: '',
    reason: ''
  });

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime) {
      alert("Please select a date and time for your appointment.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/faunapetcareclinic@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: `New Appointment Request from ${formData.ownerName || 'Client'}`,
          _template: "table",
          "Owner Name": formData.ownerName,
          "Phone": formData.phone,
          "Email": formData.email,
          "Pet Name": formData.petName,
          "Pet Type": formData.petType,
          "Breed": formData.breed,
          "Age": formData.age,
          "Service Needed": formData.serviceNeeded,
          "Additional Notes": formData.reason,
          "Preferred Date": format(date, "EEEE, MMMM d, yyyy"),
          "Preferred Time": selectedTime
        })
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("There was a problem submitting the form. Please try again or contact us directly.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting the form. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <Layout>
        <SEO
          title="Appointment Confirmed — Thank You"
          description="Your appointment at faunaPetcare Clinic has been booked successfully. We'll contact you shortly to confirm."
          canonical="/appointment"
        />
        <div className="min-h-[80vh] flex items-center justify-center container mx-auto px-4 py-20">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-center max-w-lg"
          >
            {/* Animated success ring */}
            <div className="relative mx-auto mb-8 w-28 h-28">
              <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" style={{ animationDuration: "2s" }} />
              <div className="relative h-28 w-28 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                <CheckCircle2 className="h-12 w-12 text-primary" />
              </div>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-3">
              You're all set!
            </h2>
            <p className="text-muted-foreground mb-2 text-base">
              Your appointment request has been received.
            </p>
            <p className="text-muted-foreground mb-10 text-sm">
              Our team will call you within 2 hours to confirm your visit. Thank you for choosing{" "}
              <span className="text-primary font-semibold">faunaPetcare</span>!
            </p>

            <div className="rounded-2xl border border-border bg-card p-5 mb-8 text-left flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 text-primary shrink-0" />
                {date ? format(date, "EEEE, MMMM d, yyyy") : "Date to be confirmed"}
                {selectedTime && <span className="text-foreground font-medium">· {selectedTime}</span>}
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                Confirmation call incoming
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <HeartPulse className="h-4 w-4 text-primary shrink-0" />
                Dr. Ruchali Ghatge — Chief Veterinarian
              </div>
            </div>

            <Button
              onClick={() => { setSubmitted(false); setStep(0); setDate(undefined); setSelectedTime(undefined); }}
              className="rounded-full px-8 py-5 text-sm font-semibold"
            >
              Book Another Appointment
            </Button>
          </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title="Book Appointment — Schedule Your Visit"
        description="Book an appointment at faunaPetcare Clinic for premium veterinary care. Schedule health checkups, vaccinations, surgery consultations, and more online."
        canonical="/appointment"
      />
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 60%, hsl(var(--primary)) 0%, transparent 55%), radial-gradient(circle at 75% 30%, hsl(var(--accent, var(--primary))) 0%, transparent 50%)",
          }}
        />
        {/* Decorative dots */}
        <div className="absolute top-10 right-10 opacity-10 pointer-events-none hidden md:block">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="h-1.5 w-1.5 rounded-full bg-primary" />
            ))}
          </div>
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-5"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Schedule a Visit
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-4"
          >
            Book an Appointment
          </motion.h1>
          <div className="section-divider mt-4 mb-5" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-muted-foreground max-w-lg mx-auto"
          >
            Fill in the details below and our team will confirm your visit promptly — usually within 2 hours.
          </motion.p>
        </div>
      </section>

      {/* Trust highlights */}
      <section className="container mx-auto px-4 pb-10 max-w-3xl mt-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3"
        >
          {highlights.map((h) => {
            const Icon = h.icon;
            return (
              <div
                key={h.label}
                className="flex flex-col items-center gap-1.5 rounded-xl border border-border bg-card p-3.5 text-center"
              >
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <span className="text-xs font-semibold text-foreground leading-tight">{h.label}</span>
                <span className="text-[11px] text-muted-foreground">{h.sub}</span>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Form */}
      <section className="container mx-auto px-4 pb-20 max-w-3xl">
        {/* Step indicator */}
        <div className="flex items-center justify-center gap-0 mb-8">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center">
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                className={cn(
                  "flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                  i === step
                    ? "bg-primary text-primary-foreground"
                    : i < step
                      ? "text-primary cursor-pointer hover:bg-primary/10"
                      : "text-muted-foreground cursor-default"
                )}
              >
                <span className={cn(
                  "h-5 w-5 rounded-full text-[11px] font-bold flex items-center justify-center",
                  i === step ? "bg-white/20" : i < step ? "bg-primary/20" : "bg-muted"
                )}>
                  {i < step ? "✓" : i + 1}
                </span>
                {s}
              </button>
              {i < steps.length - 1 && (
                <ChevronRight className="h-3.5 w-3.5 text-border mx-0.5" />
              )}
            </div>
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
        >
          <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">

            {/* Step 0 – Owner Info */}
            {step === 0 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(1); }} className="p-7 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base">Pet Owner Information</h3>
                    <p className="text-xs text-muted-foreground">We'll use this to confirm your appointment</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="owner" className="text-sm font-medium">Full Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="owner"
                      value={formData.ownerName}
                      onChange={(e) => updateFormData("ownerName", e.target.value)}
                      placeholder="e.g. Priya Sharma"
                      required
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">Phone Number <span className="text-destructive">*</span></Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      placeholder="+91 98765 43210"
                      required
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email Address <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full mt-7 rounded-full h-12 text-sm font-semibold"
                >
                  Continue — Pet Details
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </form>
            )}

            {/* Step 1 – Pet Details */}
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="p-7 md:p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <PawPrint className="h-4.5 w-4.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-base">About Your Pet</h3>
                    <p className="text-xs text-muted-foreground">Help us prepare for your pet's visit</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="petName" className="text-sm font-medium">Pet's Name <span className="text-destructive">*</span></Label>
                    <Input
                      id="petName"
                      value={formData.petName}
                      onChange={(e) => updateFormData("petName", e.target.value)}
                      placeholder="e.g. Bruno"
                      required
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">Pet Type <span className="text-destructive">*</span></Label>
                    <Select value={formData.petType} onValueChange={(v) => updateFormData("petType", v)} required>
                      <SelectTrigger className="h-11 rounded-xl bg-background border-border/70">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="dog">🐶 Dog</SelectItem>
                        <SelectItem value="cat">🐱 Cat</SelectItem>
                        <SelectItem value="bird">🐦 Bird</SelectItem>
                        <SelectItem value="rabbit">🐰 Rabbit</SelectItem>
                        <SelectItem value="other">🐾 Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="breed" className="text-sm font-medium">
                      Breed <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="breed"
                      value={formData.breed}
                      onChange={(e) => updateFormData("breed", e.target.value)}
                      placeholder="e.g. Golden Retriever"
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="age" className="text-sm font-medium">
                      Age <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Input
                      id="age"
                      value={formData.age}
                      onChange={(e) => updateFormData("age", e.target.value)}
                      placeholder="e.g. 2 years"
                      className="h-11 rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label className="text-sm font-medium">Service Needed <span className="text-destructive">*</span></Label>
                    <Select value={formData.serviceNeeded} onValueChange={(v) => updateFormData("serviceNeeded", v)} required>
                      <SelectTrigger className="h-11 rounded-xl bg-background border-border/70">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Check-up / Wellness</SelectItem>
                        <SelectItem value="vaccination">Vaccination</SelectItem>
                        <SelectItem value="surgery">Surgery Consultation</SelectItem>
                        <SelectItem value="grooming">Grooming</SelectItem>
                        <SelectItem value="dental">Dental Care</SelectItem>
                        <SelectItem value="emergency">Emergency</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 sm:col-span-2">
                    <Label htmlFor="reason" className="text-sm font-medium">
                      Additional Notes <span className="text-muted-foreground font-normal">(optional)</span>
                    </Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => updateFormData("reason", e.target.value)}
                      placeholder="Any symptoms, concerns, or things we should know beforehand..."
                      rows={3}
                      className="rounded-xl bg-background border-border/70 focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-7">
                  <Button
                    type="button"
                    variant="outline"
                    className="rounded-full h-12 px-6 text-sm"
                    onClick={() => setStep(0)}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 rounded-full h-12 text-sm font-semibold"
                  >
                    Continue — Schedule
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </form>
            )}

            {/* Step 2 – Schedule */}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <div className="p-7 md:p-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                      <CalendarIcon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-base">Choose a Date & Time</h3>
                      <p className="text-xs text-muted-foreground">Mon – Sat · 9:00 AM – 7:00 PM</p>
                    </div>
                  </div>

                  {/* Calendar */}
                  <div className="space-y-2 mb-6">
                    <Label className="text-sm font-medium">Preferred Date <span className="text-destructive">*</span></Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal h-11 rounded-xl bg-background border-border/70",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "EEEE, MMMM d, yyyy") : "Pick a date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          disabled={(d) => d < new Date() || d.getDay() === 0}
                          initialFocus
                          className="p-3 pointer-events-auto"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time slots */}
                  <div className="space-y-2 mb-6">
                    <Label className="text-sm font-medium">Preferred Time Slot <span className="text-destructive">*</span></Label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedTime(t)}
                          className={cn(
                            "rounded-xl border py-2 text-xs font-medium transition-all",
                            selectedTime === t
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground"
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Summary strip */}
                  {(date || selectedTime) && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-primary/5 border border-primary/20 p-4 flex flex-wrap gap-4 mb-6 text-sm"
                    >
                      {date && (
                        <div className="flex items-center gap-2 text-foreground">
                          <CalendarIcon className="h-3.5 w-3.5 text-primary" />
                          {format(date, "MMM d, yyyy")}
                        </div>
                      )}
                      {selectedTime && (
                        <div className="flex items-center gap-2 text-foreground">
                          <Clock className="h-3.5 w-3.5 text-primary" />
                          {selectedTime}
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <HeartPulse className="h-3.5 w-3.5 text-primary" />
                        Dr. Ruchali Ghatge
                      </div>
                    </motion.div>
                  )}

                  <div className="flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="rounded-full h-12 px-6 text-sm"
                      onClick={() => setStep(1)}
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={!date || !selectedTime || isSubmitting}
                      className="flex-1 rounded-full h-12 text-sm font-semibold shadow-lg shadow-primary/20"
                    >
                      {isSubmitting ? "Submitting..." : (
                        <>
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Confirm Appointment
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>

        {/* Fine print */}
        <p className="text-center text-xs text-muted-foreground mt-5">
          By submitting, you agree to be contacted by our team for confirmation.
          Walk-ins are also welcome during clinic hours.
        </p>
      </section>
    </Layout>
  );
};

export default Appointment;