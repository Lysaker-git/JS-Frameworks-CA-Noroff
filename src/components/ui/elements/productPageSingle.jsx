import Price from "./priceContainer";
import { StyledProductContainer } from "../../styles/productPage.styles";

export default function ProductPageSingle({ product }) {
    const { title, imageUrl, price, discountedPrice, description, tags = [], reviews = [] } = product;
    
    console.log(title)
    console.log(imageUrl)
    console.log(price)
    console.log(discountedPrice)
    console.log(description)
    console.log(tags)
    console.log(reviews)


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
