import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HomePage from "./HomePage";

const Index = () => {
  return (
    <div>
      <Navigation />
      <div className="pt-20 lg:pt-24">
        <HomePage />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
