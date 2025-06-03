
import { ShoppingCart, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-r from-gray-950 via-black to-gray-950">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
          PŘIPRAVENI <span className="text-red-500">TVOŘIT</span>?
        </h2>
        <p className="text-xl text-gray-400 mb-12 font-light max-w-3xl mx-auto">
          Přeměňte své nápady na realitu pomocí naší přesné 3D tiskové technologie
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white text-lg px-12 py-6 font-medium animate-glow transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/25">
            <ShoppingCart className="mr-2 w-5 h-5" />
            Objednat
          </Button>
          <Button size="lg" variant="outline" className="border-gray-300 bg-gray-900 text-white hover:bg-gray-800 hover:border-white text-lg px-12 py-6 font-medium transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
            <Mail className="mr-2 w-5 h-5" />
            Získat nabídku
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
