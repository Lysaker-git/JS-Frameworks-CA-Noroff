import { useContext } from "react";
import useApi from "../../hooks/apiHook";
import SingleProduct from "../elements/SingleProduct";
import { SearchContext } from "./Search";

export default function SaleProducts() {
    const {searchValue} = useContext(SearchContext);
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
        .filter((product) => {
            const title = product.title.toLowerCase();
            const search = searchValue.toLowerCase();
            return title.includes(search);
        })
        .slice(0,3);
        return (
            <div>
                {highlight.map((product) => (
                    <section key={product.id}>
                        <SingleProduct product={product}/>
                    </section>
                ))}
            </div>
        )
  }