import { StyledCart } from "./cart.styles";
import { useCartStore } from "../../../hooks/cartHook"
import { shallow } from "zustand/shallow";
import { StyledLink } from "../styles/global.styles";
import { useNavigate } from "react-router";

export default function Cart() {
    
    const { products, removeProduct, clearCart } = useCartStore(
        (state) => ({
            products: state.products,
            removeProduct: state.removeProduct,
            clearCart: state.clearCart
        }),
        shallow,
    );
    const totalPrice = products.reduce((total, product) => {
        const productPrice = product.price > product.discountedPrice ? product.discountedPrice : product.price;
        const productTotal = productPrice * product.quantity;
        return total + productTotal;
    }, 0);

    const navigate = useNavigate();
    const checkOut = () => {
        try {
            if (products.length !== 0) {
                clearCart();
                navigate('/successScreen');
            } else {
                alert('No Products in Cart')
            }
        } catch (err) {
            console.log(err)
        } 
    }
    const roundedTotal = totalPrice.toFixed(2)
    const renderProducts = () => {
        return products.map((product) => (
            <section key={product.id}>
                <div>
                    <StyledLink to={product.id}>
                        <h3>{product.title}</h3>
                    </StyledLink>
                    {product.price === product.discountedPrice && <p>Unit price: {product.price.toFixed(2)}</p>}
                    {product.price > product.discountedPrice && <div><p>{product.price.toFixed(2)}</p><p>Price: {product.discountedPrice.toFixed(2)}</p></div>}
                    {product.quantity && <p>Quantity: {product.quantity}</p>}
                </div>
                <div>
                    {product.quantity && ( <p>Total Price: {((product.discountedPrice || product.price) * product.quantity).toFixed(2)}</p>)}
                    <button onClick={() => removeProduct(product.id)}></button>
                </div>
            </section>
        ))
    }
    return (
        <StyledCart>
            <h1>Overview</h1>
            <div>
                <div>
                    <section>
                        <h2>Your Products</h2>
                        <div>
                            {renderProducts()}
                        </div>
                    </section>
                    <section>
                        <h2>Your Total</h2>
                        <p>{roundedTotal} $</p>
                    </section>
                </div>
                <div>
                    <button onClick={() => checkOut()}>Check out Cart</button>
                </div>
            </div>
        </StyledCart>
        
    )
}