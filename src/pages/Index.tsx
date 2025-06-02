
import { useState, useEffect } from "react";
import { ArrowRight, Printer, Zap, Shield, Sparkles, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Aerospace Components",
      category: "Industrial",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop",
      description: "High-precision aerospace parts with exceptional quality"
    },
    {
      title: "Medical Devices",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
      description: "Custom medical prototypes and devices"
    },
    {
      title: "Automotive Parts",
      category: "Automotive",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      description: "Rapid prototyping for automotive industry"
    },
    {
      title: "Consumer Products",
      category: "Design",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
      description: "Innovative consumer product development"
    }
  ];

  const services = [
    {
      icon: Printer,
      title: "3D Printing",
      description: "State-of-the-art 3D printing technology for precision manufacturing"
    },
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description: "Fast turnaround times for your prototype development needs"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring perfect results every time"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black">
              VP3D
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-black transition-colors">Home</a>
              <a href="#projects" className="text-gray-700 hover:text-black transition-colors">Projects</a>
              <a href="#services" className="text-gray-700 hover:text-black transition-colors">Services</a>
              <a href="#contact" className="text-gray-700 hover:text-black transition-colors">Contact</a>
            </div>
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              Get Quote
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="mb-6">
            <Sparkles className="w-16 h-16 mx-auto text-red-600" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Future of 3D Printing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Transforming ideas into reality with cutting-edge 3D printing technology
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of innovative 3D printing projects across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="group bg-white border border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm rounded">
                      {project.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive 3D printing solutions tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="group bg-white border border-gray-200 hover:border-red-600 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <service.icon className="w-16 h-16 mx-auto text-black group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's bring your ideas to life with our advanced 3D printing technology
          </p>
          <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-12 py-6">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl font-bold text-black mb-4">
            VP3D
          </div>
          <p className="text-gray-600 mb-6">Innovating the future of 3D printing</p>
          <div className="flex justify-center space-x-6 text-gray-600">
            <a href="#" className="hover:text-red-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-red-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-red-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
