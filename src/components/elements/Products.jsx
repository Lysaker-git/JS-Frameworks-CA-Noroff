import SingleProduct from "./SingleProduct";
import useApi from "../../hooks/apiHook";
import { useContext } from "react";
import { SearchContext } from "./Search";

export default function Products() {
    const {searchValue} = useContext(SearchContext);
    const {products, isLoading, isError} = useApi('https://api.noroff.dev/api/v1/online-shop');

    if (isLoading) {
    //   return console.log('Loading');
    }
    if (isError) {
    //   return console.log('Error');
    }
    const filteredProducts = products.filter((product) => {
        const title = product.title.toLowerCase();
        const search = searchValue.toLowerCase();
        return title.includes(search);
    });

    return (
        filteredProducts.map((product) => (
        <section key={product.id}>
            <SingleProduct product={product} />
        </section>
      ))
    )
  }