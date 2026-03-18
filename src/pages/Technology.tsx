import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { Sun, ArrowUpDown, Brain, Battery, Wifi, Zap, Layers, Shield } from "lucide-react";

const features = [
  { icon: Sun, title: "Bifacial 670W+ Modules", desc: "Higher yield per acre, lower degradation" },
  { icon: ArrowUpDown, title: "Single-Axis Trackers", desc: "CUF uplift (~26%)" },
  { icon: Brain, title: "AI-Driven O&M", desc: "Predictive diagnostics for maximum uptime" },
  { icon: Battery, title: "Battery-Ready Design", desc: "Future-proof energy storage integration" },
  { icon: Wifi, title: "IoT Integration", desc: "Real-time monitoring and performance analytics" },
];

const edges = [
  { icon: Zap, title: "Faster Execution", desc: "Land readiness accelerates deployment timelines" },
  { icon: Layers, title: "Modular Scalability", desc: "Flexible architecture for phased growth" },
  { icon: Shield, title: "Technology-Enabled Reliability", desc: "System generates up to 25% more energy than conventional setups" },
];

export default function Technology() {
  return (
    <>
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot left-[-100px] top-6 h-60 w-60 bg-primary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              Technical Advantage & Differentiation
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Core <span className="gradient-text">Features</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 100}>
                <div className="glass-card p-6 text-center h-full hover-scale">
                  <f.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold text-sm mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-xs">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding solar-section-alt">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Competitive <span className="gradient-text">Edge</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {edges.map((e, i) => (
              <ScrollReveal key={e.title} delay={i * 150}>
                <div className="glass-card p-8 h-full hover-scale">
                  <e.icon className="h-10 w-10 text-accent mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{e.title}</h3>
                  <p className="text-muted-foreground text-sm">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={400}>
            <div className="mt-12 glass-card p-8 text-center">
              <p className="text-xl font-heading font-semibold gradient-text">
                Up to 25% more energy generation than conventional setups
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
