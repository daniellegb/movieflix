import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
    <nav className="navbar">
        <div className="text-navbar">
            <Link to="/" className="nav-logo-text">
                MovieFlix
            </Link>
        </div>
    </nav>
);

export default Navbar;