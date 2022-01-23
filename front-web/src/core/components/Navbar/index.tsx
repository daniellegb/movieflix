import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.scss';
import { useEffect, useState } from 'react';
import ButtonLogout from '../ButtonLogout';

const Navbar = () => {

    const location = useLocation();
    console.log(location.pathname);
    const [ showLogout, setShowLogout ] = useState(false);

    useEffect( () => {
            if(location.pathname!=="/"){
                setShowLogout(true);
            } else setShowLogout(false);
        },[location.pathname]);


    return(
        <nav className="navbar">
            <div className="text-navbar">
                <Link to="/" className="nav-logo-text">
                    MovieFlix
                </Link>
            </div>
            {
                showLogout ?
                    <div className="retangle">
                       <ButtonLogout button={'sair'}/>
                    </div>
                    :
                    <></>
            }
        </nav>
    );
}

export default Navbar;