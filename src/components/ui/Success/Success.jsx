import { useNavigate } from "react-router";
import { SuccessContainer } from "./success.styles";
import icon from "../../../assets/on-hop-website-favicon-color.png";

export default function SuccessPage () {
    const navigate = useNavigate();
    const handleHomeRedirect = () => {
        navigate('/');
    }



    return (
        <SuccessContainer>
            <img src={icon}/>
            <h1>Checkout complete!</h1>
            <p><span>Thank you</span> for shopping with us!</p>
            <button onClick={handleHomeRedirect}>Back to shop</button>
        </SuccessContainer>
    )
}