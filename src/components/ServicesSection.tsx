import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, CheckCircle, Headphones, Award, TrendingUp } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Round-the-clock support for all your financial needs",
      stat: "24/7",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "100+ Successful Clients",
      description: "Proven track record with satisfied customers",
      stat: "100+",
      color: "text-accent"
    },
    {
      icon: CheckCircle,
      title: "95% Success Ratio",
      description: "High approval rate for loan applications",
      stat: "95%",
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "15%+ Returns",
      description: "Average portfolio returns for our clients",
      stat: "15%+",
      color: "text-accent"
    }
  ];

  const additionalServices = [
    {
      icon: Headphones,
      title: "Expert Consultation",
      description: "One-on-one sessions with certified financial advisors"
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized for excellence in financial advisory services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience unparalleled financial services with our commitment to excellence 
            and customer satisfaction.
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-background group-hover:scale-110 transition-transform">
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${service.color} mb-2`}>
                  {service.stat}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        

        {/* Service Commitment Banner */}
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Service Commitment
          </h3>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-3xl font-bold mb-2">Fast</div>
              <p className="opacity-90">Quick turnaround times for all services</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Reliable</div>
              <p className="opacity-90">Trusted by hundreds of satisfied clients</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">Professional</div>
              <p className="opacity-90">Certified experts with years of experience</p>
            </div>
          </div>
          <p className="text-lg opacity-95 max-w-2xl mx-auto">
            We are committed to providing exceptional financial services that exceed your expectations 
            and help you achieve your financial goals with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;