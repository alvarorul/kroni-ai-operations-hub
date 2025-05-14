
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="py-20 bg-kroni-purple text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-lg md:text-xl text-gray-200">
            Let us handle your operations while you focus on selling and growing your business.
          </p>
          <div className="pt-4">
            <Button size="lg" className="bg-kroni-teal text-kroni-purple hover:bg-opacity-90 font-medium px-8">
              Get Started Today
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
