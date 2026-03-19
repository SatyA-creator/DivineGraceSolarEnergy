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

     <section className="section-padding solar-section relative overflow-hidden">
  <div className="container mx-auto max-w-4xl px-6">

    <ScrollReveal>
      <div className="glass-card p-8 sm:p-12 rounded-3xl">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="gradient-text font-semibold uppercase text-sm tracking-widest mb-2">
            CONTACT NOW
          </p>
          <h2 className="font-heading font-extrabold text-3xl md:text-5xl text-foreground">
            Get In Touch With Us
          </h2>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                id="name"
                required
                placeholder="Name"
                className="h-14 rounded-xl bg-muted/40 border border-border focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <Input
                id="email"
                type="email"
                required
                placeholder="Email"
                className="h-14 rounded-xl bg-muted/40 border border-border focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <Input
                id="company"
                placeholder="Phone"
                className="h-14 rounded-xl bg-muted/40 border border-border focus:ring-2 focus:ring-accent"
              />
            </div>
            <div>
              <Select>
                <SelectTrigger className="h-14 rounded-xl bg-muted/40 border border-border focus:ring-2 focus:ring-accent">
                  <SelectValue placeholder="Subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exploring">Exploring Opportunities</SelectItem>
                  <SelectItem value="serious">Serious Investor</SelectItem>
                  <SelectItem value="partner">Strategic Partner</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <Textarea
              id="message"
              rows={6}
              placeholder="Write a Message"
              className="rounded-2xl bg-muted/40 border border-border focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Button */}
          <div className="text-center pt-4">
            <Button
              type="submit"
              disabled={sending}
              className="px-10 py-6 rounded-full font-heading font-semibold 
              gradient-button hover:opacity-90 transition"
            >
              {sending ? "Sending..." : (
                <>
                  Submit Now
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>

        </form>

      </div>
    </ScrollReveal>

  </div>
</section>
    </>
  );
}
