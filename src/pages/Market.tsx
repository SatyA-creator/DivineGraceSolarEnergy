import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { Globe, Target, TrendingUp, MapPin, ArrowRight } from "lucide-react";

export default function Market() {
  return (
    <>
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot right-[-100px] top-14 h-64 w-64 bg-primary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              Market Analysis
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      {/* Market Size */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Market <span className="gradient-text">Size</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Globe, stat: "$300B", label: "Global Solar PV Market by 2030" },
              { icon: Target, stat: "292 GW", label: "India's Solar Target by 2030" },
              { icon: TrendingUp, stat: "1–3 GW", label: "Company Target in 5–7 Years" },
            ].map((item, i) => (
              <ScrollReveal key={item.stat} delay={i * 150}>
                <div className="glass-card p-8 text-center hover-scale">
                  <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-heading font-bold gradient-text">{item.stat}</div>
                  <p className="text-muted-foreground text-sm mt-2">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trends */}
     <section className="section-padding solar-section-alt">
  <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-10 items-center">

    {/* LEFT IMAGE */}
    <ScrollReveal>
      <div className="relative">
        <div className="rounded-[40px] overflow-hidden">
          <img
            src="/transparent-img-n1.png" // replace with your image
            alt="solar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </ScrollReveal>

    {/* RIGHT CONTENT */}
    <ScrollReveal delay={200}>
      <div>

        {/* Top Label */}
        <p className="text-primary font-semibold uppercase text-sm mb-3 tracking-wide">
          Key Trends
        </p>

        {/* Heading */}
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground">
          Key <span className="gradient-text">Trends</span>
        </h2>

        {/* Description (your same content merged cleanly) */}
        <p className="text-muted-foreground mb-6 leading-relaxed">
          Rising demand for clean energy across government and commercial sectors. 
          Strong government policies including PM KUSUM and SECI frameworks. 
          Increasing private equity interest in renewable infrastructure.
        </p>

        {/* Progress Bars */}
        <div className="space-y-6">

          {[
            { label: "Rising demand for clean energy across government and commercial sectors", value: 90 },
            { label: "Strong government policies including PM KUSUM and SECI frameworks", value: 80 },
            { label: "Increasing private equity interest in renewable infrastructure", value: 85 },
          ].map((item, i) => (
            <div key={i}>
              
              {/* Label + % */}
              <div className="flex justify-between text-sm mb-2">
                <span className="text-foreground">{item.label}</span>
                <span className="text-muted-foreground">{item.value}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-700"
                  style={{ width: `${item.value}%` }}
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </ScrollReveal>

  </div>
</section>
      {/* Expansion */}
      {/* <section className="section-padding solar-section">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Expansion <span className="gradient-text">Roadmap</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg font-heading font-semibold">
              {["Madhya Pradesh", "Rajasthan", "Gujarat", "Maharashtra"].map((state, i) => (
                <span key={state} className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>{state}</span>
                  {i < 3 && <ArrowRight className="h-5 w-5 text-accent" />}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Why MP */}
      <section className="section-padding solar-section-alt">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Why <span className="gradient-text">Madhya Pradesh</span>?
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="space-y-4">
                {[
                  "Abundant land availability for large-scale solar",
                  "Strong transmission network infrastructure",
                  "Supportive renewable energy policies",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-muted-foreground">{t}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-4">
                {[
                  { name: "Rewa Solar Park", capacity: "750MW" },
                  { name: "Khandwa Project", capacity: "600MW" },
                ].map((p) => (
                  <div key={p.name} className="glass-card p-5 hover-scale">
                    <h3 className="font-heading font-semibold">{p.name}</h3>
                    <p className="text-muted-foreground text-sm">{p.capacity} — Proven track record in the region</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
