import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Merchant Dashboard</h1>
          <p className="text-muted-foreground mb-8">
            The merchant dashboard login will be available once your application is approved and your account is set up.
          </p>
          <div className="bg-muted rounded-lg p-8 mb-6">
            <p className="text-sm text-muted-foreground mb-4">
              Don't have an account yet?
            </p>
            <Button asChild variant="hero" className="w-full">
              <Link to="/apply">Apply Now</Link>
            </Button>
          </div>
          <Button asChild variant="ghost">
            <Link to="/">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
