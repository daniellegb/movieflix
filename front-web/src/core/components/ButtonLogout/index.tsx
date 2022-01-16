import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    button: string;
}

const ButtonLogout = ({ button } : Props) => {

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        localStorage.clear();
    }

    return(
        <form onClick={handleSubmit}>
            <Link to="/" className="nav-logo-text">
            <button className="btn-logout-style">
                {button}
            </button>
            </Link>
        </form>

    );
}
export default ButtonLogout;