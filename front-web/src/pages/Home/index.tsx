import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container d-flex justify-content-between">
        <div className="description-container">
            <div className="title-container">
                Avalie Filmes 
            </div>
            <div className="about-container">
                Diga o que você achou do seu <br/> filme favorito
            </div>
            <div className="image-container">
                <MainImage className="main-image" />
            </div>
        </div> 
        <div className="login-container">
            <h1 className="login-style">LOGIN</h1>
            <input
                value="name"
                name="name"
                type="text"
                className="text-form"
                placeholder="e-mail"
            />
            <input
                value="password"
                name="password"
                type="text"
                className="text-form"
                placeholder="password"
            />
            <ButtonIcon button="login" />
        </div>
    </div>
);

export default Home;