
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1597309755245-24a937067a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-40"></div>
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Русская баня под ключ<br />
            <span className="text-[#9b87f5]">с доставкой по всей России</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Строим надежные и долговечные бани с заботой о каждой детали.
            От проекта до установки — полное сопровождение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white">
              Смотреть каталог
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Рассчитать стоимость
            </Button>
          </div>
          <div className="flex flex-col md:flex-row gap-8 mt-16">
            <div className="flex items-center">
              <div className="bg-[#9b87f5] rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Гарантия качества</h3>
                <p className="text-sm text-gray-200">5 лет на все работы</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#9b87f5] rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Экологичные материалы</h3>
                <p className="text-sm text-gray-200">Безопасно для здоровья</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="bg-[#9b87f5] rounded-full p-3 mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium">Доставка по России</h3>
                <p className="text-sm text-gray-200">В любой регион</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
