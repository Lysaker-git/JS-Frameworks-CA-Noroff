import { Link } from 'react-router-dom';
import { Header } from './header.styles';
import search from '../../../assets/search.svg'
import icon from '../../../assets/on-hop-website-favicon-color.png'
import { Form } from '../styles/form.styles';
import { useCartStore } from '../../../hooks/cartHook';
import { useContext } from 'react';
import { SearchContext } from '../../elements/Search';



export default function HeaderComponent() {

    const { searchValue, setSearchValue } = useContext(SearchContext);
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
    }

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
                <input type="text" name="search" id="search" value={searchValue} onChange={handleSearchChange}/>
                <label htmlFor="search">
                    <img src={search} alt="Search" />
                </label>
            </Form>
            {numberOfProducts > 0 && <Link to="/cart"><p>Cart: <span>{numberOfProducts}</span></p></Link>}
        </Header>
    );
}