import { Movie } from 'core/types/Movie';
import './styles.scss';

type Props = {
    movie: Movie;
}

const MovieCard = ({movie} : Props) => (

    <div className="card-base">
        <img src={movie.imgUrl} alt={"filme"} className="movie-card-image" />
        <div className="movie-info">
            <div className="movie-card-title">
                {movie.title}
            </div>
            <div className="movie-card-year">
                {movie.year}
            </div>
            <div className="movie-card-subtitle">
                {movie.subTitle}
            </div>
        </div>
    </div>
)

export default MovieCard;