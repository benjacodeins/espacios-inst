import { Leaf, Instagram, MapPin, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  // Coordenadas exactas: 24°09'49.7"S 65°22'56.7"W
  // Convertidas a decimales: -24.163806, -65.382417

  // 1. Enlace para abrir la App de Google Maps directamente en la ubicación
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=-24.163806,-65.382417";

  // 2. Enlace para el mapa incrustado en la página (usando las coordenadas)
  const embedMapUrl = "https://maps.google.com/maps?q=-24.163806,-65.382417&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <footer className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-serif font-semibold text-foreground text-center mb-6">
            Visitanos
          </h3>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative group cursor-pointer"
          >
            <div className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden border border-border shadow-lg">
              <iframe
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="pointer-events-none"
                title="Ubicación Espacios con Alma"
              />
              {/* Overlay for click interaction */}
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">Abrir en Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-foreground font-medium flex items-center justify-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Pasaje 15, Villa Jardín de Reyes
              </p>
              <p className="text-muted-foreground text-sm">Jujuy, Argentina</p>
            </div>
          </a>
        </motion.div>

        {/* Links Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="text-muted-foreground hover:text-primary transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-muted-foreground hover:text-primary transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                  Productos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Paisajismo</li>
              <li>Diseño de Interiores</li>
              <li>Plantas y Vivero</li>
              <li>Decoración</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidad" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link to="/terminos" className="text-muted-foreground hover:text-primary transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div>
              <span className="font-serif text-lg font-semibold text-foreground block">
                Espacios con Alma
              </span>
              <span className="text-muted-foreground text-sm">
                Paisajismo & Diseño de Interiores
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/espaciosconalma_ok"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Espacios con Alma. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
