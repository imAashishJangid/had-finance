import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const scrollToSection = (id: string) => {
  const element = document.querySelector(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const HeroBanner = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 1️⃣ Left Content Animation
    if (leftRef.current) {
      gsap.from(leftRef.current.children, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
        },
      });
    }

    // 2️⃣ Stats Number Count-Up
    if (statsRef.current) {
      const numbers = statsRef.current.querySelectorAll<HTMLElement>(".countup");

      numbers.forEach((el) => {
        const endValue = parseInt(el.getAttribute("data-target") || "0", 10);

        // Animate a numeric object, not the DOM directly
        const obj = { value: 0 };
        gsap.to(obj, {
          value: endValue,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.innerText = Math.ceil(obj.value).toString() + "+";
          },
        });
      });
    }


    // 3️⃣ Right Card Animation
    if (rightRef.current) {
      gsap.from(rightRef.current, {
        opacity: 0,
        x: 50, // from right
        duration: 1,
        ease: "power3.out",
        delay: 0.7,
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  return (
    <section
      id="home"
      className="pt-16 md:pt-20 min-h-[80vh] flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8" ref={leftRef}>
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-black">Your Financial</span>{" "}
                <span className="block text-[#316b80]">Success Starts</span>
                <span className="text-[#3aa6c9]">Here</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Professional financial advisory services to help you achieve
                your dreams. From loans to investments, we're your trusted
                financial partner.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
              >
                Get Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#finance")}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6" ref={statsRef}>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <div
                  className="text-xl font-bold text-foreground countup"
                  data-target={100}
                >
                  0
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <TrendingUp className="h-6 w-6 text-secondary" />
                </div>
                <div
                  className="text-xl font-bold text-foreground countup"
                  data-target={3}
                >
                  0
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-1">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div
                  className="text-xl font-bold text-foreground countup"
                  data-target={100}
                >
                  0
                </div>
                <div className="text-sm text-muted-foreground">Trusted</div>
              </div>
            </div>
          </div>

          {/* Right Side Card */}
          <div className="relative" ref={rightRef}>
            <div className="bg-gradient-to-br from-[#3aa6c9]/10 to-[#316b80]/10 rounded-2xl p-4 lg:p-6">
              <div className="bg-card rounded-xl p-4 lg:p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-3">
                  Quick Financial Check
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Loan Approval Rate</span>
                    <span className="font-semibold text-[#3aa6c9]">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Processing Time</span>
                    <span className="font-semibold text-[#316b80]">24 Hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold text-[#3aa6c9]">From 8.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
