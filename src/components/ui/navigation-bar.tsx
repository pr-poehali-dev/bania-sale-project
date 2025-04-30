
import { Link } from "react-router-dom";
import { PhoneCall, Menu, X } from "lucide-react";
import { Button } from "./button";
import { useState } from "react";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 shadow-sm w-full z-50 sticky top-0">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="font-bold text-2xl text-primary">БаниРФ</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary transition-colors font-medium">Главная</Link>
          <Link to="/catalog" className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</Link>
          <Link to="/projects" className="text-gray-700 hover:text-primary transition-colors font-medium">Проекты</Link>
          <Link to="/contacts" className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</Link>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div className="flex flex-col items-end">
            <span className="text-sm text-gray-500">Звоните нам:</span>
            <a href="tel:+78001234567" className="text-primary font-semibold hover:underline">
              8 (800) 123-45-67
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <PhoneCall className="h-4 w-4 mr-2" />
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-gray-700">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-50 py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors font-medium">Главная</Link>
            <Link to="/catalog" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors font-medium">Каталог</Link>
            <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors font-medium">О нас</Link>
            <Link to="/projects" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors font-medium">Проекты</Link>
            <Link to="/contacts" onClick={toggleMenu} className="text-gray-700 hover:text-primary transition-colors font-medium">Контакты</Link>
            <div className="pt-4 border-t">
              <a href="tel:+78001234567" className="text-primary font-semibold flex items-center">
                <PhoneCall className="h-4 w-4 mr-2" />
                8 (800) 123-45-67
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90 w-full">
              Заказать звонок
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
