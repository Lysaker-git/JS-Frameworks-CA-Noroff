import { Card } from '../../styles/card.styles';
import { StyledLink } from '../../styles/global.styles';
import Price from './priceContainer';



export default function singleProduct(product) {
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