import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav>
            <Link key="Landing" to="/" className="logo">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="#5F82FF" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 3h8v26H0zm12 0h8v26h-8zm12 0h8v26h-8z"/>
                </svg>
                <span>Nim</span>
            </Link>
            <div className="buttons">
                <Link className="secondary-button" key="Login" to="/login">Login</Link>
                <Link className="primary-button" key="Register" to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Navbar;