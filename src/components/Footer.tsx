import { Link } from "react-router-dom";
import { Shield } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand Column */}
          <div className="footer-column footer-brand">
            <img src={logoWhite} alt="PARCELIS" className="footer-logo" />
            <p className="footer-tagline">
              Turn package protection into profit. Zero hassle. Real insurance.
            </p>
          </div>
          
          {/* Product Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Product</h4>
            <ul className="footer-links">
              <li><a href="/#how-it-works">How It Works</a></li>
              <li><a href="/#pricing">Pricing</a></li>
              <li><a href="/#platforms">Platforms</a></li>
              <li><a href="/#calculator">Calculator</a></li>
            </ul>
          </div>
          
          {/* Company Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/apply">Apply Now</Link></li>
            </ul>
          </div>
          
          {/* Legal Column */}
          <div className="footer-column">
            <h4 className="footer-heading">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            © 2025 PARCELIS. All rights reserved.
          </div>
          <div className="footer-partner">
            <span>Underwritten by</span>
            <Shield size={20} className="partner-logo" />
            <span className="font-semibold">The Hartford</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
