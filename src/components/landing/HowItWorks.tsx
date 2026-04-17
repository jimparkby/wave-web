import { CreditCard, Calendar, MapPin, Check, Wine } from "lucide-react";
import dateImg from "@/assets/date-couple.png";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: CreditCard, title: "You both commit by paying", desc: "A small fee keeps things serious — no flakers." },
  { icon: Calendar, title: "Pick a day and time together", desc: "Coordinate in two taps, no endless DMs." },
  { icon: MapPin, title: "We arrange the perfect spot", desc: "Hand-picked cafés, bars and walks near you." },
  { icon: Check, title: "You both confirm your presence", desc: "Show up and check in when you arrive." },
  { icon: Wine, title: "Time to meet offline and date!", desc: "Skip the small talk, ride the moment." },
];

const HowItWorks = () => {
  return (
    <section id="how" className="bg-background py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">How Wave works</span>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance leading-tight">
              What happens<br /> after you <span className="italic">match?</span>
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-md">
              Once you match, we arrange your first date at a safe location.
              No penpal phase — meet people who actually show up.
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
              How Wave works →
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-coral/10 rounded-[2.5rem] rotate-3" />
            <div className="relative bg-cream-soft rounded-[2rem] p-8 md:p-12 shadow-soft">
              <img
                src={dateImg}
                alt="Two people on a first date sharing a candle-lit moment"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-auto"
              />
              <div className="mt-6 text-center">
                <p className="font-serif italic text-2xl text-primary">"Best first date I've ever had."</p>
                <p className="text-sm text-muted-foreground mt-2">— Anna, Berlin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
