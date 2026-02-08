import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo con Imagen Circular */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors overflow-hidden">
                <img
                  src="/espacios.png"
                  alt="Logo Espacios con Alma"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-xl font-semibold text-foreground">
                Espacios con Alma
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`transition-colors link-underline ${location.pathname === link.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contacto">
                <Button variant="hero">
                  Asesoramiento
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 md:hidden"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`text-xl font-serif py-2 text-left ${location.pathname === link.href
                      ? "text-primary"
                      : "text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link to="/contacto">
                  <Button variant="hero" size="lg" className="w-full">
                    Solicitar Asesoramiento
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
