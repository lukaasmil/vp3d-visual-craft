
import { Printer, Zap, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
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
  );
};

export default Services;
