import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sprout, Award, Users, TrendingUp } from "lucide-react";

interface TimelineEvent {
    year: string;
    title: string;
    description: string;
    icon: typeof Sprout;
}

const timelineEvents: TimelineEvent[] = [
    {
        year: "2019",
        title: "Los Inicios",
        description: "Espacios con Alma nace con la visión de conectar a las personas con la naturaleza a través del diseño y las plantas.",
        icon: Sprout,
    },
    {
        year: "2021",
        title: "Expansión de Servicios",
        description: "Incorporamos servicios de paisajismo y diseño de interiores, ampliando nuestra propuesta.",
        icon: TrendingUp,
    },
    {
        year: "2023",
        title: "Crecimiento Sostenido",
        description: "Consolidamos nuestra presencia en la región con proyectos residenciales y comerciales.",
        icon: Users,
    },
    {
        year: "2026",
        title: "Presente",
        description: "Continuamos transformando espacios y creando ambientes únicos en toda la provincia de Jujuy.",
        icon: Award,
    },
];

const Timeline = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                        Nuestra Historia
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                        Un Camino de <span className="text-gradient-green">Crecimiento</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Desde 2019 transformando espacios y conectando personas con la naturaleza
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {timelineEvents.map((event, index) => (
                        <motion.div
                            key={event.year}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="flex flex-col md:flex-row items-start gap-6">
                                {/* Year Badge */}
                                <div className="flex-shrink-0 w-24 text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30">
                                        <event.icon className="w-8 h-8 text-primary" />
                                    </div>
                                    <p className="font-serif text-2xl font-bold text-primary mt-2">
                                        {event.year}
                                    </p>
                                </div>

                                {/* Content */}
                                <div className="flex-1 glass-card rounded-xl p-6">
                                    <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
                                        {event.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {event.description}
                                    </p>
                                </div>
                            </div>

                            {/* Connecting Line (except for last item) */}
                            {index < timelineEvents.length - 1 && (
                                <div className="hidden md:block absolute left-10 top-24 w-0.5 h-12 bg-gradient-to-b from-primary/30 to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Timeline;
