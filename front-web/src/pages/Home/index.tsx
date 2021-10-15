import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
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
            <h1>Login</h1>
        </div>
    </div>
);

export default Home;