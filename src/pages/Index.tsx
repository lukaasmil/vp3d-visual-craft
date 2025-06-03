
import { useState, useEffect } from "react";
import { ArrowRight, Printer, Zap, Shield, ChevronDown, Camera, Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const portfolioSlots = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    placeholder: true
  }));

  const services = [
    {
      icon: Printer,
      title: "Přesný tisk",
      description: "Vysoce rozlišovací 3D tisk s výjimečnými detaily a přesností"
    },
    {
      icon: Zap,
      title: "Rychlé dodání",
      description: "Rychlé výrobní cykly bez kompromisů v kvalitě nebo přesnosti"
    },
    {
      icon: Shield,
      title: "Zajištěná kvalita",
      description: "Přísná kontrola a testování kvality každého výtisku"
    }
  ];

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800 animate-fade-in">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-mono text-white hover:scale-105 transition-transform duration-300">
              VP<span className="text-red-500">3D</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Domů</a>
              <a href="#portfolio" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Portfolio</a>
              <a href="#services" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Služby</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-all duration-300 font-medium hover:scale-110 transform">Kontakt</a>
            </div>
            <Button className="bg-red-500 hover:bg-red-600 text-white font-medium border-0 transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25">
              Získat nabídku
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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

      {/* Portfolio Section */}
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

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white leading-tight">
              NAŠE <span className="text-red-500">SLUŽBY</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto font-light">
              Komplexní řešení 3D tisku navržená pro dokonalost
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-gray-900 border border-gray-800 hover:border-red-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/10 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-10 text-center">
                  <div className="mb-8">
                    <div className="w-16 h-16 mx-auto bg-red-500/20 rounded-lg flex items-center justify-center group-hover:bg-red-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6">
                      <service.icon className="w-8 h-8 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed font-light">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="py-16 px-6 bg-black border-t border-gray-900 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold font-mono text-white mb-6 hover:scale-105 transition-transform duration-300">
            VP<span className="text-red-500">3D</span>
          </div>
          <p className="text-gray-500 mb-8 font-light">Přesnost v každém rozměru</p>
          <div className="flex justify-center space-x-8 text-gray-500">
            <a href="#" className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Soukromí</a>
            <a href="#" className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Podmínky</a>
            <a href="#" className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Kontakt</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
