
import { Button } from "@/components/ui/button";
import { ArrowRight, ZapIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 md:pt-40 md:pb-32 bg-gradient-kroni">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-kroni-teal/30 text-kroni-purple text-sm font-medium">
              <ZapIcon size={16} className="mr-1" />
              <span>AI-Powered Logistics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Focus on <span className="text-kroni-teal">Selling</span>,<br />
              We Handle the <span className="text-kroni-teal">Operations</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-200">
              Kroni Technologies delivers AI-driven 3PL solutions with unmatched speed and quality.
              Let us handle your logistics while you grow your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-kroni-teal text-kroni-purple hover:bg-opacity-90 font-medium px-6">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-kroni-purple hover:bg-white hover:bg-opacity-10">
                View Pricing
              </Button>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-kroni-teal rounded-full opacity-20 animate-pulse-slow"></div>
            <div className="relative z-10 bg-white p-2 rounded-xl shadow-2xl animate-float">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="Logistics dashboard" 
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-kroni-purple rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
