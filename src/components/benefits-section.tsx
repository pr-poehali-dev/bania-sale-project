
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const benefits = {
  "quality": [
    {
      title: "Премиальные материалы",
      description: "Используем только проверенные материалы высшего качества для строительства и отделки бань",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <circle cx="12" cy="8" r="6" />
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </svg>
      )
    },
    {
      title: "Опытные мастера",
      description: "Наша команда состоит из опытных мастеров с многолетним стажем строительства бань",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      title: "Строгий контроль качества",
      description: "Тщательный контроль на каждом этапе строительства обеспечивает безупречное качество готовой бани",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    }
  ],
  "service": [
    {
      title: "Индивидуальный подход",
      description: "Создаем уникальные проекты, учитывающие все ваши пожелания и особенности участка",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M2 12h20" />
          <path d="M2 12a10 10 0 0 1 20 0" />
          <path d="M2 12a10 10 0 0 0 20 0" />
          <path d="M12 2v20" />
        </svg>
      )
    },
    {
      title: "Прозрачная смета",
      description: "Фиксированная стоимость без скрытых платежей и неожиданных доплат",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <rect x="2" y="5" width="20" height="14" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
        </svg>
      )
    },
    {
      title: "Соблюдение сроков",
      description: "Точное соблюдение согласованных сроков строительства и сдачи объекта",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    }
  ],
  "warranty": [
    {
      title: "Гарантия 5 лет",
      description: "Предоставляем официальную гарантию на все виды работ сроком до 5 лет",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Сервисное обслуживание",
      description: "Регулярное техническое обслуживание для поддержания бани в идеальном состоянии",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      )
    },
    {
      title: "Техническая поддержка",
      description: "Консультации по эксплуатации и обслуживанию бани в любое время",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5]">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      )
    }
  ]
};

const BenefitsSection = () => {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему выбирают нас</h2>
          <p className="text-lg text-gray-600">
            Мы создаем бани, которые становятся любимым местом отдыха для всей семьи
          </p>
        </div>
        
        <Tabs defaultValue="quality" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger 
              value="quality" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Качество
            </TabsTrigger>
            <TabsTrigger 
              value="service" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Сервис
            </TabsTrigger>
            <TabsTrigger 
              value="warranty" 
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
            >
              Гарантии
            </TabsTrigger>
          </TabsList>
          
          {Object.entries(benefits).map(([category, items]) => (
            <TabsContent key={category} value={category} className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {items.map((benefit, index) => (
                  <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        <div className="mt-16 p-8 bg-gray-50 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Готовы обсудить ваш проект?</h3>
              <p className="text-gray-600 mb-6">
                Наши специалисты готовы ответить на все ваши вопросы и помочь с выбором подходящей бани
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#9b87f5] hover:bg-[#8B5CF6]">
                  Связаться с нами
                </Button>
                <Button variant="outline" className="text-[#9b87f5] border-[#9b87f5] hover:bg-[#9b87f5]/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/3">
              <div className="bg-white p-6 rounded-lg shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-bold mr-3">
                    А
                  </div>
                  <div>
                    <div className="font-semibold">Андрей Петров</div>
                    <div className="text-sm text-gray-500">Главный архитектор</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Мы с удовольствием поможем воплотить в жизнь ваше представление об идеальной бане. Обращайтесь!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
