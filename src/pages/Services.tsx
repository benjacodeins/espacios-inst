import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TreeDeciduous, Home, Flower2, Palette, ArrowRight, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
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
        features: [
            "Diseño de jardines personalizados",
            "Selección de especies adaptadas al clima",
            "Instalación y mantenimiento",
            "Sistemas de riego automatizado",
            "Iluminación de jardín",
        ],
        process: [
            "Consulta inicial y análisis del espacio",
            "Propuesta de diseño personalizado",
            "Selección de materiales y plantas",
            "Ejecución del proyecto",
            "Seguimiento y mantenimiento",
        ],
    },
    {
        icon: Home,
        title: "Diseño de Interiores",
        description: "Integramos la naturaleza en tus espacios interiores con diseño biofílico y plantas de interior.",
        image: serviceInteriores,
        features: [
            "Diseño biofílico de interiores",
            "Selección de plantas de interior",
            "Jardines verticales",
            "Terrarios y kokedamas",
            "Asesoramiento en cuidado de plantas",
        ],
        process: [
            "Evaluación del espacio interior",
            "Propuesta de integración vegetal",
            "Selección de plantas según iluminación",
            "Instalación profesional",
            "Capacitación en cuidados",
        ],
    },
    {
        icon: Flower2,
        title: "Plantas",
        description: "Amplia variedad de plantas de interior, exterior, suculentas, cactus y especies exóticas.",
        image: servicePlantas,
        features: [
            "Plantas de interior y exterior",
            "Suculentas y cactus",
            "Plantas aromáticas y medicinales",
            "Especies nativas y exóticas",
            "Plantines de temporada",
        ],
        process: [
            "Asesoramiento personalizado",
            "Selección según necesidades",
            "Recomendaciones de cuidado",
            "Seguimiento post-venta",
            "Garantía de calidad",
        ],
    },
    {
        icon: Palette,
        title: "Decoración",
        description: "Macetas artesanales, accesorios de jardín y elementos decorativos para complementar tus espacios.",
        image: serviceDecoracion,
        features: [
            "Macetas artesanales",
            "Accesorios de jardín",
            "Herramientas de jardinería",
            "Sustratos y fertilizantes",
            "Elementos decorativos",
        ],
        process: [
            "Consulta de estilo",
            "Selección de productos",
            "Personalización disponible",
            "Entrega e instalación",
            "Asesoramiento continuo",
        ],
    },
];

const ServiceDetail = ({ service, index }: { service: typeof services[0]; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
            <div className="container mx-auto px-4">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                        <div className="relative rounded-2xl overflow-hidden border border-border shadow-lg">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center backdrop-blur-sm">
                                <service.icon className="w-8 h-8 text-primary-foreground" />
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                            {service.title}
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                            {service.description}
                        </p>

                        <div className="mb-8">
                            <h3 className="font-serif text-2xl font-semibold mb-4">¿Qué Incluye?</h3>
                            <ul className="space-y-3">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-primary shrink-0 mt-1" />
                                        <span className="text-muted-foreground">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="glass-card rounded-xl p-6 mb-8">
                            <h3 className="font-serif text-xl font-semibold mb-4">Nuestro Proceso</h3>
                            <ol className="space-y-2">
                                {service.process.map((step, i) => (
                                    <li key={i} className="flex gap-3 text-muted-foreground">
                                        <span className="font-semibold text-primary shrink-0">{i + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        <Link to="/contacto">
                            <Button variant="hero" size="lg">
                                Solicitar Asesoramiento
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

const Services = () => {
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
                            Nuestros Servicios
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Creamos <span className="text-gradient-green">Espacios</span> que Inspiran
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Transformamos cualquier ambiente en un espacio lleno de vida, armonía y
                            conexión con la naturaleza. Descubre todo lo que podemos hacer por ti.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            {services.map((service, index) => (
                <ServiceDetail key={service.title} service={service} index={index} />
            ))}

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
                            ¿Listo para Comenzar tu <span className="text-gradient-gold">Proyecto</span>?
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Agenda una consulta gratuita y descubre cómo podemos transformar tu espacio
                            en un lugar lleno de vida y belleza natural.
                        </p>
                        <Link to="/contacto">
                            <Button variant="hero" size="lg">
                                Solicitar Asesoramiento Gratuito
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Services;
