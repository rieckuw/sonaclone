
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0a0012] text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold mb-4">Sonaclone Agency</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              We create & post daily, high-quality content of you—without you ever recording again.
              Just one-time, 1-hour setup and your content runs on autopilot.
            </p>
            <Button className="bg-[#e4ff1a] hover:bg-[#eeff70] text-black text-sm font-bold px-6 py-3 rounded-full hover:shadow-[0_0_15px_rgba(228,255,26,0.4)] transition-all duration-300">
              Book a call
            </Button>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#e4ff1a]">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Content Creation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Personal Branding</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Social Media Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Brand Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-[#e4ff1a]">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
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
