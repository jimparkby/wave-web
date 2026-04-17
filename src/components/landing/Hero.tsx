import { Button } from "@/components/ui/button";
import sharksImg from "@/assets/wave-sharks.png";

const Hero = () => {
  return (
    <section className="relative bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-primary/40 pointer-events-none" />

      <div className="container relative pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream/10 text-cream/90 text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-coral" />
              Реальные свидания, без болтовни
            </span>

            <h1 className="mt-6 font-serif font-semibold text-balance text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-cream">
              Хватит писать —<br />
              <span className="italic text-coral">пора</span> встречаться
            </h1>

            <p className="mt-8 text-lg md:text-xl text-cream/75 max-w-xl text-balance">
              За экраном уютно, но настоящая связь рождается вживую.
              Wave — приложение, которое само организует ваше первое свидание: просто и безопасно.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <Button variant="coral" size="xl">Скачать Wave</Button>
              <a href="#how" className="text-cream/80 hover:text-cream underline underline-offset-4 text-sm font-medium">
                Как это работает →
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-cream/60">
              <div>
                <div className="font-serif text-2xl text-cream">120k+</div>
                <div>активных серферов</div>
              </div>
              <div className="w-px h-10 bg-cream/15" />
              <div>
                <div className="font-serif text-2xl text-cream">4.8★</div>
                <div>в App Store</div>
              </div>
              <div className="w-px h-10 bg-cream/15 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="font-serif text-2xl text-cream">15+</div>
                <div>городов</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-8 bg-coral/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative w-[280px] sm:w-[320px] md:w-[360px] aspect-[9/19] rounded-[3rem] bg-cream shadow-card overflow-hidden animate-float">
                <img
                  src={sharksImg}
                  alt="Превью приложения Wave с двумя дружелюбными акулами-сёрферами"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="absolute -left-4 top-12 hidden md:flex items-center gap-2 bg-cream text-primary px-4 py-2 rounded-full shadow-card font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                7 вечера — новые мэтчи
              </div>
              <div className="absolute -right-2 bottom-24 hidden md:block bg-coral text-white px-4 py-2 rounded-2xl shadow-card font-serif italic text-sm rotate-3">
                Это мэтч!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
