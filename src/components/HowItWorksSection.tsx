
import React, { useState } from "react";
import { 
  AppWindow, ClipboardList, Store, Truck, Warehouse, 
  Box, Clock, Zap, MapPin, Cog, Brain, FileText, BarChart 
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Progress } from "@/components/ui/progress";

// Componente para cada paso del proceso
interface StepProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  effect?: "hover" | "click" | "scroll" | "none";
  additionalContent?: React.ReactNode;
  index: number;
}

const Step: React.FC<StepProps> = ({ 
  title, 
  description, 
  icon, 
  effect = "none",
  additionalContent,
  index
}) => {
  const [hovered, setHovered] = useState(false);
  const [progress, setProgress] = useState(0);
  const [blink, setBlink] = useState(false);

  React.useEffect(() => {
    if (effect === "scroll" && hovered) {
      let interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(interval);
    }

    if (effect === "hover" && index === 4 && hovered) {
      const blinkInterval = setInterval(() => {
        setBlink(prev => !prev);
      }, 500);
      return () => clearInterval(blinkInterval);
    }
  }, [effect, hovered, index]);

  return (
    <div 
      className={`relative flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md border border-gray-100 h-full transition-all duration-300 ${hovered ? 'transform -translate-y-2' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        if (effect === "scroll") setProgress(0);
        if (effect === "hover" && index === 4) setBlink(false);
      }}
      tabIndex={0}
      aria-label={`Paso ${index + 1}: ${title}`}
    >
      <div className={`w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-r from-kroni-purple/10 to-kroni-teal/10 mb-4 ${effect === "hover" && index === 2 ? (hovered ? 'transform translate-x-2' : '') : ''} transition-all duration-300`}>
        <div className={`text-kroni-purple ${effect === "hover" && index === 4 && blink ? 'text-yellow-500' : ''}`}>
          {icon}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 text-kroni-dark">{title}</h3>
      {effect === "hover" && index !== 4 && hovered ? (
        <p className="text-sm text-kroni-dark/80 animate-fade-in">{description}</p>
      ) : effect !== "hover" ? (
        <p className="text-sm text-kroni-dark/80">{description}</p>
      ) : null}
      
      {effect === "scroll" && (
        <div className="w-full mt-4">
          <Progress value={progress} className="h-2" />
          <p className="text-xs mt-1 text-right font-mono">{progress}% precisión de stock</p>
        </div>
      )}

      {additionalContent}
    </div>
  );
};

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      title: "Registro rápido y acceso al panel",
      description: "Regístrate en 2 minutos y gestiona todo desde tu dashboard.",
      icon: <div className="flex"><AppWindow className="w-5 h-5 mr-1" /><ClipboardList className="w-5 h-5" /></div>,
      effect: "hover" as const,
    },
    {
      title: "Conecta tu tienda en un clic",
      description: "Integración con las principales plataformas de e-commerce.",
      icon: <Store className="w-6 h-6" />,
      effect: "click" as const,
      additionalContent: (
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-xs text-kroni-purple underline mt-4 focus:outline-none focus:ring-2 focus:ring-kroni-purple rounded-md px-2">
              Ver plataformas compatibles
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64">
            <div className="space-y-2">
              <h4 className="font-semibold">Plataformas compatibles:</h4>
              <ul className="text-sm">
                <li className="flex items-center space-x-2">
                  <Store className="w-4 h-4 text-kroni-purple" />
                  <span>Shopify</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Store className="w-4 h-4 text-kroni-purple" />
                  <span>Amazon</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Store className="w-4 h-4 text-kroni-purple" />
                  <span>Mercado Libre</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Store className="w-4 h-4 text-kroni-purple" />
                  <span>TikTok Shop</span>
                </li>
              </ul>
            </div>
          </PopoverContent>
        </Popover>
      ),
    },
    {
      title: "Envío de inventario",
      description: "Mudanza por nuestra cuenta, desde tu bodega hasta la nuestra.",
      icon: <div className="flex"><Truck className="w-5 h-5 mr-1" /><Warehouse className="w-5 h-5" /></div>,
      effect: "hover" as const,
    },
    {
      title: "Almacenamiento y control de stock",
      description: "Gestión precisa de tu inventario en tiempo real.",
      icon: <Box className="w-6 h-6" />,
      effect: "scroll" as const,
    },
    {
      title: "Despacho en menos de 24 horas",
      description: "Envíos rápidos y seguros para tus clientes.",
      icon: <div className="flex items-center"><Box className="w-4 h-4" /><Clock className="w-4 h-4 mx-1" /><Zap className="w-4 h-4" /></div>,
      effect: "hover" as const,
    },
    {
      title: "Tarifas optimizadas con IA",
      description: "Precios calculados según ubicación para maximizar eficiencia.",
      icon: <div className="flex items-center"><MapPin className="w-4 h-4" /><Cog className="w-4 h-4 mx-1" /><Brain className="w-4 h-4" /></div>,
      effect: "click" as const,
      additionalContent: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="text-xs text-kroni-purple underline mt-4 focus:outline-none focus:ring-2 focus:ring-kroni-purple rounded-md px-2">
                ¿Cómo funciona?
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Cálculo instantáneo con algoritmos ML</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
    },
    {
      title: "Reportes inteligentes con IA",
      description: "Analítica avanzada para optimizar tu operación.",
      icon: <div className="flex items-center"><FileText className="w-4 h-4" /><BarChart className="w-4 h-4 mx-1" /><Cog className="w-4 h-4" /></div>,
      effect: "hover" as const,
      additionalContent: (
        <div className="w-full mt-4">
          <div className="flex justify-between space-x-1">
            <div className="w-1/4 bg-gray-200 rounded-full">
              <div className="h-8 bg-kroni-teal rounded-full animate-pulse-slow" style={{width: '90%'}}></div>
            </div>
            <div className="w-1/4 bg-gray-200 rounded-full">
              <div className="h-8 bg-kroni-purple rounded-full animate-pulse-slow" style={{width: '75%'}}></div>
            </div>
            <div className="w-1/4 bg-gray-200 rounded-full">
              <div className="h-8 bg-kroni-teal rounded-full animate-pulse-slow" style={{width: '85%'}}></div>
            </div>
            <div className="w-1/4 bg-gray-200 rounded-full">
              <div className="h-8 bg-kroni-purple rounded-full animate-pulse-slow" style={{width: '95%'}}></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  // Versión móvil: carrusel con los pasos
  const mobile = (
    <div className="px-4 md:hidden">
      <Carousel className="w-full">
        <CarouselContent>
          {steps.map((step, index) => (
            <CarouselItem key={index} className="pl-4">
              <div className="p-1">
                <Step 
                  title={step.title} 
                  description={step.description} 
                  icon={step.icon} 
                  effect={step.effect} 
                  additionalContent={step.additionalContent}
                  index={index}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex items-center justify-center mt-4 gap-2">
          <CarouselPrevious className="static translate-y-0 mr-2" />
          <div className="flex space-x-2 justify-center">
            {steps.map((_, index) => (
              <div 
                key={index} 
                className={`h-2 w-2 rounded-full ${index === 0 ? 'bg-kroni-purple' : 'bg-gray-300'}`}
                aria-label={`Ir al paso ${index + 1}`}
              />
            ))}
          </div>
          <CarouselNext className="static translate-y-0 ml-2" />
        </div>
      </Carousel>
    </div>
  );

  // Versión desktop: grid con todos los pasos
  const desktop = (
    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {steps.map((step, index) => (
        <Step 
          key={index} 
          title={step.title} 
          description={step.description} 
          icon={step.icon} 
          effect={step.effect} 
          additionalContent={step.additionalContent}
          index={index}
        />
      ))}
    </div>
  );

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-kroni-purple mb-4">
            Cómo funciona Kroni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un proceso simple y eficiente para gestionar tu logística e-commerce
          </p>
        </div>
        
        {mobile}
        {desktop}
        
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl font-semibold text-kroni-purple italic">
            "No es magia, es fulfillment hecho a la medida."
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
