import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { MapPin, Calendar, Clock, Zap } from "lucide-react";

function StatCard({ value, suffix = "", label, icon: Icon }) {
  return (
    <div className="relative bg-background border border-border rounded-xl p-4 sm:p-6 flex flex-col justify-between h-full group hover:shadow-md transition">

      {/* Top Row */}
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        
        {/* Value */}
        <h3 className="text-3xl sm:text-4xl font-bold text-foreground">
          {value}
          <span className="text-primary">{suffix}</span>
        </h3>

        {/* Icon */}
        <Icon className="h-10 w-10 text-muted-foreground/50 group-hover:text-primary transition" />
      </div>

      {/* Divider */}
      <div className="h-px bg-border mb-4" />

      {/* Label */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {label}
      </p>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-b-xl" />

    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot right-[-100px] top-8 h-64 w-64 bg-secondary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              Project Fact Sheet
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Multiple locations across Madhya Pradesh with scalable solar infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      <section className="section-padding solar-section">
  <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">

      <StatCard value="300" suffix="+" label="Acres (Parcel 1)" icon={MapPin} />
      <StatCard value="500" label="Acres (Parcel 2)" icon={MapPin} />
      <StatCard value="10" suffix="MW" label="Secured" icon={Zap} />
      <StatCard value="40" suffix="MW" label="Submitted" icon={Zap} />
      <StatCard value="230" suffix="MW" label="Pipeline" icon={Zap} />

    </div>
  </div>
</section>

      {/* Timeline */}
      <section className="section-padding solar-section-alt">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Delivery <span className="gradient-text">Timeline</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            <ScrollReveal>
              <div className="glass-card p-8 text-center hover-scale">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold gradient-text">24–30</div>
                <p className="text-muted-foreground mt-2">Months for 200MW Delivery</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="glass-card p-8 text-center hover-scale">
                <Clock className="h-10 w-10 text-secondary mx-auto mb-4" />
                <div className="text-3xl font-heading font-bold gradient-text">6–7</div>
                <p className="text-muted-foreground mt-2">Years Expected Payback</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8">
              Project <span className="gradient-text">Locations</span>
            </h2>
            <div className="glass-card p-4 sm:p-6 md:p-8 inline-block w-full">
              <svg viewBox="0 0 400 450" className="w-full max-w-md mx-auto" aria-label="Map of Madhya Pradesh project locations">
                {/* Simplified MP outline */}
                <path
                  d="M50,150 Q80,50 200,60 Q320,70 370,150 Q380,220 350,280 Q300,370 200,380 Q100,370 60,280 Q40,220 50,150Z"
                  fill="hsl(var(--muted))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                <text x="200" y="200" textAnchor="middle" className="fill-foreground font-heading text-lg font-semibold">
                  Madhya Pradesh
                </text>
                {/* Project markers */}
                {[
                  { x: 180, y: 160, label: "Rewa" },
                  { x: 250, y: 240, label: "Khandwa" },
                  { x: 150, y: 260, label: "Site 3" },
                ].map((loc) => (
                  <g key={loc.label}>
                    <circle cx={loc.x} cy={loc.y} r="8" fill="hsl(var(--accent))" stroke="hsl(var(--primary))" strokeWidth="2" />
                    <text x={loc.x} y={loc.y - 14} textAnchor="middle" className="fill-foreground text-xs font-medium">
                      {loc.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
