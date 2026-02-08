import { motion } from "framer-motion";
import { Leaf, MapPin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-nursery.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={heroImage}
          alt="Vivero Espacios con Alma"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Floating Leaves Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/30"
            initial={{
              x: Math.random() * 100 + "%",
              y: -100,
              rotate: 0
            }}
            animate={{
              y: "120vh",
              rotate: 360,
              x: `${Math.random() * 100}%`
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear"
            }}
          >
            <Leaf size={20 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >

          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-primary/50 bg-background/30 backdrop-blur-sm animate-pulse-glow overflow-hidden">
            <img
              src="/espacios.png"
              alt="Logo Espacios con Alma"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="text-gradient-gold">Espacios</span>
          <br />
          <span className="text-foreground">con Alma</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4"
        >
          Tu espacio verde empieza aquí 🌿
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base text-muted-foreground max-w-xl mx-auto mb-8"
        >
          Paisajismo • Diseño de Interiores • Plantas • Decoración
        </motion.p>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-2 text-muted-foreground mb-10"
        >
          <MapPin className="w-4 h-4 text-primary" />
          <span>Villa Jardín de Reyes - Jujuy, Salta</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button variant="hero" size="xl" onClick={scrollToContact}>
            Solicitar Asesoramiento
          </Button>
          <Button variant="outline-light" size="xl" onClick={scrollToServices}>
            Ver Servicios
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer"
          onClick={scrollToServices}
        >
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
