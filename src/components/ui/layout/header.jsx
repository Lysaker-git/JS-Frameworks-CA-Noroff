import { Link } from 'react-router-dom';
import { Header } from '../../styles/header.styles';
import search from '../../assets/search.svg';
import icon from '../../assets/on-hop-website-favicon-color.png'
import { Form } from '../../styles/form.styles'
import { useCartStore } from '../elements/cart';

export default function HeaderComponent() {

    const { products } = useCartStore();
    
    const numberOfProducts = products.reduce(
        (total, product) => total + product.quantity,0
    )


    return (
        <Header >
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <img src ={icon}/>
                            <span>n Hop</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Form>
                <input type="text" name="search" id="search" />
                <label htmlFor="search">
                    <img src={search} alt="Search" />
                </label>
            </Form>
            {numberOfProducts > 0 && <Link to="/cart"><p>Cart: <span>{numberOfProducts}</span></p></Link>}
        </Header>
    );
}