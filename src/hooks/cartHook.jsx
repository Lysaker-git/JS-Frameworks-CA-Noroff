import { create } from "zustand"; 

export const useCartStore = create((set) => {
    let initialCart = [];
    try {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            initialCart = JSON.parse(cartData)
        }
    } catch (err) {
        console.log('Error getting data')
    }
    return {
        products: initialCart,
        clearCart: () => {
            set({products: [] });
            localStorage.removeItem('cart')
        },
        addProduct: (product) => set((state) => {
            const existing = state.products.find((p) => p.id === product.id);
            if (existing) {
                const updatedProduct = {
                    ...existing,
                    quantity: existing.quantity + 1,
                };
                const updatedProducts = state.products.map((p) => p.id === existing.id ? updatedProduct : p);
                localStorage.setItem('cart', JSON.stringify(updatedProducts))
                return { products: updatedProducts };
            } else {
                const updatedProducts = [...state.products, {...product, quantity: 1}]; 
                localStorage.setItem('cart', JSON.stringify(updatedProducts))
                return { products: updatedProducts };
            }
        }),
        removeProduct: (productId) => set((state) => {
            const existing = state.products.find((product) => product.id === productId);
            if (existing) {
                if (existing.quantity > 1) {
                    const updatedProduct = {
                        ...existing,
                        quantity: existing.quantity - 1,
                    };
                    const updatedProducts = state.products.map((p) => p.id === existing.id ? updatedProduct : p);
                    localStorage.setItem('cart', JSON.stringify(updatedProducts))
                    return { products: updatedProducts };
                } else {
                    const updatedProducts = state.products.filter((product) => product.id !== productId);
                    localStorage.setItem('cart', JSON.stringify(updatedProducts))
                    return { products: updatedProducts };
                }
            }
            return state;
        })
    };
});

