
import { Printer, ChevronDown, ShoppingCart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_70%)]"></div>
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 animate-fade-in">
        <div className="mb-8 animate-float">
          <div className="w-20 h-20 mx-auto bg-red-500/20 rounded-full flex items-center justify-center animate-glow hover:bg-red-500/30 transition-all duration-500">
            <Printer className="w-10 h-10 text-red-500" />
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight animate-scale-in">
          PŘESNÝ
          <br />
          <span className="text-red-500">3D TISK</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mb-12 font-light max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Přeměňujeme digitální koncepty na hmotnou realitu pomocí nejmodernější technologie a nekompromisní přesnosti
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in delay-500">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-10 py-6 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25">
            <ShoppingCart className="mr-2 w-5 h-5" />
            Objednat
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 bg-gray-900 text-white hover:bg-gray-800 hover:border-white text-lg px-10 py-6 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Mail className="mr-2 w-5 h-5" />
            Kontaktovat nás
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
