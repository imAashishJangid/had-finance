import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Finance", href: "#finance" },
    { name: "Loans", href: "#loans" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b border-border h-16">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center md:ml-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto cursor-pointer"
            onClick={() => scrollToSection("#home")}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-6 md:mr-2">
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button
              variant="default"
              onClick={() => scrollToSection("#contact")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-16 border-t border-border bg-background/95">
          <div className="flex flex-col space-y-4 p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="default"
              onClick={() => scrollToSection("#contact")}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
