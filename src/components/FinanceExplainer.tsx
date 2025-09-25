import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, PiggyBank, TrendingUp, Shield } from "lucide-react";

const FinanceExplainer = () => {
  const financeAspects = [
    {
      icon: Calculator,
      title: "Financial Planning",
      description: "Strategic planning to help you achieve your financial goals with proper budgeting and investment strategies."
    },
    {
      icon: PiggyBank,
      title: "Savings & Investments",
      description: "Expert guidance on saving money and making smart investments to grow your wealth over time."
    },
    {
      icon: TrendingUp,
      title: "Wealth Management",
      description: "Professional wealth management services to maximize your returns and secure your financial future."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive insurance and risk assessment to protect your assets and loved ones."
    }
  ];

  return (
    <section id="finance" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What is Finance?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Finance is the management of money and investments. It involves planning, directing, 
            monitoring, organizing, and controlling the monetary resources to achieve financial objectives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {financeAspects.map((aspect, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <aspect.icon className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-lg">{aspect.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  {aspect.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Why Choose Professional Financial Services?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2"></div>
                  <p className="text-muted-foreground">Expert guidance from certified financial advisors</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <p className="text-muted-foreground">Customized financial solutions for your unique needs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                  <p className="text-muted-foreground">24/7 support and ongoing financial monitoring</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-xl p-6 shadow-lg">
              <h4 className="font-semibold text-lg mb-4">Financial Success Metrics</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Client Satisfaction</span>
                  <span className="font-semibold text-accent">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Goal Achievement</span>
                  <span className="font-semibold text-secondary">92%</span>
                </div>
                <div className="flex justify-between">
                  <span>Return on Investment</span>
                  <span className="font-semibold text-primary">15%+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceExplainer;