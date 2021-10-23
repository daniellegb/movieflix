import './styles.scss';

const MovieCard = () => (

    <div className="card-base">
        <img src={""} alt={"filme"} className="movie-card-image" />
        <div className="movie-info">
            <div className="movie-title">
                As duas torres
            </div>
            <div className="movie-year">
                ano 1999
            </div>
            <div className="movie-subtitle">
                sub-título
            </div>
        </div>
    </div>
)

export default MovieCard;