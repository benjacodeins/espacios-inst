import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { TreeDeciduous, Home, Flower2, Palette } from "lucide-react";

const services = [
    {
        icon: TreeDeciduous,
        title: "Paisajismo",
        description: "Diseñamos jardines únicos que transforman espacios exteriores.",
    },
    {
        icon: Home,
        title: "Diseño de Interiores",
        description: "Integramos la naturaleza en tus espacios interiores.",
    },
    {
        icon: Flower2,
        title: "Plantas",
        description: "Amplia variedad de plantas de interior, exterior y exóticas.",
    },
    {
        icon: Palette,
        title: "Decoración",
        description: "Macetas artesanales y accesorios para complementar tus espacios.",
    },
];

const HomePage = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Hero />

            {/* Services Preview Section */}
            <section className="py-24 bg-muted/30">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-primary font-medium tracking-wider uppercase text-sm mb-4 block">
                            Nuestros Servicios
                        </span>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                            ¿Qué Podemos Hacer por <span className="text-gradient-green">Ti</span>?
                        </h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
                            Descubre cómo podemos transformar tus espacios en lugares llenos de vida y armonía.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-card rounded-xl p-6 group hover:border-primary/40 transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                    <service.icon className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-serif text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground text-sm">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <Link to="/servicios">
                            <Button variant="hero" size="lg">
                                Ver Todos los Servicios
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="glass-card rounded-2xl p-12 text-center max-w-4xl mx-auto"
                    >
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                            ¿Listo para Transformar tu <span className="text-gradient-gold">Espacio</span>?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Dale vida a tu hogar o negocio con nuestro asesoramiento personalizado.
                            Contamos con años de experiencia creando espacios únicos en Jujuy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contacto">
                                <Button variant="hero" size="lg">
                                    Solicitar Asesoramiento
                                </Button>
                            </Link>
                            <Link to="/proyectos">
                                <Button variant="outline-light" size="lg">
                                    Ver Proyectos
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default HomePage;
