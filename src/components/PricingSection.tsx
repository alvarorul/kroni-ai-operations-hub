
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const planFeatures = {
  pro: [
    "Premium Shipments (0-3 days delivery)",
    "Premium Shipment Cost: $100 MXN",
    "More Storage Space for Products",
    "$8 Picking per Piece",
    "Priority Support",
    "Advanced Analytics",
    "All Platform Integrations",
    "Custom Packaging Options"
  ],
  advanced: [
    "Standard Shipments (2-5 days delivery)",
    "Standard Shipment Cost: $110 MXN",
    "Standard Storage Space for Products",
    "$9 Picking per Piece",
    "Regular Support",
    "Basic Analytics",
    "All Platform Integrations",
    "Standard Packaging"
  ]
};

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-kroni-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kroni-purple mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600">
            Choose the plan that fits your business needs and scale as you grow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Advanced Plan */}
          <Card className="card-hover border-t-4 border-t-kroni-teal">
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-kroni-purple">
                Advanced Plan
              </CardTitle>
              <div className="mt-3 mb-5">
                <span className="text-4xl font-bold">$9,999 MXN</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-gray-600">
                Perfect for small to medium businesses looking to optimize their logistics.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {planFeatures.advanced.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-kroni-teal/20 flex items-center justify-center mr-2">
                      <Check size={14} className="text-kroni-teal" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-kroni-teal text-kroni-purple hover:bg-kroni-teal/90">
                Select Advanced Plan
              </Button>
            </CardFooter>
          </Card>
          
          {/* Pro Plan */}
          <Card className="card-hover border-t-4 border-t-kroni-purple relative">
            <div className="absolute top-0 right-6 transform -translate-y-1/2 bg-kroni-purple text-white text-sm py-1 px-3 rounded-full">
              Recommended
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="text-2xl font-bold text-kroni-purple">
                Pro Plan
              </CardTitle>
              <div className="mt-3 mb-5">
                <span className="text-4xl font-bold">$19,999 MXN</span>
                <span className="text-gray-500 ml-2">/ month</span>
              </div>
              <p className="text-gray-600">
                For businesses that need the fastest delivery and maximum storage capacity.
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {planFeatures.pro.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-kroni-purple/20 flex items-center justify-center mr-2">
                      <Check size={14} className="text-kroni-purple" />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-kroni-purple text-white hover:bg-kroni-purple/90">
                Select Pro Plan
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution for your business? Contact us for enterprise pricing.
          </p>
          <Button variant="outline" className="border-kroni-purple text-kroni-purple hover:bg-kroni-purple/5">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
