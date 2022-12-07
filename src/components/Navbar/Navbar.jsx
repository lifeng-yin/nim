import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div class="logo">
                <Link key='Landing' class="logo" to="/">Nim</Link>
            </div>
            <div class="buttons">
                <Link className="secondary-button" key="Login" to="/login">Login</Link>
                <Link className="primary-button" key="Register" to="/register">Register</Link>
            </div>
        </nav>
    )
}

export default Navbar;