import { Movie } from 'core/types/Movie';
import './styles.scss';

const MovieCard = () => (

    <div className="card-base">
        <img src={""} alt={"filme"} className="movie-card-image" />
        <div className="movie-info">
            <div className="movie-title">
                titulo
            </div>
            <div className="movie-year">
                2002
            </div>
            <div className="movie-subtitle">
                subtitle
            </div>
        </div>
    </div>
)

export default MovieCard;