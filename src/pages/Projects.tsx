import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilter from "@/components/ProjectFilter";

export type ProjectCategory = "Todos" | "Paisajismo" | "Interiores" | "Residencial" | "Comercial";

export interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    description: string;
    image: string;
    client?: string;
    location: string;
    year: number;
}

// Proyectos de ejemplo
const projects: Project[] = [
    {
        id: 1,
        title: "Jardín Residencial Los Lapachos",
        category: "Paisajismo",
        description: "Transformación completa de jardín frontal y posterior con especies nativas y sistema de riego automatizado.",
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200",
        client: "Familia Gómez",
        location: "San Salvador de Jujuy",
        year: 2025,
    },
    {
        id: 2,
        title: "Oficina Verde - Estudio Contable",
        category: "Interiores",
        description: "Integración de jardín vertical y plantas de interior para mejorar el ambiente laboral.",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
        client: "Estudio Martínez & Asociados",
        location: "Jujuy Capital",
        year: 2025,
    },
    {
        id: 3,
        title: "Restaurante El Arrayán",
        category: "Comercial",
        description: "Diseño de terraza verde con plantas aromáticas y jardín vertical como elemento decorativo.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=1200",
        client: "Restaurante El Arrayán",
        location: "Tilcara",
        year: 2024,
    },
    {
        id: 4,
        title: "Casa de Campo San Antonio",
        category: "Residencial",
        description: "Paisajismo completo de casa de campo con jardín de cactus y suculentas adaptadas al clima.",
        image: "https://images.unsplash.com/photo-1510125732890-50d4d82b3d1b?q=80&w=1200",
        client: "Familia Rodríguez",
        location: "Reyes",
        year: 2024,
    },
    {
        id: 5,
        title: "Balcón Urbano Minimalista",
        category: "Interiores",
        description: "Transformación de balcón pequeño en espacio verde con plantas colgantes y macetas verticales.",
        image: "https://images.unsplash.com/photo-1628191013069-b5c65a7e6c38?q=80&w=1200",
        client: "Particular",
        location: "San Salvador de Jujuy",
        year: 2025,
    },
    {
        id: 6,
        title: "Hotel Boutique Jardines",
        category: "Comercial",
        description: "Diseño integral del jardín del hotel con áreas de descanso, caminos y especies ornamentales.",
        image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?q=80&w=1200",
        client: "Hotel Jardines de Reyes",
        location: "Villa Jardín de Reyes",
        year: 2024,
    },
    {
        id: 7,
        title: "Patio Interior Colonial",
        category: "Paisajismo",
        description: "Restauración de patio colonial con fuente central, plantas de sombra y iluminación ambiental.",
        image: "https://images.unsplash.com/photo-1627918451848-26f555d21394?q=80&w=1200",
        client: "Casa Histórica Centro",
        location: "Jujuy Capital",
        year: 2024,
    },
    {
        id: 8,
        title: "Consultorio Odontológico",
        category: "Interiores",
        description: "Incorporación de plantas purificadoras de aire y jardín zen en sala de espera.",
        image: "https://images.unsplash.com/photo-1596238641913-725d2b7ac929?q=80&w=1200",
        client: "Dra. Fernández Odontología",
        location: "Palpalá",
        year: 2025,
    },
];

const Projects = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("Todos");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filteredProjects = selectedCategory === "Todos"
        ? projects
        : projects.filter(p => p.category === selectedCategory);

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
                            Nuestros Proyectos
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Espacios que <span className="text-gradient-gold">Transforman Vidas</span>
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Descubre algunos de los proyectos que hemos realizado para nuestros clientes.
                            Cada uno es único y refleja nuestra pasión por crear espacios llenos de vida.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-background sticky top-20 z-40 border-b border-border backdrop-blur-md bg-background/80">
                <div className="container mx-auto px-4">
                    <ProjectFilter
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg">
                                No hay proyectos en esta categoría aún.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Projects;
