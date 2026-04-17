import { Button } from "@/components/ui/button";
import { HelpCircle, Bell } from "lucide-react";

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
          <a href="#how" className="text-sm text-cream/80 hover:text-cream transition-colors">How it works</a>
          <a href="#cities" className="text-sm text-cream/80 hover:text-cream transition-colors">Cities</a>
          <a href="#faq" className="text-sm text-cream/80 hover:text-cream transition-colors">FAQ</a>
          <a href="#about" className="text-sm text-cream/80 hover:text-cream transition-colors">About us</a>
        </nav>

        <div className="flex items-center gap-3">
          <button aria-label="Help" className="hidden sm:grid place-items-center w-10 h-10 rounded-full border border-cream/20 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button aria-label="Notifications" className="relative grid place-items-center w-10 h-10 rounded-full border border-cream/20 text-cream/80 hover:text-cream hover:border-cream/40 transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-coral" />
          </button>
          <Button variant="coral" size="default" className="hidden sm:inline-flex">
            Download app
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
