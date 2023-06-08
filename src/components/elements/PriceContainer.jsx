export default function Price (props) {
    const { originalPrice, discountPrice } = props;

    
    if (discountPrice < originalPrice) {
        const percentageOfPrice = (((originalPrice - discountPrice) / originalPrice) * 100).toFixed(0);
        return (
            <>
                <div>
                    <p>{percentageOfPrice}% off</p>
                </div>
                <div>
                    <p>{originalPrice}</p>
                    <p>{discountPrice}</p>
                </div>
            </>
        );
    } else {
        return (
            <div>
                <p>{originalPrice}</p>
            </div>
        )
    }
}