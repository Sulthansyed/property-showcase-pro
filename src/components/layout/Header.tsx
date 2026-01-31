import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "/", anchor: null },
  { name: "About", href: "/about", anchor: "#about" },
  { name: "Units", href: "/units", anchor: "#units" },
  { name: "Amenities", href: "/amenities", anchor: "#amenities" },
  { name: "Location", href: "/location", anchor: "#location" },
  { name: "Gallery", href: "/gallery", anchor: "#gallery" },
  { name: "Contact", href: "/contact", anchor: "#contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleNavClick = (item: typeof navigation[0], e: React.MouseEvent) => {
    if (isHomePage && item.anchor) {
      e.preventDefault();
      const element = document.querySelector(item.anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-display text-2xl font-bold text-primary">Astrum</span>
            <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">Shah Alam</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={isHomePage && item.anchor ? "/" : item.href}
              onClick={(e) => handleNavClick(item, e)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+60123456789" className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            <span>+60 12-345 6789</span>
          </a>
          <Button variant="gold" size="default" asChild>
            <Link to="/contact">Enquire Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={isHomePage && item.anchor ? "/" : item.href}
                onClick={(e) => handleNavClick(item, e)}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border">
              <Button variant="gold" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Enquire Now
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
