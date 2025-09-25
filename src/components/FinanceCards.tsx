import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Clock, Award, Target, Users } from "lucide-react";

const FinanceCards = () => {
  const financeServices = [
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment plans to maximize your returns and build long-term wealth.",
      features: ["Portfolio Management", "Risk Assessment", "Market Analysis"],
      color: "text-accent"
    },
    {
      icon: Shield,
      title: "Insurance Services",
      description: "Comprehensive insurance solutions to protect you and your family's future.",
      features: ["Life Insurance", "Health Coverage", "Property Protection"],
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Financial Goals",
      description: "Customized plans to help you achieve your specific financial objectives.",
      features: ["Retirement Planning", "Child Education", "Dream Home"],
      color: "text-secondary"
    },
    {
      icon: Award,
      title: "Tax Planning",
      description: "Expert tax advisory services to optimize your tax savings legally.",
      features: ["Tax Optimization", "Legal Compliance", "Deduction Planning"],
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Fast and efficient processing for all your financial requirements.",
      features: ["Same Day Approval", "Minimal Documentation", "Digital Process"],
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Family Finance",
      description: "Comprehensive financial planning for your entire family's needs.",
      features: ["Joint Accounts", "Family Goals", "Estate Planning"],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Finance Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From investments to insurance, we provide complete financial services 
            to secure your present and future financial well-being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {financeServices.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-muted group-hover:scale-110 transition-transform">
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${service.color.replace('text-', 'bg-')}`}></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full group-hover:scale-105 transition-transform">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Financial Journey?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their financial lives with our expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceCards;