import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is Wave different from other dating apps?",
    a: "We don't reward swiping or chatting forever. The moment you match, we arrange a real date at a curated venue. The result: more meaningful first dates, fewer wasted weeks.",
  },
  {
    q: "Why do I have to pay for a date?",
    a: "A small commitment fee filters out the flakers. Both people pay, both people show up — that's the deal. Most users say it's the best money they've spent on dating.",
  },
  {
    q: "Is it safe?",
    a: "Every profile is photo-verified. We choose public, vetted venues. You can check in on arrival and reach our safety team 24/7 from inside the app.",
  },
  {
    q: "What if Wave isn't in my city yet?",
    a: "We're rolling out fast. Download the app to register interest — we'll let you know the moment Wave lands in your area.",
  },
  {
    q: "Can I cancel a date?",
    a: "Plans change — we get it. Cancel up to 24 hours before for a full refund. After that, the fee covers the venue's reservation.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-cream-soft py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">FAQ</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Curious? <span className="italic">We've got you.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl px-6 border border-border/60 shadow-soft"
            >
              <AccordionTrigger className="font-serif text-lg md:text-xl text-foreground hover:no-underline py-5 text-left">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
