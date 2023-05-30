import { StyledCart } from "../styles/cart.styles";
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
    const totalPrice = products.reduce((total, product) => {
        const productPrice = product.price > product.discountedPrice ? product.discountedPrice : product.price;
        const productTotal = productPrice * product.quantity;
        return total + productTotal;
    }, 0);

    const roundedTotal = totalPrice.toFixed(2)
    return (
        <StyledCart>
            <h1>Overview</h1>
            <div>
                <section>
                    <h2>Your Products</h2>
                    {products.map((product) => (
                        <section key={product.id}>
                            <h3>{product.title}</h3>
                            {product.price === product.discountedPrice && <p>Unit price: {product.price}</p>}
                            {product.price > product.discountedPrice && <div><p>{product.price}</p><p>Unit Price: {product.discountedPrice}</p></div>}
                            {product.quantity && <p>{product.quantity}</p>}
                            {product.quantity && ( <p>Total Price: {((product.price || product.discountedPrice) * product.quantity)}</p>)}
                            <button onClick={() => removeProduct(product.id)}></button>
                        </section>
                    ))}
                </section>
                <section>
                    <h2>Your Total</h2>
                    <p>{roundedTotal}</p>
                </section>
            </div>
            <div>
                <button>Check out Cart</button>
            </div>
        </StyledCart>
        
    )
}