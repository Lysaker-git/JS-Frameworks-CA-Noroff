import useApi from "../../api/apiHook";
import singleProduct from "./elements/product";


function Products() {
    const {products, isLoading, isError} = useApi('https://api.noroff.dev/api/v1/online-shop');
  
    if (isLoading) {
    //   return console.log('Loading');
    }
    if (isError) {
    //   return console.log('Error');
    }
    return (
      products.map((product) => (
        <section key={product.id}>
            {singleProduct(product)}
        </section>
      ))
    )
  }

  function SaleProducts() {
    const {products, isLoading, isError} = useApi('https://api.noroff.dev/api/v1/online-shop');
    
    if (isLoading) {
      return <p>Loading</p>;
    }
    if (isError) {
      return <p>Error</p>;
    }

    const highlight = products
        .map((product) => {
            const percentageOfPrice = (((product.price - product.discountedPrice) / product.price) * 100).toFixed(0);
            return {
                ...product,
                percentageOfPrice,
            };
        })
        .sort((a, b) => b.percentageOfPrice - a.percentageOfPrice)
        .slice(0,3);
        return (
            <div>
                {highlight.map((product) => (
                    <section key={product.id}>
                        {singleProduct(product)}
                    </section>
                ))}
            </div>
        )
  }

export default function HomePage() {
    
    return (
        <main>
            <section>
                <h1>On Hop - Your <span>On</span>line S<span>hop</span></h1>
                <p>Get your products at a <span>steal!</span></p>
            </section>
            <h2>Flash sale</h2>
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