
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <a href="/" className="inline-block text-kroni-purple font-bold text-2xl mb-4">
              KRONI<span className="text-kroni-teal">TECH</span>
            </a>
            <p className="text-gray-600 mb-4">
              AI-powered third-party logistics solutions to help your business scale efficiently.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-kroni-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-kroni-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-kroni-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-kroni-purple transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-kroni-purple">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">AI Logistics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Express Shipping</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Inventory Storage</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Order Fulfillment</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-kroni-purple">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-kroni-purple transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-kroni-purple">Subscribe</h3>
            <p className="text-gray-600 mb-4">
              Get the latest news and updates from Kroni Technologies.
            </p>
            <div className="flex space-x-2">
              <Input placeholder="Your email" className="bg-gray-100 border-gray-200" />
              <Button className="bg-kroni-purple text-white hover:bg-opacity-90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 Kroni Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-kroni-purple text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-kroni-purple text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-kroni-purple text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
