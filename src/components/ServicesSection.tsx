import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, CheckCircle, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: string;
  color: string;
}

const ServicesSection = () => {
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const services: Service[] = [
    { icon: Clock, title: "24/7 Service", description: "Round-the-clock support for all your financial needs", stat: "24/7", color: "text-primary" },
    { icon: Users, title: "100+ Successful Clients", description: "Proven track record with satisfied customers", stat: "100+", color: "text-accent" },
    { icon: CheckCircle, title: "95% Success Ratio", description: "High approval rate for loan applications", stat: "95%", color: "text-secondary" },
    { icon: TrendingUp, title: "15%+ Returns", description: "Average portfolio returns for our clients", stat: "15%+", color: "text-accent" },
  ];

  useEffect(() => {
    // Heading fade-in bottom to top
    if (headingRef.current) {
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
        },
      });
    }

    // Cards left-to-right, scroll-triggered, staggered
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children) as HTMLElement[];

      gsap.from(cards, {
        opacity: 0,
        x: -100,          // left-to-right
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.3,     // ek ke baad ek
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" ref={headingRef}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Premium Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled financial services with our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" ref={cardsRef}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="border rounded-lg shadow-lg p-6 text-center">
                <CardContent>
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-full bg-gray-100">
                      <Icon className={`h-8 w-8 ${service.color}`} />
                    </div>
                  </div>
                  <div className={`text-3xl font-bold ${service.color} mb-2`}>{service.stat}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
