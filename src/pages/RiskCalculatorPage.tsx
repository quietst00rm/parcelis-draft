import { useState, useEffect } from "react";
import { HeroBanner } from "@/components/HeroBanner";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { AlertCircle, TrendingUp, Shield, DollarSign } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const RiskCalculatorPage = () => {
  // Input values
  const [monthlyOrders, setMonthlyOrders] = useState(1000);
  const [avgOrderValue, setAvgOrderValue] = useState(75);
  const [lossRate, setLossRate] = useState(2);
  
  // Calculated values
  const [results, setResults] = useState({
    monthlyRevenue: 0,
    annualRevenue: 0,
    expectedMonthlyLosses: 0,
    expectedAnnualLosses: 0,
    parcelisMonthlyFee: 0,
    parcelisAnnualFee: 0,
    selfInsuranceCost: 0,
    savingsWithParcelis: 0,
    breakEvenPoint: 0,
  });

  useEffect(() => {
    const monthlyRevenue = monthlyOrders * avgOrderValue;
    const annualRevenue = monthlyRevenue * 12;
    
    // Expected losses (lost/stolen/damaged packages)
    const expectedMonthlyLosses = (monthlyOrders * (lossRate / 100)) * avgOrderValue;
    const expectedAnnualLosses = expectedMonthlyLosses * 12;
    
    // PARCELIS fee (estimated at 1% of order value)
    const parcelisFeeRate = 0.01;
    const parcelisMonthlyFee = monthlyRevenue * parcelisFeeRate;
    const parcelisAnnualFee = parcelisMonthlyFee * 12;
    
    // Self-insurance includes: direct losses + customer service time + reputation damage
    const csOverhead = expectedMonthlyLosses * 0.3; // 30% overhead for CS handling
    const reputationDamage = expectedMonthlyLosses * 0.2; // 20% for reputation/churn
    const selfInsuranceCost = (expectedAnnualLosses + (csOverhead * 12) + (reputationDamage * 12));
    
    const savingsWithParcelis = selfInsuranceCost - parcelisAnnualFee;
    const breakEvenPoint = (lossRate / 100) * 100; // Simplified break-even
    
    setResults({
      monthlyRevenue,
      annualRevenue,
      expectedMonthlyLosses,
      expectedAnnualLosses,
      parcelisMonthlyFee,
      parcelisAnnualFee,
      selfInsuranceCost,
      savingsWithParcelis,
      breakEvenPoint,
    });
  }, [monthlyOrders, avgOrderValue, lossRate]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  return (
    <>
      <HeroBanner
        headline="Self-Insurance Risk Calculator"
        subheadline="Discover the true cost of self-insuring your shipments vs. using PARCELIS protection"
        primaryCTA={{
          text: "Get Started",
          href: "/apply",
        }}
        secondaryCTA={{
          text: "How It Works",
          href: "/how-it-works",
        }}
      />

      <section className="py-12 md:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Introduction */}
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-h3 font-bold mb-4 text-foreground">
              Calculate Your Risk Exposure
            </h2>
            <p className="text-body text-muted-foreground">
              Enter your business metrics below to see how much self-insuring your packages really costs when you factor in lost revenue, customer service overhead, and reputation damage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Panel */}
            <Card className="p-6 md:p-8 border-2">
              <h3 className="text-h4 font-bold mb-6 text-foreground flex items-center gap-2">
                <TrendingUp className="text-primary" />
                Your Business Metrics
              </h3>

              <div className="space-y-8">
                {/* Monthly Orders */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="monthly-orders" className="text-base font-semibold">
                      Monthly Orders
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {formatNumber(monthlyOrders)}
                    </span>
                  </div>
                  <Slider
                    id="monthly-orders"
                    min={100}
                    max={50000}
                    step={100}
                    value={[monthlyOrders]}
                    onValueChange={(value) => setMonthlyOrders(value[0])}
                    className="w-full"
                  />
                  <Input
                    type="number"
                    value={monthlyOrders}
                    onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Average Order Value */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="avg-order-value" className="text-base font-semibold">
                      Average Order Value
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(avgOrderValue)}
                    </span>
                  </div>
                  <Slider
                    id="avg-order-value"
                    min={10}
                    max={500}
                    step={5}
                    value={[avgOrderValue]}
                    onValueChange={(value) => setAvgOrderValue(value[0])}
                    className="w-full"
                  />
                  <Input
                    type="number"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                {/* Loss Rate */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Label htmlFor="loss-rate" className="text-base font-semibold">
                      Package Loss/Damage Rate (%)
                    </Label>
                    <span className="text-lg font-bold text-primary">
                      {lossRate}%
                    </span>
                  </div>
                  <Slider
                    id="loss-rate"
                    min={0.5}
                    max={10}
                    step={0.5}
                    value={[lossRate]}
                    onValueChange={(value) => setLossRate(value[0])}
                    className="w-full"
                  />
                  <Input
                    type="number"
                    value={lossRate}
                    onChange={(e) => setLossRate(Number(e.target.value))}
                    step="0.5"
                    className="w-full"
                  />
                  <p className="text-sm text-muted-foreground">
                    Industry average: 1.5-3% for most ecommerce businesses
                  </p>
                </div>

                {/* Revenue Display */}
                <div className="pt-6 border-t border-border">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-base text-muted-foreground">Monthly Revenue</span>
                    <span className="text-xl font-bold text-foreground">
                      {formatCurrency(results.monthlyRevenue)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-base text-muted-foreground">Annual Revenue</span>
                    <span className="text-xl font-bold text-foreground">
                      {formatCurrency(results.annualRevenue)}
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Results Panel */}
            <div className="space-y-6">
              {/* Self-Insurance Cost */}
              <Card className="p-6 md:p-8 bg-destructive/5 border-2 border-destructive/20">
                <h3 className="text-h4 font-bold mb-6 text-foreground flex items-center gap-2">
                  <AlertCircle className="text-destructive" />
                  True Cost of Self-Insurance
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">Direct Package Losses</p>
                      <p className="text-sm text-muted-foreground">Lost, stolen, or damaged packages</p>
                    </div>
                    <span className="text-lg font-bold text-destructive">
                      {formatCurrency(results.expectedAnnualLosses)}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">Customer Service Overhead</p>
                      <p className="text-sm text-muted-foreground">Time spent handling claims</p>
                    </div>
                    <span className="text-lg font-bold text-destructive">
                      {formatCurrency(results.expectedAnnualLosses * 0.3)}
                    </span>
                  </div>

                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">Reputation & Churn Cost</p>
                      <p className="text-sm text-muted-foreground">Lost customers & negative reviews</p>
                    </div>
                    <span className="text-lg font-bold text-destructive">
                      {formatCurrency(results.expectedAnnualLosses * 0.2)}
                    </span>
                  </div>

                  <div className="pt-4 border-t-2 border-destructive/30">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-foreground">Total Annual Cost</span>
                      <span className="text-2xl font-bold text-destructive">
                        {formatCurrency(results.selfInsuranceCost)}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* PARCELIS Cost */}
              <Card className="p-6 md:p-8 bg-primary/5 border-2 border-primary/20">
                <h3 className="text-h4 font-bold mb-6 text-foreground flex items-center gap-2">
                  <Shield className="text-primary" />
                  PARCELIS Protection
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-semibold text-foreground">Monthly Fee</p>
                      <p className="text-sm text-muted-foreground">~1% of order value</p>
                    </div>
                    <span className="text-lg font-bold text-primary">
                      {formatCurrency(results.parcelisMonthlyFee)}
                    </span>
                  </div>

                  <div className="pt-4 border-t-2 border-primary/30">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-foreground">Total Annual Cost</span>
                      <span className="text-2xl font-bold text-primary">
                        {formatCurrency(results.parcelisAnnualFee)}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>Zero customer service overhead</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>No reputation damage or churn</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>5-7 day claim resolution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-success mt-0.5">✓</span>
                        <span>Comprehensive coverage up to $2,500/box</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Savings Summary */}
              <Card className="p-6 md:p-8 bg-success/5 border-2 border-success/20">
                <h3 className="text-h4 font-bold mb-4 text-foreground flex items-center gap-2">
                  <DollarSign className="text-success" />
                  Your Annual Savings
                </h3>
                
                <div className="text-center">
                  <p className="text-5xl font-bold text-success mb-2">
                    {formatCurrency(results.savingsWithParcelis)}
                  </p>
                  <p className="text-muted-foreground">
                    saved per year with PARCELIS
                  </p>
                </div>

                {results.savingsWithParcelis < 0 && (
                  <Alert className="mt-4 border-warning bg-warning/5">
                    <AlertCircle className="h-4 w-4 text-warning" />
                    <AlertDescription className="text-sm">
                      Your loss rate is low enough that self-insurance might be viable. However, consider the hidden costs of customer service time and potential reputation damage.
                    </AlertDescription>
                  </Alert>
                )}
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <Card className="mt-12 p-8 md:p-12 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 text-center">
            <h3 className="text-h3 font-bold mb-4 text-foreground">
              Ready to Protect Your Business?
            </h3>
            <p className="text-body text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join hundreds of ecommerce brands who've eliminated the risk and overhead of self-insurance. Get started with PARCELIS today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/apply"
                className="btn btn-primary btn-large"
              >
                Start Protecting Your Packages
              </a>
              <a
                href="/pricing"
                className="btn btn-outline-primary btn-large"
              >
                View Pricing Details
              </a>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
};

export default RiskCalculatorPage;
