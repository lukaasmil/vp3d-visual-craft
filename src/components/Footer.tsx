
interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="py-16 px-6 bg-black border-t border-gray-900 animate-fade-in">
      <div className="max-w-7xl mx-auto text-center">
        <button 
          onClick={() => scrollToSection('home')}
          className="text-3xl font-bold font-mono text-white mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
        >
          VP<span className="text-red-500">3D</span>
        </button>
        <p className="text-gray-500 mb-8 font-light">Přesnost v každém rozměru</p>
        <div className="flex justify-center space-x-8 text-gray-500">
          <a href="#" className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Soukromí</a>
          <a href="#" className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Podmínky</a>
          <button onClick={() => scrollToSection('contact')} className="hover:text-red-500 transition-all duration-300 font-medium transform hover:scale-110">Kontakt</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
