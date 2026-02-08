import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface TeamMember {
    name: string;
    role: string;
    description: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: "Fran",
        role: "Fundador & Director",
        description: "Fundador de Espacios con Alma, con pasión por transformar espacios a través del paisajismo y el diseño.",
        image: "/team/fran.jpg",
    },
];

const TeamSection = () => {
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
                        Nuestro Equipo
                    </span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                        Las Personas Detrás de <span className="text-gradient-gold">Cada Proyecto</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Un equipo multidisciplinario apasionado por crear espacios únicos
                    </p>
                </motion.div>

                <div className="flex justify-center">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card rounded-xl p-8 text-center group hover:border-primary/40 transition-all max-w-sm"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                    <span className="text-4xl font-serif font-bold text-primary">
                                        {member.name.charAt(0)}
                                    </span>
                                </div>
                            </div>
                            <h3 className="font-serif text-xl font-semibold mb-1 text-foreground">
                                {member.name}
                            </h3>
                            <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {member.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
