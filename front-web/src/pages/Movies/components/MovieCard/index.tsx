import './styles.scss';

const MovieCard = () => (
    <div className="card-base">
        <img src={""} alt={"filme"} className="movie-card-image" />
        <div className="movie-info">
            <h2 className="movie-title">
                filme
            </h2>
            <h2 className="movie-year">
                ano 1999
            </h2>
            <h2 className="movie-subtitle">
                sub-título
            </h2>
        </div>
    </div>
)

export default MovieCard;