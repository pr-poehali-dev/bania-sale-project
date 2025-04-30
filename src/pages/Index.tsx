
import NavigationBar from "@/components/ui/navigation-bar";
import HeroSection from "@/components/hero-section";
import PopularModels from "@/components/popular-models";
import BenefitsSection from "@/components/benefits-section";
import Footer from "@/components/footer";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, Clock, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Index = () => {
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavigationBar />
      <main className="flex-grow">
        <HeroSection />
        
        {/* Процесс работы */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-lg text-gray-600">
                Прозрачный процесс от первого звонка до сдачи объекта
              </p>
            </div>
            
            <Tabs defaultValue="consultation" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="consultation" className="py-3 data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  <span className="text-lg font-semibold">01</span>
                  <span className="ml-2">Консультация</span>
                </TabsTrigger>
                <TabsTrigger value="design" className="py-3 data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  <span className="text-lg font-semibold">02</span>
                  <span className="ml-2">Проектирование</span>
                </TabsTrigger>
                <TabsTrigger value="building" className="py-3 data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  <span className="text-lg font-semibold">03</span>
                  <span className="ml-2">Строительство</span>
                </TabsTrigger>
                <TabsTrigger value="completion" className="py-3 data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  <span className="text-lg font-semibold">04</span>
                  <span className="ml-2">Сдача объекта</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="consultation" className="mt-8 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Консультация</h3>
                  <p className="text-gray-700 mb-4">
                    На первом этапе мы проводим подробную консультацию, где обсуждаем ваши пожелания, требования к будущей бане и отвечаем на все вопросы.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Детальное обсуждение всех пожеланий по размеру, планировке и материалам
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Осмотр участка или оценка по фотографиям для выбора оптимального расположения
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Предварительная оценка стоимости и сроков выполнения работ
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="design" className="mt-8 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Проектирование</h3>
                  <p className="text-gray-700 mb-4">
                    На этапе проектирования мы создаем индивидуальный проект с учетом всех нюансов и особенностей вашего участка и пожеланий.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Разработка архитектурного проекта с детальными чертежами
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      3D-визуализация для наглядного представления будущей бани
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Составление подробной сметы и графика работ
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="building" className="mt-8 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Строительство</h3>
                  <p className="text-gray-700 mb-4">
                    На этапе строительства наши опытные мастера выполняют все строительные и отделочные работы согласно проекту и графику.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Закупка качественных материалов и доставка их на участок
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Строительство фундамента, возведение стен, монтаж кровли
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Внутренняя отделка, установка оборудования и коммуникаций
                    </li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="completion" className="mt-8 animate-fade-in">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-4">Сдача объекта</h3>
                  <p className="text-gray-700 mb-4">
                    На финальном этапе мы проводим проверку качества выполненных работ и передаем вам готовую баню со всей необходимой документацией.
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Финальная проверка всех систем и конструкций
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Уборка территории и подготовка бани к эксплуатации
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#9b87f5] mr-2 mt-1">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Передача полного комплекта документов и гарантийных обязательств
                    </li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        
        <PopularModels />
        <BenefitsSection />
        
        {/* CTA Секция */}
        <div className="py-20 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы создать баню своей мечты?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Свяжитесь с нами сегодня, и мы поможем воплотить ваши идеи в реальность
              </p>
              
              <Tabs defaultValue="callback" className="max-w-xl mx-auto">
                <TabsList className="w-full bg-white/10 rounded-lg p-1">
                  <TabsTrigger value="callback" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                    <PhoneCall className="mr-2 h-5 w-5" />
                    Заказать звонок
                  </TabsTrigger>
                  <TabsTrigger value="calculate" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                    <Clock className="mr-2 h-5 w-5" />
                    Рассчитать стоимость
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="callback" className="mt-6 animate-fade-in">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="nameCallback" className="text-sm font-medium text-white">
                          Ваше имя
                        </label>
                        <Input id="nameCallback" placeholder="Иван Иванов" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phoneCallback" className="text-sm font-medium text-white">
                          Номер телефона
                        </label>
                        <Input id="phoneCallback" placeholder="+7 (___) ___-__-__" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="timeCallback" className="text-sm font-medium text-white">
                          Удобное время для звонка
                        </label>
                        <Input id="timeCallback" placeholder="Например: после 18:00" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <Button type="submit" className="bg-[#9b87f5] hover:bg-[#8B5CF6] mt-2">
                        Отправить заявку
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="calculate" className="mt-6 animate-fade-in">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <div className="grid gap-4">
                      <div className="grid gap-2">
                        <label htmlFor="nameCalculate" className="text-sm font-medium text-white">
                          Ваше имя
                        </label>
                        <Input id="nameCalculate" placeholder="Иван Иванов" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="phoneCalculate" className="text-sm font-medium text-white">
                          Номер телефона
                        </label>
                        <Input id="phoneCalculate" placeholder="+7 (___) ___-__-__" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="bathType" className="text-sm font-medium text-white">
                          Тип бани
                        </label>
                        <Input id="bathType" placeholder="Например: Классика, Комфорт, Премиум" className="bg-white/5 border-white/20 text-white" />
                      </div>
                      <div className="grid gap-2">
                        <label htmlFor="messageCalculate" className="text-sm font-medium text-white">
                          Дополнительные пожелания
                        </label>
                        <Textarea id="messageCalculate" placeholder="Опишите ваши пожелания по планировке, размеру и материалам" className="bg-white/5 border-white/20 text-white resize-none" />
                      </div>
                      <Button type="submit" className="bg-[#9b87f5] hover:bg-[#8B5CF6] mt-2">
                        Получить расчет
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Форма обратного звонка */}
        <Dialog open={showCallbackForm} onOpenChange={setShowCallbackForm}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Заказать обратный звонок</DialogTitle>
              <DialogDescription>
                Оставьте свои контактные данные, и мы перезвоним вам в ближайшее время
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="callback" className="w-full">
              <TabsList className="w-full">
                <TabsTrigger value="callback" className="data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  Обратный звонок
                </TabsTrigger>
                <TabsTrigger value="question" className="data-[state=active]:bg-[#9b87f5]/10 data-[state=active]:text-[#9b87f5]">
                  Задать вопрос
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="callback" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input id="name" placeholder="Иван Иванов" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Номер телефона
                    </label>
                    <Input id="phone" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="time" className="text-sm font-medium">
                      Удобное время для звонка
                    </label>
                    <Input id="time" placeholder="Например: после 18:00" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="question" className="mt-4">
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <label htmlFor="namequestion" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input id="namequestion" placeholder="Иван Иванов" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="phonequestion" className="text-sm font-medium">
                      Номер телефона
                    </label>
                    <Input id="phonequestion" placeholder="+7 (___) ___-__-__" />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="messagequestion" className="text-sm font-medium">
                      Ваш вопрос
                    </label>
                    <Textarea id="messagequestion" placeholder="Опишите ваш вопрос подробнее" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter className="mt-4">
              <Button type="submit" className="bg-[#9b87f5] hover:bg-[#8B5CF6] w-full">
                Отправить заявку
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
