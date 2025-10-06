import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, User, Car, Building, CircleDollarSign, Shield } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LoansSection = () => {
  const navigate = useNavigate();
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const loanTypes = [
    {
      id: "home-loan",
      icon: Home,
      title: "Home Loan",
      description: "Achieve your dream of homeownership with our competitive home loan rates and flexible terms.",
      features: ["Up to 90% financing", "Lowest interest rates", "Quick approval"],
      interestRate: "8.00%",
    },
    {
      id: "personal-loan",
      icon: User,
      title: "Personal Loan",
      description: "Get instant funds for your personal needs with minimal documentation and fast processing.",
      features: ["No collateral required", "Same day approval", "Flexible repayment"],
      interestRate: "10.00%",
    },
    {
      id: "car-loan",
      icon: Car,
      title: "Car Loan",
      description: "Drive your dream car today with our attractive auto loan options and easy EMI plans.",
      features: ["Up to 85% financing", "New & used cars", "Insurance included"],
      interestRate: "6.00%",
    },
    {
      id: "business-loan",
      icon: Building,
      title: "Business Loan",
      description: "Fuel your business growth with our comprehensive business financing solutions.",
      features: ["Working capital", "Equipment financing", "Business expansion"],
      interestRate: "11.00%",
    },
    {
      id: "gold-loan",
      icon: CircleDollarSign,
      title: "Gold Loan",
      description: "Get instant cash by pledging your gold with minimal documentation and competitive rates.",
      features: ["Quick approval", "Safe & secure", "Flexible repayment options"],
      interestRate: "10.00%",
    },
    {
      id: "insurance",
      icon: Shield,
      title: "Insurance",
      description: "Protect yourself and your loved ones with our customized insurance solutions.",
      features: ["Life & Health coverage", "Affordable premiums", "Easy claim process"],
      interestRate: "N/A",
    },
  ];

  useEffect(() => {
    // 1️⃣ Heading & paragraph fade-in
    if (headingRef.current) {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
        },
      });
    }

    // 2️⃣ Cards animation (AboutSection-style)
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      const mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      x: -50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      delay: i * 0.2,
    });
  });
});

mm.add("(max-width: 767px)", () => {
  cards.forEach((card, i) => {
    gsap.from(card, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 95%",
        toggleActions: "play none none none",
      },
      delay: i * 0.2,
    });
  });
});


      // Cleanup
      return () => mm.revert();
    }
  }, []);

  return (
    <section id="loans" className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loan & Financial Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of loan and insurance products designed to meet your financial requirements with competitive rates and flexible terms.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" ref={cardsRef}>
          {loanTypes.map((loan, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <loan.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{loan.title}</CardTitle>
                {loan.interestRate !== "N/A" && (
                  <div className="text-2xl font-bold text-accent">From {loan.interestRate}*</div>
                )}
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4 text-center">{loan.description}</p>
                <div className="space-y-2 mb-6">
                  {loan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto">
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={() => navigate(`/loan/${loan.id}`)}
                  >
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            *Interest rates are subject to change. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoansSection;
