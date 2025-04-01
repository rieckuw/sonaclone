
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0012] text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">Sonaclone Agency</h3>
            <p className="text-gray-400 mb-4 max-w-md">
            We turn one setup session into unlimited talking head contents posted daily, helping you build authority 10x faster while you focus on your business, not recording.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#a855f7]">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#why-choose-us" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#content-preview" className="text-gray-400 hover:text-white transition-colors">Examples</a></li>
              <li><a href="#booking" className="text-gray-400 hover:text-white transition-colors">Demo Call</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#a855f7]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex justify-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Sonaclone Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
