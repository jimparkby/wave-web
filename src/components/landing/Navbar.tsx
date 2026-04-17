import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-primary/95 backdrop-blur-md">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl md:text-3xl font-serif font-bold text-coral lowercase tracking-tight">
            wave
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm text-cream/80 hover:text-cream transition-colors">Как это работает</a>
          <a href="#faq" className="text-sm text-cream/80 hover:text-cream transition-colors">Вопросы</a>
          <a href="#about" className="text-sm text-cream/80 hover:text-cream transition-colors">О нас</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="coral" size="default" className="hidden sm:inline-flex">
            Открыть приложение
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
