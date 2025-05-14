
import { Button } from "@/components/ui/button";
import { ChartBar, TrendingUp, Package } from "lucide-react";

const DashboardSection = () => {
  return (
    <section id="dashboard" className="py-20 gradient-bg">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-kroni-purple mb-4">
            Real-Time Dashboard
          </h2>
          <p className="text-lg text-gray-600">
            Monitor your logistics operations in real-time with our comprehensive dashboard that provides actionable insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative order-2 md:order-1">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                alt="Kroni Dashboard" 
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-kroni-purple p-3 md:p-6 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2">
                <TrendingUp className="text-white" size={24} />
                <span className="text-white font-bold text-lg">98.7% On-time delivery</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 md:order-2">
            <div className="space-y-4">
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-kroni-teal/20 text-kroni-purple text-sm font-medium">
                <ChartBar size={16} className="mr-1" />
                <span>Real-Time Analytics</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-kroni-purple">
                Make Data-Driven Decisions
              </h3>
              
              <p className="text-gray-600">
                Our AI-powered dashboard gives you real-time insights into:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-kroni-teal/20 flex items-center justify-center mr-2 mt-1">
                    <Package size={14} className="text-kroni-purple" />
                  </div>
                  <span>Order status and tracking in real-time</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-kroni-teal/20 flex items-center justify-center mr-2 mt-1">
                    <Package size={14} className="text-kroni-purple" />
                  </div>
                  <span>Inventory levels with automatic alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-kroni-teal/20 flex items-center justify-center mr-2 mt-1">
                    <Package size={14} className="text-kroni-purple" />
                  </div>
                  <span>AI-powered product restocking recommendations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-kroni-teal/20 flex items-center justify-center mr-2 mt-1">
                    <Package size={14} className="text-kroni-purple" />
                  </div>
                  <span>Delivery performance and metrics</span>
                </li>
              </ul>
            </div>
            
            <Button className="bg-kroni-purple hover:bg-opacity-90 text-white">
              Request Demo Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
