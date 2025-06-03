
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  scrollToSection: (sectionId: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold font-mono text-white hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            VP<span className="text-red-500">3D</span>
          </button>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Domů</button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Portfolio</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Služby</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Kontakt</button>
          </div>
          <Button className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30 px-6 py-3 text-base">
            <Mail className="mr-2 w-4 h-4" />
            Získat nabídku
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
