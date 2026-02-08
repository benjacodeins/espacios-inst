import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Product {
    id: number;
    name: string;
    category: 'Plantas' | 'Macetas' | 'Decoración';
    description: string;
    price: number;
    image: string;
    stock: number;
}

export interface CartItem extends Product {
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product) => void;
    removeItem: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    total: number;
    itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [items, setItems] = useState<CartItem[]>(() => {
        // Cargar desde localStorage al iniciar
        const savedCart = localStorage.getItem('espacios-cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // Guardar en localStorage cuando cambie el carrito
    useEffect(() => {
        localStorage.setItem('espacios-cart', JSON.stringify(items));
    }, [items]);

    const addItem = (product: Product) => {
        setItems(currentItems => {
            const existingItem = currentItems.find(item => item.id === product.id);

            if (existingItem) {
                // Si ya existe, incrementar cantidad
                return currentItems.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
                        : item
                );
            } else {
                // Si no existe, agregarlo con cantidad 1
                return [...currentItems, { ...product, quantity: 1 }];
            }
        });
    };

    const removeItem = (productId: number) => {
        setItems(currentItems => currentItems.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity <= 0) {
            removeItem(productId);
            return;
        }

        setItems(currentItems =>
            currentItems.map(item =>
                item.id === productId
                    ? { ...item, quantity: Math.min(quantity, item.stock) }
                    : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                items,
                addItem,
                removeItem,
                updateQuantity,
                clearCart,
                total,
                itemCount,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
