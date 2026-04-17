import { Shield, Clock, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Verified & safe",
    desc: "Every profile is photo-verified. Our hand-picked venues are public, vetted and welcoming.",
  },
  {
    icon: Clock,
    title: "Respect for your time",
    desc: "No 3-week chats. We organise the date so you can focus on showing up.",
  },
  {
    icon: Heart,
    title: "Intentional daters",
    desc: "Wave attracts people who actually want to meet — not collectors of matches.",
  },
  {
    icon: Sparkles,
    title: "Curated by humans",
    desc: "We hand-select the cafés, the playlists, the vibe. You bring the conversation.",
  },
];

const Features = () => {
  return (
    <section id="about" className="bg-primary text-primary-foreground py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Why Wave</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-cream text-balance leading-tight">
            Serious about <span className="italic">you</span> and your time.
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
