import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import favicon from '@/assets/favicon.png'; // Adjust the path to your favicon image

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 smooth-transition ${isScrolled
        ? 'bg-background/80 backdrop-blur-lg border-b border-border card-shadow'
        : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with favicon */}
          <div className="flex items-center gap-2">
            <img src={favicon} alt="GH" className="w-8 h-8" />
            <span className="hero-text text-2xl font-bold"></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary smooth-transition font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground smooth-transition"
              >
                Hire Me
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            ☰
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
