import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Чем Wave отличается от других дейтинг-приложений?",
    a: "Мы не поощряем бесконечный свайп и переписку. Как только вы совпали — мы сразу организуем встречу в проверенном месте. Больше настоящих свиданий, меньше потраченных недель.",
  },
  {
    q: "Зачем платить за свидание?",
    a: "Небольшой взнос отсеивает тех, кто исчезает в последний момент. Платят оба — и оба приходят. Большинство пользователей говорят, что это лучшие деньги, потраченные на знакомства.",
  },
  {
    q: "Это безопасно?",
    a: "Каждый профиль проходит фото-верификацию. Места встреч — публичные и проверенные. По прибытии можно отметиться, а служба поддержки доступна 24/7 прямо в приложении.",
  },
  {
    q: "А если Wave ещё нет в моём городе?",
    a: "Мы быстро растём. Скачайте приложение и зарегистрируйте интерес — мы сообщим, как только Wave появится у вас.",
  },
  {
    q: "Можно отменить свидание?",
    a: "Планы меняются — это нормально. Отмена за 24 часа — полный возврат. Позже взнос покрывает бронь места.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="bg-cream-soft py-24 md:py-32">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-[0.2em] text-coral uppercase">Вопросы</span>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
            Интересно? <span className="italic">Мы всё расскажем.</span>
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
