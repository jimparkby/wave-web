import { Shield, Clock, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Проверено и безопасно",
    desc: "Каждый профиль с фото-верификацией. Все места встреч публичные и проверенные.",
  },
  {
    icon: Clock,
    title: "Уважаем ваше время",
    desc: "Никаких трёхнедельных переписок. Мы организуем свидание — вам остаётся прийти.",
  },
  {
    icon: Heart,
    title: "Серьёзные намерения",
    desc: "В Wave приходят те, кто действительно хочет встретиться, а не коллекционировать мэтчи.",
  },
  {
    icon: Sparkles,
    title: "Отобрано вручную",
    desc: "Мы сами выбираем кафе, плейлисты, атмосферу. С вас — разговор.",
  },
];

const Features = () => {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Почему Wave</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-cream text-balance leading-tight">
            Серьёзно о <span className="italic">вас</span> и вашем времени.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {features.map((f) => (
            <div key={f.title} className="group p-8 rounded-3xl bg-cream/[0.04] border border-cream/10 hover:bg-cream/[0.07] hover:border-coral/30 transition-all">
              <div className="w-14 h-14 rounded-2xl bg-coral/15 grid place-items-center text-coral mb-6 group-hover:bg-coral group-hover:text-white transition-colors">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl text-cream mb-2">{f.title}</h3>
              <p className="text-cream/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
