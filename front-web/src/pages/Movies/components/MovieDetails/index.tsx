import { ReactComponent as MainImage } from 'core/assets/images/main-image.svg';
import MovieMakeReview from '../MovieMakeReview';
import MovieReviews from '../MovieReviews';
import './styles.scss';

const MovieDetails = () => (
    <div className="movie-details-container">
        <div className="movie-detail-container">
            <div className="image-container">
                <MainImage />
            </div>
            <div className="details-container">
                <h2 className="movie-title">
                    Movie title
                </h2>
                <h3 className="movie-year">
                    year 1999
                </h3>
                <h3 className="movie-subtitle">
                    Subtitle
                </h3>
                <h4 className="movie-synopsis">
                    Synopsis
                </h4>
            </div>
        </div>
        <div className="movie-text-box-container">
            <MovieMakeReview />
        </div>
        <div className="movie-reviews-container">
            <MovieReviews userName="Ana" review="Muito legal!"/>
            <MovieReviews userName="Joana" review="Super legal!"/>
        </div>
    </div>
);

export default MovieDetails;