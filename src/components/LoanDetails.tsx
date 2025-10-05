import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Home, User, Car, Building } from "lucide-react";
import { useState } from "react";

const loanDetailsData: any = {
  "home-loan": {
    title: "Home Loan",
    description:
      "Our home loans are designed to make your dream home a reality with flexible repayment options.",
    features: ["Up to 90% financing", "Lowest interest rates", "Quick approval"],
    interestRate: "8.00%",
    icon: Home,
    extra: {
      tenure: "Up to 30 years",
      eligibility: "Salaried & self-employed individuals",
      documents: ["ID proof", "Income proof", "Property documents"],
    },
  },
  "personal-loan": {
    title: "Personal Loan",
    description:
      "Get instant personal loans for travel, education, or emergencies without collateral.",
    features: ["No collateral required", "Same day approval", "Flexible repayment"],
    interestRate: "10.00%",
    icon: User,
    extra: {
      tenure: "Up to 5 years",
      eligibility: "Salaried individuals with min. 20k/month income",
      documents: ["ID proof", "Bank statement", "Salary slips"],
    },
  },
  "car-loan": {
    title: "Car Loan",
    description: "Buy your dream car with our attractive auto loan schemes.",
    features: ["Up to 85% financing", "New & used cars", "Insurance included"],
    interestRate: "6.00%",
    icon: Car,
    extra: {
      tenure: "Up to 7 years",
      eligibility: "18+ years old, valid driving license",
      documents: ["ID proof", "Income proof", "Car quotation"],
    },
  },
  "business-loan": {
    title: "Business Loan",
    description: "Grow your business with easy business loans.",
    features: ["Working capital", "Equipment financing", "Business expansion"],
    interestRate: "11.00%",
    icon: Building,
    extra: {
      tenure: "Up to 10 years",
      eligibility: "Business vintage of at least 2 years",
      documents: ["ID proof", "Business registration", "Bank statements"],
    },
  },
};

const LoanDetails = () => {
  const { loanType } = useParams();
  const loan = loanDetailsData[loanType as keyof typeof loanDetailsData];

  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [messsage, setMessage] = useState("");

  const isFormValid = name && email && phone && amount && messsage;

  const handleSubmit = () => {
    if (!isFormValid) return;
    const phoneNumber = "9413657763";
    const message = encodeURIComponent(
      `Hi, I want to apply for ${loan.title}.\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nLoan Amount: ${amount}\nMessage: ${messsage}`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  if (!loan) {
    return <div className="p-8 text-center">Loan not found.</div>;
  }

  return (
    <div className="container mx-auto px-4 pt-8 pb-16">
      {/* Loan Info */}
      <Card className="mb-12 shadow-lg">
        <CardHeader className="text-center">
          <loan.icon className="h-12 w-12 text-primary mx-auto mb-2" />
          <CardTitle className="text-3xl">{loan.title}</CardTitle>
          <p className="text-muted-foreground mt-2">{loan.description}</p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Key Features</h3>
              <ul className="space-y-2">
                {loan.features.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra Info */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Details</h3>
              <p><strong>Interest Rate:</strong> {loan.interestRate}</p>
              <p><strong>Tenure:</strong> {loan.extra.tenure}</p>
              <p><strong>Eligibility:</strong> {loan.extra.eligibility}</p>
              <p><strong>Documents:</strong> {loan.extra.documents.join(", ")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Apply Form */}
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Apply for {loan.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="amount">Loan Amount</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter desired loan amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
              <div>
              <Label htmlFor="message">Additional Message</Label>
              <Input
                id="message"
                placeholder="Enter any extra details"
                value={messsage}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <Button
              size="lg"
              className={`w-full text-black bg-white border border-gray-300 
                hover:bg-primary hover:text-white hover:scale-105 
                transition-all duration-300 shadow-sm hover:shadow-md
                ${!isFormValid ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={!isFormValid}
              onClick={handleSubmit}
            >
              Submit Application
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoanDetails;
