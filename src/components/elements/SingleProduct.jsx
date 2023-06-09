import { Card } from '../ui/styles/card.styles';
import { StyledLink } from '../ui/styles/global.styles';
import Price from './PriceContainer';

const SingleProduct = ({ product }) => {
    const { title, imageUrl, id, price, discountedPrice } = product;
    
    return (
        <StyledLink to={id}>
            <Card>
                <div>
                    <img src={imageUrl} />
                    <h3>{title}</h3>
                </div>
                <div>
                    <Price originalPrice={price} discountPrice={discountedPrice}/>
                </div>
            </Card>
        </StyledLink>
    )
}

export default SingleProduct;