import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast({ title: "Message sent!", description: "We'll get back to you shortly." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot left-[-90px] top-10 h-56 w-56 bg-primary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get in touch to explore investment opportunities
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-lg">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" required placeholder="Your full name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="you@company.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Your company" />
              </div>
              <div className="space-y-2">
                <Label>Investment Interest</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select interest level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="exploring">Exploring Opportunities</SelectItem>
                    <SelectItem value="serious">Serious Investor</SelectItem>
                    <SelectItem value="partner">Strategic Partner</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} placeholder="Tell us about your interest..." />
              </div>
              <Button type="submit" className="w-full font-heading font-semibold" disabled={sending}>
                {sending ? "Sending..." : <>Send Message <Send className="ml-2 h-4 w-4" /></>}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
