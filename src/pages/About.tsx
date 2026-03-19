import ScrollReveal from "@/components/ScrollReveal";
import ThemeMarquee from "@/components/ThemeMarquee";
import { Eye, Target } from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero (UNCHANGED) */}
      <section className="solar-inner-hero py-24 md:py-32">
        <div className="solar-spot left-[-80px] top-10 h-56 w-56 bg-primary/20" />
        <div className="solar-spot right-[-80px] bottom-0 h-56 w-56 bg-secondary/20" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <ScrollReveal>
            <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-foreground mb-6">
              About DivineGrace Energy
            </h1>
            
          </ScrollReveal>
        </div>
      </section>

      <ThemeMarquee />

      {/* NEW IMAGE STYLE SECTION */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-10 items-center">

          {/* LEFT IMAGE */}
          <ScrollReveal>
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/about-slide-2.jpg"
                alt="solar"
                className="w-full h-full object-cover"
              />

              {/* Arrows */}
              {/* <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full">
                <ChevronLeft />
              </button>
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground p-2 rounded-full">
                <ChevronRight />
              </button> */}

              {/* Bottom Floating Card */}
              {/* <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[85%] bg-background/90 backdrop-blur-md rounded-2xl p-5 flex justify-between">
                
                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                    <Eye className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-sm">Our Vision</p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                    <Target className="h-5 w-5" />
                  </div>
                  <p className="font-semibold text-sm">Our Mission</p>
                </div>

              </div> */}
            </div>
          </ScrollReveal>

          {/* RIGHT CONTENT */}
          <ScrollReveal delay={200}>
            <div>
              <p className="text-primary font-semibold mb-3 uppercase text-sm tracking-wide">
                About Us
              </p>

              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                About DivineGrace Energy
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                We specialize in the development of solar parks across diverse locations, delivering sustainable power solutions that uplift communities and support environmental resilience.
              </p>

              <p className="text-muted-foreground mb-8 leading-relaxed">
                Founded in November 2023, DivineGrace Energy is a forward-thinking infrastructure company committed to accelerating India's clean energy transition.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-8">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">7,848 +</p>
                    <p className="text-sm text-muted-foreground">Installed Capacity</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 min-w-0">
                  <div className="bg-primary text-primary-foreground p-3 rounded-xl">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">9,874 +</p>
                    <p className="text-sm text-muted-foreground">Customers Globally</p>
                  </div>
                </div>
              </div>

            
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ✅ KEEP ORIGINAL VISION & MISSION (NOW STYLED NICER) */}
      <section className="section-padding bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-8">

            <ScrollReveal>
              <div className="p-6 sm:p-8 rounded-2xl bg-muted/50 hover:shadow-lg transition">
                <Eye className="h-10 w-10 text-primary mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To lead India's clean energy revolution by developing solar parks that empower communities and fuel sustainable growth.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="p-6 sm:p-8 rounded-2xl bg-muted/50 hover:shadow-lg transition">
                <Target className="h-10 w-10 text-secondary mb-4" />
                <h2 className="font-heading font-bold text-2xl mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Build and operate solar parks nationwide, delivering reliable, eco-friendly power with high-quality execution, local engagement, and environmental care.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </>
  );
}