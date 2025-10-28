import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, DollarSign, Clock, Globe, ChevronRight } from "lucide-react";
import uspsLogo from "@/assets/carriers/usps.png";
import dhlLogo from "@/assets/carriers/dhl.png";
import upsLogo from "@/assets/carriers/ups.png";
import fedexLogo from "@/assets/carriers/fedex.png";
import shopifyLogo from "@/assets/platforms/shopify.png";
import twentyNineNextLogo from "@/assets/platforms/29next.png";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] bg-gradient-to-br from-[#1e2099] to-[#2a2fb5] text-white overflow-hidden flex items-center">
        {/* Dot Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-50 pointer-events-none" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
          aria-hidden="true" 
        />
        
        {/* Radial Gradient Overlay */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)'
          }}
          aria-hidden="true"
        />
        
        <div className="container mx-auto px-4 md:px-10 relative z-10 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center max-w-7xl mx-auto">
            
            {/* Left Column - Text Content */}
            <div className="text-center md:text-left animate-fade-in">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-6 tracking-tight">
                Turn Package<br />
                Protection Into<br />
                <span className="text-white">Profit</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 mb-8 max-w-[550px] mx-auto md:mx-0 leading-relaxed">
                PARCELIS gives your customers comprehensive shipping insurance while putting money back in your pocket. No claims hassles. No overhead. Just better margins.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center md:items-start mb-8">
                <Button 
                  asChild 
                  size="lg" 
                  className="h-14 px-8 text-base font-semibold bg-white text-[#1e2099] hover:bg-white/90 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Link to="/apply">Get Started</Link>
                </Button>
                
                <Link 
                  to="/how-it-works" 
                  className="text-white font-semibold text-base inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
                >
                  Learn more
                  <ChevronRight size={20} />
                </Link>
              </div>

              {/* Trust Badge - Licensed Provider */}
              <div className="inline-flex items-center gap-3 mt-4 px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Shield className="text-green-400" size={20} />
                <span className="text-white text-sm font-medium">Licensed Reinsurance Provider</span>
              </div>
            </div>
            
            {/* Right Column - Animated Shield & Boxes */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-[500px] h-[600px]">
                {/* Shield Composition Container */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[600px]">
                  
                  {/* Floating Box 1 - Top Left */}
                  <img 
                    src="data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='10' y='20' width='70' height='60' fill='%23D4A574' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M10 20 L50 10 L80 20' fill='%23B8956A' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M80 20 L90 25 L90 75 L80 80' fill='%239C7F5C' stroke='%238B6F47' stroke-width='2'/%3E%3Crect x='35' y='45' width='20' height='15' fill='%23000' opacity='0.1'/%3E%3C/svg%3E"
                    alt=""
                    className="absolute top-[15%] -left-[5%] w-[100px] h-[100px] animate-float-1 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  />
                  
                  {/* Floating Box 2 - Middle Left */}
                  <img 
                    src="data:image/svg+xml,%3Csvg width='130' height='130' viewBox='0 0 130 130' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='15' y='25' width='90' height='80' fill='%23D4A574' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M15 25 L60 12 L105 25' fill='%23B8956A' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M105 25 L118 32 L118 95 L105 105' fill='%239C7F5C' stroke='%238B6F47' stroke-width='2'/%3E%3Crect x='45' y='60' width='25' height='20' fill='%23000' opacity='0.1'/%3E%3C/svg%3E"
                    alt=""
                    className="absolute top-[55%] -left-[8%] w-[130px] h-[130px] animate-float-2 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  />
                  
                  {/* Floating Box 3 - Top Right */}
                  <img 
                    src="data:image/svg+xml,%3Csvg width='110' height='110' viewBox='0 0 110 110' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='12' y='22' width='75' height='65' fill='%23D4A574' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M12 22 L55 11 L87 22' fill='%23B8956A' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M87 22 L98 28 L98 82 L87 87' fill='%239C7F5C' stroke='%238B6F47' stroke-width='2'/%3E%3Crect x='38' y='50' width='22' height='18' fill='%23000' opacity='0.1'/%3E%3C/svg%3E"
                    alt=""
                    className="absolute top-[20%] -right-[5%] w-[110px] h-[110px] animate-float-3 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  />
                  
                  {/* Floating Box 4 - Bottom Right */}
                  <img 
                    src="data:image/svg+xml,%3Csvg width='85' height='85' viewBox='0 0 85 85' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='8' y='18' width='60' height='50' fill='%23D4A574' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M8 18 L42 9 L68 18' fill='%23B8956A' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M68 18 L76 23 L76 63 L68 68' fill='%239C7F5C' stroke='%238B6F47' stroke-width='2'/%3E%3Crect x='30' y='40' width='18' height='14' fill='%23000' opacity='0.1'/%3E%3C/svg%3E"
                    alt=""
                    className="absolute bottom-[15%] -right-[3%] w-[85px] h-[85px] animate-float-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
                  />
                  
                  {/* Main Shield with Box */}
                  <img 
                    src="data:image/svg+xml,%3Csvg width='400' height='480' viewBox='0 0 400 480' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3C!-- Shield --%3E%3Cpath d='M200 20 C160 20 120 40 80 60 L80 280 C80 360 120 420 200 460 C280 420 320 360 320 280 L320 60 C280 40 240 20 200 20 Z' fill='url(%23shieldGradient)' stroke='%23326FD1' stroke-width='3'/%3E%3C!-- Circuit pattern --%3E%3Cg opacity='0.6' stroke='%234A90E2' stroke-width='1.5'%3E%3Cpath d='M120 150 L140 150 M140 150 L140 180 L160 180 M160 180 L160 200 L180 200' stroke-linecap='round'/%3E%3Cpath d='M280 150 L260 150 M260 150 L260 180 L240 180 M240 180 L240 200 L220 200' stroke-linecap='round'/%3E%3Cpath d='M150 280 L180 280 L180 300 L200 300' stroke-linecap='round'/%3E%3Cpath d='M250 280 L220 280 L220 300 L200 300' stroke-linecap='round'/%3E%3Ccircle cx='140' cy='150' r='3' fill='%234A90E2'/%3E%3Ccircle cx='160' cy='180' r='3' fill='%234A90E2'/%3E%3Ccircle cx='180' cy='200' r='3' fill='%234A90E2'/%3E%3Ccircle cx='260' cy='150' r='3' fill='%234A90E2'/%3E%3Ccircle cx='240' cy='180' r='3' fill='%234A90E2'/%3E%3Ccircle cx='220' cy='200' r='3' fill='%234A90E2'/%3E%3Ccircle cx='180' cy='280' r='3' fill='%234A90E2'/%3E%3Ccircle cx='220' cy='280' r='3' fill='%234A90E2'/%3E%3C/g%3E%3C!-- Cardboard box on shield --%3E%3Cg transform='translate(150, 200)'%3E%3Crect x='0' y='20' width='100' height='90' fill='%23D4A574' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M0 20 L50 5 L100 20' fill='%23B8956A' stroke='%238B6F47' stroke-width='2'/%3E%3Cpath d='M100 20 L110 25 L110 100 L100 110' fill='%239C7F5C' stroke='%238B6F47' stroke-width='2'/%3E%3C!-- Tape --%3E%3Crect x='45' y='0' width='10' height='115' fill='%23B89968' opacity='0.6'/%3E%3C!-- Shipping label --%3E%3Crect x='20' y='70' width='35' height='25' fill='white' opacity='0.9'/%3E%3Cpath d='M25 75 L50 75 M25 80 L50 80 M25 85 L45 85' stroke='%23333' stroke-width='1' opacity='0.5'/%3E%3C/g%3E%3C!-- Shadow --%3E%3Cellipse cx='200' cy='470' rx='80' ry='15' fill='%23000' opacity='0.15'/%3E%3Cdefs%3E%3ClinearGradient id='shieldGradient' x1='200' y1='20' x2='200' y2='460'%3E%3Cstop offset='0%25' stop-color='%233D7ED9'/%3E%3Cstop offset='100%25' stop-color='%235A7FDB'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E"
                    alt="Shield protecting packages"
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[480px] animate-float-main drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
                  />
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Shield className="text-primary" size={24} />
              <span className="font-semibold">Licensed Reinsurance Provider</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-h2 mb-6">Merchant Benefits</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <DollarSign className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Profitable</h3>
                    <p className="text-muted-foreground">Mark up insurance costs to increase revenue per order</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Zero Involvement</h3>
                    <p className="text-muted-foreground">Never handle claims - customers contact PARCELIS directly</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Fast Payouts</h3>
                    <p className="text-muted-foreground">5-7 business day claim resolution</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">All Carriers</h3>
                    <p className="text-muted-foreground">USPS, UPS, FedEx, DHL, and all international carriers supported</p>
                    <div className="flex items-center gap-3 mt-3">
                      <img src={uspsLogo} alt="USPS logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={upsLogo} alt="UPS logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={fedexLogo} alt="FedEx logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                      <img src={dhlLogo} alt="DHL logo" className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-h2 mb-6">Customer Protection</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Complete Coverage</h3>
                    <p className="text-muted-foreground">Lost, damaged, AND stolen packages (including porch piracy)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Globe className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Global Coverage</h3>
                    <p className="text-muted-foreground">Unlimited geographic protection</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Clock className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Simple Claims</h3>
                    <p className="text-muted-foreground">Easy filing process with email tracking</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Shield className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-semibold mb-2">Real Insurance</h3>
                    <p className="text-muted-foreground">Legitimate licensed coverage, not a tech workaround</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Summary */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-12">Simple Process, Zero Hassle</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-h4 mb-3">Integrate</h3>
              <p className="text-text-secondary">Connect via Shopify app or platform integration</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-h4 mb-3">Sell</h3>
              <p className="text-text-secondary">Insurance option appears at checkout - customers opt in</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-h4 mb-3">Relax</h3>
              <p className="text-text-secondary">Claims go directly to PARCELIS - you stay focused on growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Integration */}
      <section className="py-12 md:py-24 bg-background-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-12">Seamless Platform Integrations</h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Shopify Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <img src={shopifyLogo} alt="Shopify" className="h-16 object-contain" />
                <span className="bg-primary text-white px-4 py-2 rounded-full text-xl font-semibold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Shopify One-Click Integration</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Install our app from the Shopify App Store and activate insurance at checkout in under 5 minutes.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                <Link to="/how-it-works">View Integration Details</Link>
              </Button>
            </div>

            {/* 29next Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <img src={twentyNineNextLogo} alt="29next" className="h-16 object-contain" />
                <span className="bg-primary text-white px-4 py-2 rounded-full text-xl font-semibold">
                  LIVE NOW
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3">29next Native Integration</h3>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Seamlessly add insurance to your 29next checkout flow with our native integration.
              </p>
              <Button asChild className="w-full bg-primary hover:bg-primary-hover">
                <Link to="/how-it-works">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* All Major Carriers */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-h2 text-center mb-4">All Major Carriers Covered</h2>
          <p className="text-body-lg text-text-secondary text-center mb-12 max-w-3xl mx-auto">
            Comprehensive protection across USPS, UPS, FedEx, DHL, and all regional and international carriers
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16">
            <div className="text-center">
              <img src={uspsLogo} alt="USPS shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">USPS</p>
            </div>
            <div className="text-center">
              <img src={upsLogo} alt="UPS shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">UPS</p>
            </div>
            <div className="text-center">
              <img src={fedexLogo} alt="FedEx shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">FedEx</p>
            </div>
            <div className="text-center">
              <img src={dhlLogo} alt="DHL shipping logo" className="h-12 md:h-16 object-contain mx-auto mb-2" />
              <p className="text-sm font-medium text-muted-foreground">DHL</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-8">+ all regional and international carriers</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 md:py-24 bg-primary-dark text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-h2 mb-8">Ready to Protect Packages and Boost Profits?</h2>
          <Button asChild variant="hero" size="lg" className="bg-background text-primary hover:bg-background/90">
            <Link to="/apply">Apply Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
