
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "lucide-react";

const platforms = [
  {
    name: "Shopify",
    logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg",
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Mercado Libre",
    logo: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.19.1/mercadolibre/logo__large_plus.png",
  },
  {
    name: "TikTok",
    logo: "https://sf-tb-sg.ibytedtos.com/obj/eden-sg/uhtyvueh7nulogpoguhm/tiktok-icon2.png",
  },
];

const IntegrationsSection = () => {
  return (
    <section id="integrations" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center py-1 px-3 rounded-full bg-kroni-purple/10 text-kroni-purple text-sm font-medium">
              <Link size={16} className="mr-1" />
              <span>Seamless Integrations</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-kroni-purple">
              Connect to All Your <br />
              Sales Platforms
            </h2>
            
            <p className="text-lg text-gray-600">
              Kroni Technologies integrates smoothly with all major e-commerce platforms. 
              Centralize your operations and manage all your sales channels from one place.
            </p>
            
            <Button className="bg-kroni-purple hover:bg-opacity-90 text-white">
              Explore Integrations
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {platforms.map((platform, index) => (
              <Card key={index} className="card-hover border border-gray-100">
                <CardContent className="flex items-center justify-center p-8 h-28">
                  <img 
                    src={platform.logo} 
                    alt={`${platform.name} logo`} 
                    className="h-12 max-w-full object-contain"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
