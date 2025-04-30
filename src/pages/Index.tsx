
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
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Консультация",
                  description: "Обсуждаем ваши пожелания и требования к будущей бане"
                },
                {
                  step: "02",
                  title: "Проектирование",
                  description: "Создаем индивидуальный проект с учетом всех нюансов и особенностей"
                },
                {
                  step: "03",
                  title: "Строительство",
                  description: "Выполняем все строительные и отделочные работы под ключ"
                },
                {
                  step: "04",
                  title: "Сдача объекта",
                  description: "Передаем готовую баню с полным комплектом документов"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-[#9b87f5] text-white text-3xl font-bold w-16 h-16 rounded-full flex items-center justify-center mb-6">
                    {step.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 left-16 right-0 h-0.5 bg-gray-200 z-0"></div>
                  )}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
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
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#9b87f5] hover:bg-[#8B5CF6] text-white"
                  onClick={() => setShowCallbackForm(true)}
                >
                  <PhoneCall className="mr-2 h-5 w-5" />
                  Заказать звонок
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Clock className="mr-2 h-5 w-5" />
                  Рассчитать стоимость
                </Button>
              </div>
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
            <div className="grid gap-4 py-4">
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
                <label htmlFor="message" className="text-sm font-medium">
                  Комментарий (необязательно)
                </label>
                <Textarea id="message" placeholder="Напишите удобное время для звонка или интересующий вопрос" />
              </div>
            </div>
            <DialogFooter>
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
