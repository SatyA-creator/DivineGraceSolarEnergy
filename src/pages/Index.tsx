import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import {
  Zap, MapPin, Shield, TrendingUp, Sun, Battery, Brain,
  FileText, Building2, Landmark, Leaf, ArrowRight
} from "lucide-react";

function StatCounter({ value, suffix = "", label }: { value: number; suffix?: string; label: string }) {
  const { ref, isVisible } = useScrollReveal();
  const count = useAnimatedCounter(value, isVisible);
  return (
    <div ref={ref} className="glass-card p-6 text-center hover-scale">
      <div className="text-3xl md:text-4xl font-heading font-bold gradient-text">
        {count}{suffix}
      </div>
      <p className="text-muted-foreground text-sm mt-2">{label}</p>
    </div>
  );
}

export default function Index() {
  return (
    <>
      {/* Hero */}
     <section className="relative overflow-hidden bg-[#dce6ee]">
  {/* Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,#edf3f9_0%,#dce6ee_44%,#d6e0e9_100%)]" />

  <div className="relative container mx-auto grid min-h-[680px] items-center gap-8 px-6 py-10 md:grid-cols-2">
    
    {/* LEFT CONTENT (UNCHANGED) */}
    <div className="space-y-7 md:pr-8">
      <span className="inline-flex rounded bg-green-600 px-5 py-1.5 text-xs font-bold tracking-wide text-white">
        DIVINEGRACE ENERGY
      </span>

      <h1 className="font-heading text-5xl font-extrabold leading-[0.95] text-[#11427d] md:text-7xl">
        Powering <span className="text-green-600">Solar Infrastructure</span>
        <br />
        for Government Projects
      </h1>

      <p className="max-w-xl text-xl leading-relaxed text-slate-600">
        Delivering large-scale solar energy solutions with reliable PPAs,
        high-efficiency systems, and long-term investment stability.
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <Button className="h-12 rounded-none bg-green-600 px-8 text-base font-semibold text-white hover:bg-green-700">
          View Projects
        </Button>

        <Button
          variant="outline"
          className="h-12 rounded-none border-slate-300 bg-white/80 px-8 text-base font-semibold text-slate-700 hover:bg-white"
        >
          Investment Plan
        </Button>
      </div>
    </div>

    {/* RIGHT IMAGE + ANIMATION */}
    <div className="relative hidden h-full min-h-[620px] md:block">

      {/* IMAGE (BIGGER & CLEAN) */}
      <div className="absolute  bottom-10 z-10 animate-fade-in">
        <img
          src="/hero.png"
          alt="Solar energy landscape"
          className="ml-auto w-[120%] max-w-none object-contain scale-110 "
        />
      </div>

      {/* Floating clouds */}
      <div className="absolute left-[18%] top-[15%] h-8 w-20 rounded-full bg-white/55 animate-float" />
      <div className="absolute right-[16%] top-[20%] h-6 w-14 rounded-full bg-white/45 animate-float [animation-delay:600ms]" />
      <div className="absolute left-[26%] top-[30%] h-4 w-10 rounded-full bg-white/50 animate-float [animation-delay:1200ms]" />

      {/* Decorative circles */}
      <div className="absolute left-[12%] top-[22%] h-10 w-10 rounded-full border-2 border-green-400/50 animate-pulse" />
      <div className="absolute right-[10%] top-[34%] h-12 w-12 rounded-full border-2 border-emerald-500/40 animate-pulse [animation-delay:800ms]" />

    </div>
  </div>
</section>

  <ThemeMarquee />

      {/* Key Highlights */}
      <section className="section-padding solar-section">
        <div className="solar-spot left-[-120px] top-10 h-64 w-64 bg-primary/20" />
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <StatCounter value={10} suffix="MW" label="PPAs Already Secured" />
            <StatCounter value={40} suffix="MW" label="Under Submission" />
            <StatCounter value={800} label="Acres Identified" />
            <StatCounter value={230} suffix="MW" label="Land Parcel Capacity" />
          </div>
        </div>
      </section>

      {/* Investor Opportunity */}
     <section className="section-padding bg-muted/30">
  <div className="container mx-auto max-w-6xl">

    <ScrollReveal>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
        Investor Opportunity <span className="gradient-text">Overview</span>
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        DivineGrace Energy presents a compelling investment opportunity in India's rapidly expanding solar infrastructure market.
      </p>
    </ScrollReveal>

    {/* Main Card Container */}
    <div className="rounded-[30px] overflow-hidden grid md:grid-cols-3 shadow-lg">

      {[
        {
          icon: Shield,
          title: "Secured Revenue",
          desc: "10MW of PPAs already secured with 40MW under submission, ensuring stable, predictable cash flows over 25-year contracts.",
        },
        {
          icon: MapPin,
          title: "Prime Land Assets",
          desc: "800 acres identified in high-irradiance regions of Madhya Pradesh.",
        },
        {
          icon: Landmark,
          title: "Policy Advantage",
          desc: "Strategic alignment with PM KUSUM framework, guaranteeing power offtake at pre-fixed tariffs.",
        },
      ].map((item, i) => {
        const isCenter = i === 1;

        return (
          <ScrollReveal key={item.title} delay={i * 150}>
            <div
              className={`
                p-10 h-full flex flex-col justify-center transition-all duration-300
                ${isCenter 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-foreground"}
              `}
            >
              
              {/* Icon Box */}
              <div
                className={`
                  w-16 h-16 flex items-center justify-center rounded-xl mb-6
                  ${isCenter 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary text-primary-foreground"}
                `}
              >
                <item.icon className="h-8 w-8" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-semibold text-xl mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p
                className={`
                  text-sm leading-relaxed
                  ${isCenter 
                    ? "text-primary-foreground/90" 
                    : "text-muted-foreground"}
                `}
              >
                {item.desc}
              </p>

            </div>
          </ScrollReveal>
        );
      })}

    </div>
  </div>
</section>

      {/* Market Opportunity */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Market <span className="gradient-text">Opportunity</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                {[
                  "Government-backed framework enabling decentralized solar power plants",
                  "Land utilization support using barren or fallow land",
                  "Guaranteed power offtake via DISCOMs",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-3">
                    <Zap className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <p className="text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card p-6 text-center">
                  <div className="text-2xl font-heading font-bold gradient-text">₹130 Cr</div>
                  <p className="text-muted-foreground text-sm mt-1">Monthly Revenue Potential</p>
                </div>
                <div className="glass-card p-6 text-center">
                  <div className="text-2xl font-heading font-bold gradient-text">MP</div>
                  <p className="text-muted-foreground text-sm mt-1">Madhya Pradesh</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section-padding solar-section-alt">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-4">
              Superior Efficiency & <span className="gradient-text">Performance</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { stat: "~26%", label: "CUF via single axis trackers" },
              { stat: "≤0.6%", label: "Annual degradation" },
              { stat: "~9%", label: "Increase in uptime (AI & IoT)" },
              { stat: "~97%", label: "Asset availability" },
            ].map((item, i) => (
              <ScrollReveal key={item.stat} delay={i * 100}>
                <div className="glass-card p-6 text-center hover-scale">
                  <div className="text-2xl md:text-3xl font-heading font-bold gradient-text">{item.stat}</div>
                  <p className="text-muted-foreground text-xs mt-2">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
              {[
                "High-efficiency modules with ≤0.6% degradation",
                "Sun-tracking boosts yield by ~25%",
                "AI-driven diagnostics & IoT sensors",
                "Battery-ready design",
                "Hybrid deployment model",
              ].map((text) => (
                <div key={text} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Sun className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Revenue Model */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-6xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Diversified <span className="gradient-text">Revenue Streams</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, title: "PPA Contracts", desc: "Long-term agreements generating stable monthly cash flows over 25 years" },
              { icon: Building2, title: "C&I Solar Solutions", desc: "Direct supply to commercial and industrial clients" },
              { icon: Landmark, title: "Government Incentives", desc: "MNRE subsidies, VGF, accelerated depreciation" },
              { icon: Leaf, title: "Carbon Credits & RECs", desc: "Additional income through clean energy monetization" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="glass-card p-6 h-full hover-scale">
                  <item.icon className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Roadmap */}
      <section className="section-padding solar-section-alt">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Growth <span className="gradient-text">Roadmap</span>
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />
            {[
              {
                phase: "Phase 1", period: "0–12 Months",
                items: [
                  "Deploy initial 50 MW (10 MW secured + 40 MW under submission)",
                  "Mobilize 800 acres",
                  "Procure high-efficiency technology",
                  "Align DPRs",
                ],
              },
              {
                phase: "Phase 2", period: "12–36 Months",
                items: [
                  "Scale to full 230 MW capacity",
                  "Enable AI/IoT-based operations",
                  "Strengthen EPC and DISCOM partnerships",
                ],
              },
            ].map((phase, i) => (
              <ScrollReveal key={phase.phase} delay={i * 200}>
                <div className={`relative pl-12 md:pl-0 mb-12 ${i % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]"}`}>
                  <div className="absolute left-2 md:left-1/2 top-2 w-5 h-5 rounded-full bg-accent border-4 border-background -translate-x-1/2" />
                  <div className="glass-card p-6">
                    <div className="font-heading font-bold text-lg gradient-text">{phase.phase}</div>
                    <div className="text-sm text-muted-foreground mb-3">{phase.period}</div>
                    <ul className="space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm">
                          <TrendingUp className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Areas */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-7xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-3">
              Expansion <span className="gradient-text">Areas</span>
            </h2>
            <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
              Strategic expansion across high-potential solar states with strong policy and land readiness.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="hidden lg:block absolute left-[10%] right-[10%] top-[96px] border-t border-dashed border-primary/25" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {[
                { state: "Madhya Pradesh", image: "/mp.jpg" },
                { state: "Rajasthan", image: "/rajasthan.jpg" },
                { state: "Gujarat", image: "/gujrat.jpg" },
                { state: "Maharashtra", image: "/mumbai.jpg" },
              ].map((item, i) => (
                <ScrollReveal key={item.state} delay={i * 120}>
                  <div className="text-center group">
                    <div className="relative mx-auto w-[190px] h-[190px] md:w-[210px] md:h-[210px] rounded-full p-1.5 border-2 border-dashed border-primary/25 bg-white/70 shadow-[0_12px_34px_rgba(12,48,89,0.10)] transition-transform duration-500 group-hover:scale-[1.03]">
                      <img
                        src={item.image}
                        alt={item.state}
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute right-0 top-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-heading font-bold border-4 border-background">
                        {(i + 1).toString().padStart(2, "0")}
                      </div>
                    </div>

                    <h3 className="font-heading font-semibold text-2xl text-foreground mt-7 mb-3">
                      {item.state}
                    </h3>
                    <p className="text-muted-foreground text-sm flex items-center justify-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      Utility-scale solar expansion zone
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="solar-section relative py-24 overflow-hidden">
        <div className="solar-spot left-[-120px] top-[-60px] h-72 w-72 bg-secondary/20" />
        <div className="solar-spot right-[-80px] bottom-[-60px] h-64 w-64 bg-primary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal className="mx-auto max-w-4xl rounded-[28px] border border-[#d5e3f1] bg-white/90 p-10 shadow-[0_24px_54px_rgba(14,51,94,0.14)]">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-6">
              Join the Future of Clean Energy Infrastructure
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
                <Link to="/contact">Become an Investor</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted">
                <Link to="/investment">Download Investor Deck</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
