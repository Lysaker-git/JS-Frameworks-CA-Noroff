import Price from "./PriceContainer";
import { StyledProductContainer } from "../ui/productPage/productPage.styles";
import { useCartStore } from "../../hooks/cartHook";
import { shallow } from "zustand/shallow"
import Reviews from "./ReviewsContainer";

export default function ProductPageSingle({ product }) {
    const { title, imageUrl, price, discountedPrice, description, tags = [], reviews = [] } = product;

    const { addProduct } = useCartStore(
        (state) => ({
            addProduct: state.addProduct
        }),
        shallow,
    );

    const handleAdd = () => {
        addProduct(product);
    }
    return (
            <StyledProductContainer>
                    <section>
                        <div>
                            <img src={imageUrl} alt={title}/>
                        </div>
                        <aside>
                            <h1>{title}</h1>
                            <div>
                                <Price originalPrice={price} discountPrice={discountedPrice}/>
                            </div>
                            <div>
                                <p>{description}</p>
                            </div>
                            <div>
                                {tags.map((tag) => (
                                    <p key={tag}>{tag}</p>
                                ))}    
                            </div>
                            <div>
                                <button onClick={handleAdd}>Add to cart</button>
                            </div>
                        </aside>
                    </section>
                    <section>
                    <Reviews reviews={reviews}/>
                    </section>
            </StyledProductContainer>
    )
}
