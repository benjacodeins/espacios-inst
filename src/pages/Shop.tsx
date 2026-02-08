import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopProductCard from "@/components/ShopProductCard";
import Cart from "@/components/Cart";
import { products } from "@/data/products";
import type { Product } from "@/contexts/CartContext";

type ProductCategory = 'Todos' | 'Plantas' | 'Macetas' | 'Decoración';

const Shop = () => {
    const [selectedCategory, setSelectedCategory] = useState<ProductCategory>("Todos");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const filteredProducts = selectedCategory === "Todos"
        ? products
        : products.filter((p: Product) => p.category === selectedCategory);

    const categories: ProductCategory[] = ['Todos', 'Plantas', 'Macetas', 'Decoración'];

    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <Cart />

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
                            Nuestra Tienda
                        </span>
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
                            Productos para tu <span className="text-gradient-green">Espacio Verde</span>
                        </h1>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                            Descubre nuestra selección de plantas, macetas y accesorios.
                            Todo lo que necesitas para crear tu oasis personal.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter */}
            <section className="py-8 bg-background sticky top-20 z-40 border-b border-border backdrop-blur-md bg-background/80">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category
                                        ? 'bg-primary text-primary-foreground shadow-lg'
                                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProducts.map((product, index) => (
                            <ShopProductCard key={product.id} product={product} index={index} />
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-muted-foreground text-lg">
                                No hay productos en esta categoría aún.
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Shop;
