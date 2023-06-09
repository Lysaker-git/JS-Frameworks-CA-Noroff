import { Link } from "react-router-dom";
import { Footer } from "./footer.styles";

export default function FooterComponent() {


    return (
        <Footer>
            <p>Copyright 2023 - Robin Lysaker &copy;</p>
            <Link to='/contact'>Contact Us</Link>
        </Footer>
    );
}