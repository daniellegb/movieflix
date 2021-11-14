import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({movie} : Props) => (

    <div className="card-base">
        <img src={""} alt={"filme"} className="movie-card-image" />
        <div className="movie-info">
            <div className="movie-title">
                {movie.title}
            </div>
            <div className="movie-year">
                {movie.year}
            </div>
            <div className="movie-subtitle">
                {movie.subtitle}
            </div>
        </div>
    </div>
)

export default MovieCard;