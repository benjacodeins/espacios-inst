import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Sparkles, Users, Award, Target, Eye } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";

const values = [
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
    {
        icon: Award,
        title: "Calidad y Experiencia",
        description: "Años de experiencia transformando espacios con los más altos estándares de calidad.",
    },
];

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-muted/30 to-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                            Sobre Nosotros
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Donde la Naturaleza <span className="text-gradient-gold">Encuentra su Hogar</span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                            En <strong className="text-foreground">Espacios con Alma</strong>, creemos que cada espacio merece un toque de vida.
                            Ubicados en Villa Jardín de Reyes, nos dedicamos a crear ambientes que transforman la manera
                            en que vives y sientes tu hogar.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Combinamos experiencia en paisajismo y diseño de interiores con un profundo conocimiento
                            de las especies locales para brindarte soluciones que embellecen y perduran.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-8"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Target className="w-7 h-7 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-4">Nuestra Misión</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Transformar espacios en ambientes llenos de vida y armonía,
                                conectando a las personas con la naturaleza. Brindamos asesoramiento
                                personalizado y soluciones creativas para cada proyecto.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-2xl p-8"
                        >
                            <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                                <Eye className="w-7 h-7 text-primary" />
                            </div>
                            <h2 className="font-serif text-3xl font-bold mb-4">Nuestra Visión</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Ser referencia en paisajismo y diseño en la región,
                                para que más personas puedan disfrutar de espacios verdes
                                que mejoren su calidad de vida.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Story / Timeline */}
            <Timeline />

            {/* Values */}
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
                            Nuestros Valores
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            Lo Que Nos <span className="text-gradient-green">Define</span>
                        </h2>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass-card rounded-xl p-6 text-center group hover:border-primary/40 transition-all"
                            >
                                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold mb-3">{value.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <TeamSection />

            {/* Testimonials */}
            <Testimonials />

            <Footer />
        </main>
    );
};

export default About;
