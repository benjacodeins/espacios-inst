import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from '@/contexts/CartContext';
import { useCart } from '@/contexts/CartContext';
import { useToast } from "@/hooks/use-toast";

interface ShopProductCardProps {
    product: Product;
    index: number;
}

const ShopProductCard = ({ product, index }: ShopProductCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { addItem } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addItem(product);
        toast({
            title: "¡Producto agregado!",
            description: `${product.name} se añadió al carrito`,
            duration: 2000,
        });
    };

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group glass-card rounded-xl overflow-hidden hover:border-primary/40 transition-all"
        >
            {/* Image */}
            <div className="relative h-64 overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-background/90 text-foreground text-xs font-medium rounded-full backdrop-blur-sm shadow-sm">
                        {product.category}
                    </span>
                </div>

                {/* Stock Badge */}
                {product.stock < 5 && (
                    <div className="absolute top-4 right-4">
                        <span className="inline-block px-3 py-1 bg-destructive/90 text-destructive-foreground text-xs font-medium rounded-full backdrop-blur-sm shadow-sm">
                            ¡Últimas unidades!
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                    <div>
                        <span className="text-2xl font-bold text-primary">
                            ${product.price.toLocaleString('es-AR')}
                        </span>
                    </div>
                    <div className="text-xs text-muted-foreground">
                        Stock: {product.stock}
                    </div>
                </div>

                <Button
                    onClick={handleAddToCart}
                    className="w-full"
                    disabled={product.stock === 0}
                >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {product.stock === 0 ? 'Sin stock' : 'Agregar al carrito'}
                </Button>
            </div>
        </motion.div>
    );
};

export default ShopProductCard;
