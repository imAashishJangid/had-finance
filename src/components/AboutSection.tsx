import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Clock, CheckCircle } from "lucide-react";
import dineshImage1 from "@/assets/dinesh-1.png";
import dineshImage2 from "@/assets/dinesh-2.png";

const AboutSection = () => {
  const achievements = [
    {
      icon: Users,
      number: "100+",
      label: "Clients Successful",
      description: "Happy customers who achieved their financial goals"
    },
    {
      icon: Clock,
      number: "3+",
      label: "Years Experience",
      description: "Proven expertise in financial advisory services"
    },
    {
      icon: CheckCircle,
      number: "95%",
      label: "Success Rate",
      description: "High approval rate for financial solutions"
    },
    {
      icon: Award,
      number: "100%",
      label: "Satisfaction",
      description: "Committed to client satisfaction and trust"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Your Financial Advisor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet Dinesh Choudhary, your trusted finance advisor with years of experience 
            in helping clients achieve their financial dreams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Dinesh Choudhary
              </h3>
              <p className="text-lg text-primary font-semibold mb-4">
                Certified Finance Advisor
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                With over 3 years of dedicated experience in the financial services industry, 
                Dinesh has successfully guided more than 100 clients towards achieving their 
                financial goals. His expertise spans across various financial products including 
                loans, investments, insurance, and comprehensive financial planning.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Dinesh believes in building long-term relationships with his clients through 
                transparent communication, personalized service, and ethical practices. His 
                commitment to excellence has earned him the trust of clients across diverse 
                financial backgrounds.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                View Credentials
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <img 
                src={dineshImage1} 
                alt="Dinesh Choudhary - Finance Advisor" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <img 
                src={dineshImage2} 
                alt="Dinesh Choudhary - Professional" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-accent mb-2">
                  {achievement.number}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {achievement.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Qualifications & Expertise */}
        <div className="bg-gradient-to-r from-muted/50 to-background rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Professional Qualifications
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Certified Financial Planner (CFP)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">Licensed Insurance Advisor</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-muted-foreground">Investment Advisory Certification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Tax Planning Specialist</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Areas of Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">Personal & Business Loans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-muted-foreground">Investment Portfolio Management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-muted-foreground">Retirement Planning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-muted-foreground">Risk Management & Insurance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;