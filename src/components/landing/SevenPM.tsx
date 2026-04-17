import p1 from "@/assets/profile-1.jpg";
import p2 from "@/assets/profile-2.jpg";
import p3 from "@/assets/profile-3.jpg";
import p4 from "@/assets/profile-4.jpg";

const profiles = [
  { img: p1, name: "Sofia", age: 26, city: "Berlin", traits: ["Activist", "Cooking"] },
  { img: p2, name: "Lukas", age: 29, city: "Amsterdam", traits: ["Cyclist", "Indie music"] },
  { img: p3, name: "Mila", age: 24, city: "Paris", traits: ["Reader", "Yoga"] },
  { img: p4, name: "Diego", age: 31, city: "Barcelona", traits: ["Chef", "Surfer"] },
];

const SevenPM = () => {
  return (
    <section className="bg-cream-soft py-24 md:py-32 relative overflow-hidden">
      <div className="container relative">
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Daily ritual</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
            7PM. <span className="italic">New profiles</span> available.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg">
            Every day at 7PM we send you a handful of people we think you'll genuinely like.
            No infinite swiping — just a curated cup of possibilities.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {profiles.map((p, i) => (
            <article
              key={p.name}
              className="group relative rounded-3xl overflow-hidden bg-card shadow-soft hover:shadow-card transition-all hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={`Profile preview of ${p.name}`}
                  loading="lazy"
                  width={512}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent">
                <div className="flex items-baseline gap-2 text-cream">
                  <span className="font-serif text-xl md:text-2xl font-semibold">{p.name}</span>
                  <span className="text-sm opacity-80">{p.age}</span>
                </div>
                <div className="text-xs text-cream/80 mt-0.5">{p.city}</div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {p.traits.map((t) => (
                    <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-cream/15 text-cream backdrop-blur-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SevenPM;
