import { Movie } from 'core/types/Movie';
import { makePrivateRequest, makeRequest } from 'core/utils/request';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieMakeReview from '../MovieMakeReview';
import MovieReviews from '../MovieReviews';
import './styles.scss';

type ParamsType = {
    movieId: string;
}

const MovieDetails = () => {

    const { movieId } = useParams<ParamsType>();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        makePrivateRequest({url: `/movies/${movieId}`})
        .then(response => setMovie(response.data));
    }, [movieId]);

    
    return (
        <div className="movie-details-container">
        <div className="movie-detail-container">
            <img src={movie?.imgUrl} alt={movie?.title} className="image-container" />
            <div className="details-container">
                <h2 className="movie-title">
                    {movie?.title}
                </h2>
                <h3 className="movie-year">
                    {movie?.year}
                </h3>
                <h3 className="movie-subtitle">
                    {movie?.subtitle}
                </h3>
                <h4 className="movie-synopsis">
                    {movie?.synopsis}
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
    )
}