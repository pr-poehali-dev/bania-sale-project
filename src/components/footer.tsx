
import { Link } from "react-router-dom";
import { PhoneCall, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">БаниРФ</h2>
            <p className="text-gray-400 mb-6">
              Строительство качественных бань под ключ с доставкой по всей России. 
              Создаем уютные места для отдыха и восстановления.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Каталог</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog/classic" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Классические бани
                </Link>
              </li>
              <li>
                <Link to="/catalog/modern" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Современные бани
                </Link>
              </li>
              <li>
                <Link to="/catalog/premium" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Премиум бани
                </Link>
              </li>
              <li>
                <Link to="/catalog/saunas" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Финские сауны
                </Link>
              </li>
              <li>
                <Link to="/catalog/accessories" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Аксессуары для бань
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Информация</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  О компании
                </Link>
              </li>
              <li>
                <Link to="/delivery" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Доставка и монтаж
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Оплата
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Гарантия
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                  Наши проекты
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <PhoneCall size={18} className="mr-3 mt-1 text-[#9b87f5]" />
                <div>
                  <p className="text-white">8 (800) 123-45-67</p>
                  <p className="text-sm text-gray-400">Ежедневно с 9:00 до 20:00</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1 text-[#9b87f5]" />
                <div>
                  <a href="mailto:info@banirf.ru" className="text-white hover:text-[#9b87f5]">
                    info@banirf.ru
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 text-[#9b87f5]" />
                <div>
                  <p className="text-white">г. Москва, ул. Банная, 123</p>
                  <p className="text-sm text-gray-400">Главный офис</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 БаниРФ. Все права защищены.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-500 text-sm hover:text-[#9b87f5]">
              Политика конфиденциальности
            </Link>
            <Link to="/terms" className="text-gray-500 text-sm hover:text-[#9b87f5]">
              Пользовательское соглашение
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
