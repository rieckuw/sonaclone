
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
              We create & post daily, high-quality content of you—without you ever recording again.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#e4ff1a]">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Content Creation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Management</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-3 text-[#e4ff1a]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Sonaclone Agency. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#e4ff1a] transition-colors">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-[#e4ff1a] transition-colors">LinkedIn</a>
            <a href="#" className="text-gray-400 hover:text-[#e4ff1a] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
