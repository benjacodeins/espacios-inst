import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
    rating: number;
    project: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "María Gómez",
        role: "Propietaria",
        content: "El equipo de Espacios con Alma transformó completamente nuestro jardín. Su atención al detalle y conocimiento de plantas nativas fue impresionante. ¡Ahora tenemos el jardín de nuestros sueños!",
        rating: 5,
        project: "Jardín Residencial Los Lapachos",
    },
    {
        id: 2,
        name: "Roberto Martínez",
        role: "Estudio Contable",
        content: "Incorporar plantas en nuestra oficina mejoró notablemente el ambiente laboral. El equipo nos asesoró perfectamente sobre qué especies elegir según la luz disponible. Muy profesionales.",
        rating: 5,
        project: "Oficina Verde",
    },
    {
        id: 3,
        name: "Ana Rodríguez",
        role: "Casa de Campo",
        content: "Carolina y su equipo superaron nuestras expectativas. El diseño con cactus y suculentas quedó hermoso y requiere poco mantenimiento. ¡Exactamente lo que necesitábamos!",
        rating: 5,
        project: "Casa de Campo San Antonio",
    },
    {
        id: 4,
        name: "Pablo Fernández",
        role: "Restaurante El Arrayán",
        content: "La terraza verde que diseñaron para nuestro restaurante se convirtió en el espacio favorito de nuestros clientes. El jardín vertical es una obra de arte. ¡Altamente recomendados!",
        rating: 5,
        project: "Restaurante",
    },
];

const Testimonials = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-muted/30">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                        Testimonios
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                        Lo Que Dicen Nuestros <span className="text-gradient-gold">Clientes</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        La satisfacción de nuestros clientes es nuestro mayor logro
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-xl p-8 relative group hover:border-primary/40 transition-all"
                        >
                            {/* Quote Icon */}
                            <div className="absolute top-6 right-6 text-primary/10 group-hover:text-primary/20 transition-colors">
                                <Quote className="w-12 h-12" />
                            </div>

                            {/* Rating */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-muted-foreground italic leading-relaxed mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="border-t border-border pt-4">
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                <p className="text-xs text-primary mt-1">{testimonial.project}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
