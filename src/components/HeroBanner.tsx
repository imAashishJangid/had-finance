import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

const HeroBanner = () => {
  // ✅ Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span style={{ color: "#000000" }}>Your Financial</span>{" "}
                <span style={{ color: "#316b80" }} className="block">
                  Success Starts
                </span>
                <span style={{ color: "#3aa6c9" }}>Here</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg">
                Professional financial advisory services to help you achieve
                your dreams. From loans to investments, we're your trusted
                financial partner.
              </p>
            </div>

            {/* ✅ Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#finance")} // 👈 scroll to finance section
              >
                Learn More
              </Button>
            </div>

            {/* ✅ Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Clients
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-foreground">3+</div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground">100%</div>
                <div className="text-sm text-muted-foreground">Trusted</div>
              </div>
            </div>
          </div>

          {/* ✅ Right Side Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#3aa6c9]/10 to-[#316b80]/10 rounded-2xl p-8">
              <div className="bg-card rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Quick Financial Check
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Loan Approval Rate
                    </span>
                    <span className="font-semibold text-[#3aa6c9]">95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Processing Time
                    </span>
                    <span className="font-semibold text-[#316b80]">
                      24 Hours
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Interest Rate</span>
                    <span className="font-semibold text-[#3aa6c9]">
                      From 8.5%
                    </span>
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
