import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="bg-primary py-24 md:py-32 relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-coral/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-teal-soft/10 blur-3xl" />

      <div className="container relative text-center max-w-3xl">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream text-balance leading-[0.95]">
          Любовь стоит<br />
          того, чтобы <span className="italic text-coral">рискнуть.</span>
        </h2>
        <p className="mt-8 text-lg md:text-xl text-cream/75 max-w-xl mx-auto">
          Хватит листать. Пора встречаться. Wave делает первое свидание лёгким.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button variant="coral" size="xl">Открыть Wave</Button>
          <Button variant="cream" size="xl">Как это работает</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
