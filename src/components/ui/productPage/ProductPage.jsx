import useApi from "../../../hooks/apiHook";
import { useParams } from "react-router";
import ProductPageSingle from "../../elements/ProductPageSingle";

export default function ProductPage () {
    let { id } = useParams();
    const newUrl = `https://api.noroff.dev/api/v1/online-shop/${id}`
    const {products, isLoading, isError} = useApi(newUrl);

    if (isLoading) {
        return console.log('Loading');
    }
    if (isError) {
        return console.log('Error');
    }
    console.log(products)
    return (
        <main>
                <ProductPageSingle product={products} />
        </main>
    )
}