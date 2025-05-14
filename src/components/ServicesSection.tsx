
import { Database, Clock, Settings, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "AI-Driven Logistics",
    description: "Our artificial intelligence optimizes routes, predicts delays, and ensures your products reach customers faster than ever.",
    icon: Database,
  },
  {
    title: "Rapid Delivery",
    description: "With premium shipping options, get your products delivered within 0-3 days on our Pro plan, or 2-5 days on our Advanced plan.",
    icon: Clock,
  },
  {
    title: "Inventory Management",
    description: "Store your products in our warehouses with flexible space options based on your business needs and growth.",
    icon: Package,
  },
  {
    title: "Optimized Operations",
    description: "Our picking and packing service is efficient and cost-effective, with rates as low as $8 per piece depending on your plan.",
    icon: Settings,
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-kroni-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kroni-purple mb-4">
            AI-Powered Logistics Services
          </h2>
          <p className="text-lg text-gray-600">
            Leverage the power of AI to streamline your logistic operations with our comprehensive solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover border-t-4 border-t-kroni-purple">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-kroni-teal/20 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="text-kroni-purple" size={24} />
                </div>
                <CardTitle className="text-xl text-kroni-purple">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
