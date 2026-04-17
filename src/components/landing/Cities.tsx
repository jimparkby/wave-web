import handsImg from "@/assets/hands.png";
import { Button } from "@/components/ui/button";

const cities = [
  "Москва", "Санкт-Петербург", "Берлин", "Амстердам", "Париж", "Лондон",
  "Барселона", "Брюссель", "Кёльн", "Лион", "Мадрид", "Гамбург",
];

const Cities = () => {
  return (
    <section id="cities" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute -inset-2 bg-secondary rounded-[2.5rem] -rotate-2" />
            <div className="relative bg-cream rounded-[2rem] p-10 shadow-soft">
              <img
                src={handsImg}
                alt="Две руки тянутся друг к другу"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Wave рядом с вами</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
              Уже в <span className="italic">15+ городах</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              Мы постоянно расширяемся. Не видите свой город? Подождите немного — и подпишитесь на нас.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {cities.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium hover:bg-coral hover:text-white transition-colors cursor-default"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button variant="hero" size="lg">Скачать приложение</Button>
              <Button variant="cream" size="lg">Подписаться в Instagram</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cities;
