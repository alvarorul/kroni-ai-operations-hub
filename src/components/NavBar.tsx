import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import LogoKroni from './LogoKroni';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <LogoKroni 
              width={120} 
              className="inline-block align-middle mr-2" 
              variant={isScrolled ? 'morado' : 'azul'}
            />
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#services" className="text-gray-700 hover:text-kroni-purple transition-colors">Services</a>
            <a href="#integrations" className="text-gray-700 hover:text-kroni-purple transition-colors">Integrations</a>
            <a href="#dashboard" className="text-gray-700 hover:text-kroni-purple transition-colors">Dashboard</a>
            <a href="#pricing" className="text-gray-700 hover:text-kroni-purple transition-colors">Pricing</a>
            <Button className="bg-kroni-purple hover:bg-opacity-90 text-white">
              Contact Us
            </Button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="p-2"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 flex flex-col">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 py-2 hover:bg-gray-100 px-4 rounded">Services</a>
            <a href="#integrations" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 py-2 hover:bg-gray-100 px-4 rounded">Integrations</a>
            <a href="#dashboard" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 py-2 hover:bg-gray-100 px-4 rounded">Dashboard</a>
            <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="text-gray-700 py-2 hover:bg-gray-100 px-4 rounded">Pricing</a>
            <Button className="bg-kroni-purple hover:bg-opacity-90 text-white w-full">
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
