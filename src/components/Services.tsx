import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TreeDeciduous, Home, Flower2, Palette } from "lucide-react";
import servicePaisajismo from "@/assets/service-paisajismo.jpg";
import serviceInteriores from "@/assets/service-interiores.jpg";
import servicePlantas from "@/assets/service-plantas.jpg";
import serviceDecoracion from "@/assets/service-decoracion.jpg";

const services = [
  {
    icon: TreeDeciduous,
    title: "Paisajismo",
    description: "Diseñamos jardines únicos que transforman espacios exteriores en oasis de naturaleza y tranquilidad.",
    image: servicePaisajismo,
  },
  {
    icon: Home,
    title: "Diseño de Interiores",
    description: "Integramos la naturaleza en tus espacios interiores con diseño biofílico y plantas de interior.",
    image: serviceInteriores,
  },
  {
    icon: Flower2,
    title: "Plantas",
    description: "Amplia variedad de plantas de interior, exterior, suculentas, cactus y especies exóticas.",
    image: servicePlantas,
  },
  {
    icon: Palette,
    title: "Decoración",
    description: "Macetas artesanales, accesorios de jardín y elementos decorativos para complementar tus espacios.",
    image: serviceDecoracion,
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="service-card group bg-card rounded-2xl overflow-hidden border border-border"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Icon Badge */}
        <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
          <service.icon className="w-6 h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground group-hover:text-gradient-gold transition-colors">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: "inset 0 0 30px rgba(76, 148, 95, 0.1)" }} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Creamos <span className="text-gradient-green">Espacios</span> que Inspiran
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformamos cualquier ambiente en un espacio lleno de vida, armonía y conexión con la naturaleza.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
