import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Trash2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";

const Cart = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { items, removeItem, updateQuantity, clearCart, total, itemCount } = useCart();

    const handleCheckout = () => {
        if (items.length === 0) return;

        // Formatear mensaje para WhatsApp (formato corto)
        let message = "Hola! Me gustaría hacer el pedido de lo siguiente:\n\n";

        items.forEach((item) => {
            message += `${item.quantity}x ${item.name} ($${item.price.toLocaleString('es-AR')})\n`;
        });

        message += `\n*Total: $${total.toLocaleString('es-AR')}*`;

        // Número de WhatsApp (sin espacios ni guiones)
        const phoneNumber = "5493885168435";
        const encodedMessage = encodeURIComponent(message);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Floating Cart Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <ShoppingCart className="w-6 h-6" />
                {itemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold">
                        {itemCount}
                    </span>
                )}
            </motion.button>

            {/* Cart Panel */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25 }}
                            className="fixed right-0 top-0 h-full w-full md:w-96 bg-background border-l border-border shadow-2xl z-50 flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-border">
                                <h2 className="font-serif text-2xl font-bold">Mi Carrito</h2>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Items List */}
                            <div className="flex-1 overflow-y-auto p-6">
                                {items.length === 0 ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <ShoppingCart className="w-16 h-16 text-muted-foreground mb-4" />
                                        <p className="text-muted-foreground">Tu carrito está vacío</p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        {items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="glass-card rounded-lg p-4 flex gap-4"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-20 h-20 object-cover rounded-lg"
                                                />
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
                                                    <p className="text-primary font-bold text-sm mb-2">
                                                        ${item.price.toLocaleString('es-AR')}
                                                    </p>

                                                    <div className="flex items-center gap-2">
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="h-7 w-7 p-0"
                                                        >
                                                            <Minus className="w-3 h-3" />
                                                        </Button>
                                                        <span className="text-sm font-medium w-8 text-center">
                                                            {item.quantity}
                                                        </span>
                                                        <Button
                                                            size="sm"
                                                            variant="outline"
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            disabled={item.quantity >= item.stock}
                                                            className="h-7 w-7 p-0"
                                                        >
                                                            <Plus className="w-3 h-3" />
                                                        </Button>
                                                        <Button
                                                            size="sm"
                                                            variant="ghost"
                                                            onClick={() => removeItem(item.id)}
                                                            className="h-7 w-7 p-0 ml-auto text-destructive hover:text-destructive"
                                                        >
                                                            <Trash2 className="w-4 h-4" />
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            {items.length > 0 && (
                                <div className="border-t border-border p-6 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span className="text-lg font-semibold">Total:</span>
                                        <span className="text-2xl font-bold text-primary">
                                            ${total.toLocaleString('es-AR')}
                                        </span>
                                    </div>

                                    <Button
                                        onClick={handleCheckout}
                                        className="w-full"
                                        size="lg"
                                    >
                                        <Send className="w-4 h-4 mr-2" />
                                        Enviar pedido por WhatsApp
                                    </Button>

                                    <Button
                                        onClick={clearCart}
                                        variant="ghost"
                                        className="w-full"
                                        size="sm"
                                    >
                                        Vaciar carrito
                                    </Button>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Cart;
