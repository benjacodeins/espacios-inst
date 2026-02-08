import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Pasión por la Naturaleza",
    description: "Cada proyecto nace del amor por las plantas y el deseo de conectar espacios con la esencia natural.",
  },
  {
    icon: Sparkles,
    title: "Diseño Personalizado",
    description: "Creamos soluciones únicas adaptadas a tu estilo, espacio y necesidades específicas.",
  },
  {
    icon: Users,
    title: "Atención Cercana",
    description: "Te acompañamos en cada paso, desde la asesoría inicial hasta el mantenimiento de tu espacio verde.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float-slow" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-accent/20 rounded-full animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Donde la Naturaleza <span className="text-gradient-gold">Encuentra su Hogar</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En <strong className="text-foreground">Espacios con Alma</strong>, creemos que cada espacio merece un toque de vida. 
              Ubicados en el corazón de Villa Jardín de Reyes, somos más que un vivero: somos creadores de ambientes 
              que transforman la manera en que vives y sientes tu hogar.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nuestro equipo combina experiencia en paisajismo, diseño de interiores y un profundo conocimiento 
              de las especies locales para brindarte soluciones que no solo embellecen, sino que perduran.
            </p>
          </motion.div>

          {/* Right Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                className="glass-card rounded-xl p-6 group hover:border-primary/40 transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
