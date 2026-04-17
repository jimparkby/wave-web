import { Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-cream/80 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <span className="text-3xl font-serif font-bold text-coral lowercase">wave</span>
            <p className="mt-4 max-w-sm text-sm text-cream/60">
              Приложение для тех, кто лучше встретится, чем будет писать.
              Хватит чатиться — пора на свидание.
            </p>
            <div className="flex gap-3 mt-6">
              <a aria-label="Instagram" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream/15 hover:bg-coral hover:border-coral transition-colors"><Instagram className="w-4 h-4" /></a>
              <a aria-label="Twitter" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream/15 hover:bg-coral hover:border-coral transition-colors"><Twitter className="w-4 h-4" /></a>
              <a aria-label="Youtube" href="#" className="w-10 h-10 grid place-items-center rounded-full border border-cream/15 hover:bg-coral hover:border-coral transition-colors"><Youtube className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Продукт</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#how" className="hover:text-coral transition-colors">Как это работает</a></li>
              <li><a href="#cities" className="hover:text-coral transition-colors">Города</a></li>
              <li><a href="#faq" className="hover:text-coral transition-colors">Вопросы</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Стать партнёром</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-cream text-lg mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-coral transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Карьера</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Конфиденциальность</a></li>
              <li><a href="#" className="hover:text-coral transition-colors">Условия</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Wave. Сделано с любовью для любви.</p>
          <p>Создано в Амстердаме · По всему миру</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
