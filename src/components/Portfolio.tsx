
import { Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const portfolioSlots = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    placeholder: true
  }));

  return (
    <section id="portfolio" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
            NAŠE <span className="text-red-500">PORTFOLIO</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
            Prozkoumejte naši kolekci precizně vyrobených 3D tisků z různých odvětví a aplikací
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioSlots.map((slot, index) => (
            <Card 
              key={slot.id}
              className="group bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 overflow-hidden aspect-square transform hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0 h-full relative">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transition-all duration-500 group-hover:from-gray-700 group-hover:to-gray-800">
                  <div className="text-center opacity-50 group-hover:opacity-70 transition-all duration-500 transform group-hover:scale-110">
                    <Camera className="w-12 h-12 mx-auto text-gray-600 mb-4 group-hover:text-red-500 transition-colors duration-300" />
                    <div className="text-gray-500 text-sm font-medium">
                      Obrázek portfolia
                    </div>
                    <div className="text-gray-600 text-xs mt-1">
                      #{slot.id.toString().padStart(2, '0')}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-colors duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
