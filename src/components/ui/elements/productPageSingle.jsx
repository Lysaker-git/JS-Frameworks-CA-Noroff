import Price from "./priceContainer";
import { StyledProductContainer } from "../../styles/productPage.styles";
import { useCartStore } from "./cart";
import { shallow } from "zustand/shallow"

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
                        <h2>Reviews</h2>
                        {reviews.map((review) => (
                            <div key={review.id}>
                                <h3>{review.username}</h3>
                                <p>Rating: {review.rating}</p>
                                <p>{review.description}</p>
                            </div>
                        ))}
                    </section>
            </StyledProductContainer>
    )
}
