import SaleProducts from "../elements/SalesProducts";
import Products from "../elements/Products";


export default function HomePage() {
    return (
        <main>
            <section>
                <h1>On Hop - Your <span>On</span>line S<span>hop</span></h1>
                <p>Get your products at a <span>steal!</span></p>
            </section>
            <h2>Best Offers</h2>
            <div>
                <SaleProducts />
            </div>
            <h2>Products</h2>
            <div>
                <Products />
            </div>
        </main>
        );
}