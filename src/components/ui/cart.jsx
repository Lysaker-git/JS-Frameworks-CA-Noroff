import { useCartStore } from "./elements/cart"
import { shallow } from "zustand/shallow";

export default function Cart() {
    
    const { products, removeProduct } = useCartStore(
        (state) => ({
            products: state.products,
            removeProduct: state.removeProduct
        }),
        shallow,
    );

    console.log(products);

    return (
        <>
            <h1>Cart Page</h1>
            <div>
                <h2>Your Products</h2>
                {products.map((product) => (
                    <section key={product.id}>
                        <p>{product.title}</p>
                        <button onClick={() => removeProduct(product.id)}>Remove</button>
                    </section>
                ))}
            </div>
        </>
        
    )
}