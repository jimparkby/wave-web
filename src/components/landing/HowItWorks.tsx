import { CreditCard, Calendar, MapPin, Check, Wine } from "lucide-react";
import dateImg from "@/assets/date-couple.png";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: CreditCard, title: "Вы оба платите за себя", desc: "Небольшой взнос отсеивает тех, кто не дойдёт." },
  { icon: Calendar, title: "Выбираете дату и время", desc: "В пару тапов, без бесконечной переписки." },
  { icon: MapPin, title: "Мы подбираем место", desc: "Проверенные кафе, бары и прогулки рядом с вами." },
  { icon: Check, title: "Вы оба подтверждаете встречу", desc: "Приходите и отмечаетесь по прибытии." },
  { icon: Wine, title: "Знакомитесь оффлайн!", desc: "Без банального смолтока — сразу к делу." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Как работает Wave</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
              Что происходит<br /> после <span className="italic">мэтча?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Как только вы совпали, мы организуем вашу первую встречу в безопасном месте.
              Никакой переписки на недели — только те, кто реально приходит.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((s, i) => (
                <li key={i} className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-secondary grid place-items-center text-primary group-hover:bg-coral group-hover:text-white transition-colors">
                    <s.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-serif font-semibold text-lg text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>

            <Button variant="hero" size="lg" className="mt-10">
              Что такое Wave →
            </Button>

            <div className="mt-8 p-6 rounded-2xl bg-secondary/60 border border-primary/10">
              <p className="text-sm font-semibold tracking-[0.15em] text-coral uppercase mb-3">Минск — наш дом</p>
              <p className="text-foreground/80 text-base leading-relaxed">
                Мы сотрудничаем с нишевыми заведениями Минска — кафе, барами, арт-пространствами — и выбираем только те места, где рождается настоящая атмосфера. Вместе мы строим комьюнити людей, которые ценят живое общение, крутые места и настоящие эмоции. Wave — это не просто свидания, это новая культура знакомств в твоём городе.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-coral/10 rounded-[2.5rem] rotate-3" />
            <div className="relative bg-cream-soft rounded-[2rem] p-8 md:p-12 shadow-soft">
              <img
                src={dateImg}
                alt="Пара на первом свидании при свечах"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
              <div className="mt-6 text-center">
                <p className="font-serif italic text-2xl text-primary">«Лучшее первое свидание в моей жизни.»</p>
                <p className="text-sm text-muted-foreground mt-2">— Аня, Берлин</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
