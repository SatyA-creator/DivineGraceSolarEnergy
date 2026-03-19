import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { IndianRupee, TrendingUp, ArrowUpRight, Shield } from "lucide-react";

const allocation = [
  { label: "EPC & Procurement", amount: 120, color: "bg-primary" },
  { label: "Land Mobilization", amount: 40, color: "bg-secondary" },
  { label: "Grid Infrastructure", amount: 30, color: "bg-accent" },
  { label: "Contingency", amount: 25, color: "bg-muted-foreground" },
  { label: "Team & Operations", amount: 20, color: "bg-primary/60" },
  { label: "AI/IoT Integration", amount: 15, color: "bg-secondary/60" },
];

function AnimatedAmount({ value }: { value: number }) {
  const { ref, isVisible } = useScrollReveal();
  const count = useAnimatedCounter(value, isVisible);
  return <span ref={ref}>₹{count} Cr</span>;
}

export default function Investment() {
  const total = 250;

  return (
    <>
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot left-[-110px] top-8 h-64 w-64 bg-primary/20" />
        <div className="solar-spot right-[-90px] top-10 h-64 w-64 bg-secondary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              Investment Opportunity
            </h1>
            <div className="text-5xl md:text-7xl font-heading font-extrabold text-accent mt-4">₹250 Crores</div>
            <p className="text-muted-foreground text-lg mt-2">Capital Raise</p>
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      {/* Fund Allocation */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Fund <span className="gradient-text">Allocation</span>
            </h2>
          </ScrollReveal>
          {/* Bar chart */}
          <div className="space-y-4">
            {allocation.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 80}>
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{item.label}</span>
                    <span className="font-heading font-bold text-sm gradient-text">₹{item.amount} Cr</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div
                      className={`${item.color} h-3 rounded-full transition-all duration-1000`}
                      style={{ width: `${(item.amount / total) * 100}%` }}
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Projections */}
   <section className="section-padding solar-section-alt">
  <div className="container mx-auto max-w-6xl">
    <ScrollReveal>
      <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
        Financial <span className="gradient-text">Projections</span>
      </h2>
    </ScrollReveal>

    {/* 👇 Changed to 3 columns */}
    <div className="grid md:grid-cols-3 gap-6 items-center">
      
      {/* LEFT BOX */}
      <ScrollReveal>
        <div className="glass-card p-8 text-center hover-scale">
          <p className="text-muted-foreground text-sm mb-2">2025–26</p>
          <div className="text-2xl font-heading font-bold gradient-text mb-1">
            <AnimatedAmount value={9} />
          </div>
          <p className="text-xs text-muted-foreground">EBITDA</p>
          <div className="text-2xl font-heading font-bold gradient-text mt-4 mb-1">
            <AnimatedAmount value={3} />
          </div>
          <p className="text-xs text-muted-foreground">PAT</p>
        </div>
      </ScrollReveal>

      {/* CENTER IMAGE */}
      <ScrollReveal delay={100}>
        <div className="flex justify-center">
          <img
            src="/projection.png"   // 👉 your image
            alt="solar"
            className=""
          />
        </div>
      </ScrollReveal>

      {/* RIGHT BOX */}
      <ScrollReveal delay={200}>
        <div className="glass-card p-8 text-center hover-scale border-2 border-accent/30">
          <p className="text-muted-foreground text-sm mb-2">2028–29</p>
          <div className="text-2xl font-heading font-bold gradient-text mb-1">
            <AnimatedAmount value={197} />
          </div>
          <p className="text-xs text-muted-foreground">EBITDA</p>
          <div className="text-2xl font-heading font-bold gradient-text mt-4 mb-1">
            <AnimatedAmount value={187} />
          </div>
          <p className="text-xs text-muted-foreground">PAT</p>
        </div>
      </ScrollReveal>

    </div>

    {/* Bottom Text */}
    <ScrollReveal delay={300}>
      <p className="text-center text-muted-foreground mt-8 flex items-center justify-center gap-2">
        <ArrowUpRight className="h-5 w-5 text-accent" />
        Profitability scales rapidly with capacity expansion
      </p>
    </ScrollReveal>

  </div>
</section>

      {/* Exit Strategy */}
      <section className="section-padding solar-section">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
              Exit <span className="gradient-text">Strategy</span>
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: TrendingUp, title: "Strategic Sale (OFS)", desc: "Offer for sale to strategic or institutional investors" },
              { icon: Shield, title: "Promoter-led Buyback", desc: "Structured buyback at predetermined valuations" },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="glass-card p-8 hover-scale">
                  <item.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={300}>
            <div className="mt-8 glass-card p-6">
              <h3 className="font-heading font-semibold text-lg mb-4">Liquidity Events</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  "Dividend payouts after Year 6–7",
                  "Secondary share sale",
                  "Asset monetization via InvIT / REIT",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <IndianRupee className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
