import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const EMICalculator = () => {
  const [amount, setAmount] = useState<number | "">(""); 
  const [interestRate, setInterestRate] = useState<number | "">(""); 
  const [tenure, setTenure] = useState<number | "">(""); 
  const [emi, setEmi] = useState<number | null>(null);

  const calculateEMI = () => {
    if (amount === "" || interestRate === "" || tenure === "" || amount <= 0 || tenure <= 0) {
      setEmi(null); // Invalid input
      return;
    }

    const P = amount;
    const R = interestRate / 12 / 100;
    const N = tenure * 12;

    const EMI = R === 0 ? P / N : (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    setEmi(EMI);
  };

  return (
    <section id="emi-calculator" className="py-16">
      <Card className="shadow-lg max-w-lg mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">EMI Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Loan Amount */}
          <div className="space-y-2">
            <Label htmlFor="amount">Loan Amount (₹)</Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              placeholder="Enter loan amount"
              onChange={(e) => setAmount(e.target.value === "" ? "" : Number(e.target.value))}
            />
          </div>

          {/* Interest Rate */}
          <div className="space-y-2">
            <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
            <Input
              type="number"
              step="0.1"
              id="interestRate"
              value={interestRate}
              placeholder="Enter interest rate"
              onChange={(e) => setInterestRate(e.target.value === "" ? "" : Number(e.target.value))}
            />
          </div>

          {/* Tenure */}
          <div className="space-y-2">
            <Label htmlFor="tenure">Tenure (Years)</Label>
            <Input
              type="number"
              id="tenure"
              value={tenure}
              placeholder="Enter tenure in years"
              onChange={(e) => setTenure(e.target.value === "" ? "" : Number(e.target.value))}
            />
          </div>

          <Button
            className="w-full bg-primary text-white font-semibold hover:bg-primary/90"
            onClick={calculateEMI}
          >
            Calculate EMI
          </Button>

          {emi !== null && (
            <div className="mt-6 text-center p-4 rounded-lg bg-muted">
              <p className="text-lg font-semibold">Monthly EMI</p>
              <p className="text-3xl font-bold text-accent">₹ {emi.toFixed(2)}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default EMICalculator;
