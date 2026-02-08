import { motion } from "framer-motion";
import type { ProjectCategory } from "@/pages/Projects";

interface ProjectFilterProps {
    selectedCategory: ProjectCategory;
    onCategoryChange: (category: ProjectCategory) => void;
}

const categories: ProjectCategory[] = [
    "Todos",
    "Paisajismo",
    "Interiores",
    "Residencial",
    "Comercial",
];

const ProjectFilter = ({ selectedCategory, onCategoryChange }: ProjectFilterProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
                <motion.button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                            ? "bg-primary text-primary-foreground shadow-lg"
                            : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                        }`}
                >
                    {category}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;
