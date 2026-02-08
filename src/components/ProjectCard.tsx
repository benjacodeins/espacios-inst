import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import type { Project } from "@/pages/Projects";

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all"
        >
            {/* Image */}
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full backdrop-blur-sm shadow-sm">
                        {project.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                </p>

                <div className="flex flex-col gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>{project.year}</span>
                    </div>
                </div>

                {project.client && (
                    <div className="mt-4 pt-4 border-t border-border">
                        <p className="text-xs text-muted-foreground">
                            Cliente: <span className="text-foreground font-medium">{project.client}</span>
                        </p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default ProjectCard;
