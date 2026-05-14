import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/about">Home</Link>
                </li>
                <li>
                    <Link to="/accounts">Available Individual Accounts</Link>
                </li>
                <li>
                    <Link to="/enterprises">Available Enerprise Accounts</Link>
                </li>
                <li>
                    <Link to="/investments">Available Investments</Link>
                </li>
                <li>
                    <Link to="/currency">Accepted Currencies</Link>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;