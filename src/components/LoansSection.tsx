import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, User, Car, Building } from "lucide-react";

const LoansSection = () => {
  const navigate = useNavigate();

  const loanTypes = [
    {
      id: "home-loan", // 👈 unique id/slug
      icon: Home,
      title: "Home Loan",
      description: "Achieve your dream of homeownership with our competitive home loan rates and flexible terms.",
      features: ["Up to 90% financing", "Lowest interest rates", "Quick approval"],
      interestRate: "8.00%"
    },
    {
      id: "personal-loan",
      icon: User,
      title: "Personal Loan",
      description: "Get instant funds for your personal needs with minimal documentation and fast processing.",
      features: ["No collateral required", "Same day approval", "Flexible repayment"],
      interestRate: "10.00%"
    },
    {
      id: "car-loan",
      icon: Car,
      title: "Car Loan",
      description: "Drive your dream car today with our attractive auto loan options and easy EMI plans.",
      features: ["Up to 85% financing", "New & used cars", "Insurance included"],
      interestRate: "6.00%"
    },
    {
      id: "business-loan",
      icon: Building,
      title: "Business Loan",
      description: "Fuel your business growth with our comprehensive business financing solutions.",
      features: ["Working capital", "Equipment financing", "Business expansion"],
      interestRate: "11.00%"
    },
  ];

  return (
    <section id="loans" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Loan Solutions for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of loan products designed to meet your financial requirements 
            with competitive rates and flexible terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {loanTypes.map((loan, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <loan.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{loan.title}</CardTitle>
                <div className="text-2xl font-bold text-accent">
                  From {loan.interestRate}*
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 text-center">
                  {loan.description}
                </p>
                <div className="space-y-2 mb-6">
                  {loan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  className="w-full" 
                  variant="outline"
                  onClick={() => navigate(`/loan/${loan.id}`)} // 👈 redirect with id
                >
                  Apply Now
                </Button>
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
