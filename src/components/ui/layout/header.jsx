import { Link } from 'react-router-dom';
import { Header } from '../../styles/header.styles';
import search from '../../assets/search.svg';
import { Form } from '../../styles/form.styles'
// import { useState } from 'react';

export default function HeaderComponent() {
    // const [color, setColor] = useState(false);

    // const changeColor = () => {
    //     if(window.scrollY >= 100) {
    //         setColor(true)
    //     } else {
    //         setColor(false)
    //     }
    // }
    // window.addEventListener('scroll', changeColor)

    return (
        <Header >
            <nav>
                <ul>
                    <li>
                        <Link to="/">On Hop</Link>
                    </li>
                </ul>
            </nav>
            <Form>
                <input type="text" name="search" id="search" />
                <label htmlFor="search">
                    <img src={search} alt="Search" />
                </label>
            </Form>
        </Header>
    );
}