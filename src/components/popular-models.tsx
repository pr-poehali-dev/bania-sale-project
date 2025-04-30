
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const models = [
  {
    id: 1,
    title: "Классика",
    price: "от 490 000 ₽",
    description: "Традиционная русская баня с парной и комнатой отдыха",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Площадь: 20 м²", "Парная: 9 м²", "Комната отдыха: 11 м²", "Материал: сосна"]
  },
  {
    id: 2,
    title: "Комфорт",
    price: "от 790 000 ₽",
    description: "Просторная баня с террасой и комнатой для гостей",
    image: "https://images.unsplash.com/photo-1595159694667-1c84ea3fad5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Площадь: 35 м²", "Парная: 12 м²", "Комната отдыха: 15 м²", "Терраса: 8 м²"]
  },
  {
    id: 3,
    title: "Премиум",
    price: "от 1 290 000 ₽",
    description: "Роскошная баня с панорамными окнами и купелью",
    image: "https://images.unsplash.com/photo-1586798658502-0dc367cb2776?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    features: ["Площадь: 50 м²", "Парная: 15 м²", "Комната отдыха: 20 м²", "Терраса: 15 м²", "Купель"]
  }
];

const PopularModels = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Популярные модели бань</h2>
          <p className="text-lg text-gray-600">
            Выберите подходящую модель или закажите индивидуальный проект, 
            учитывающий все ваши пожелания
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map(model => (
            <Card key={model.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="h-64 overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{model.title}</CardTitle>
                  <div className="text-[#9b87f5] font-bold">{model.price}</div>
                </div>
                <CardDescription>{model.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {model.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2">
                        <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Подробнее</Button>
                <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6]">Заказать</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10">
            Смотреть все модели
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PopularModels;
