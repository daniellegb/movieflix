import { Movie } from "core/types/Movie";
import { makePrivateRequest } from "core/utils/request";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieMakeReview from "../MovieReview";
import "./styles.scss";

type ParamsType = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<ParamsType>();
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    makePrivateRequest({ url: `/movies/${movieId}` }).then((response) =>
      setMovie(response.data)
    );
  }, [movieId]);

  return (
    <div className="movie-details-container">
      <div className="movie-detail-container">
        <img
          src={movie?.imgUrl}
          alt={movie?.title}
          className="image-container"
        />
        <div className="detail-items-container">
          <h2 className="movie-title">{movie?.title}</h2>
          <h3 className="movie-year">{movie?.year}</h3>
          <h3 className="movie-subtitle">{movie?.subTitle}</h3>
          <h4 className="movie-synopsis">{movie?.synopsis}</h4>
        </div>
      </div>
      <div className="movie-text-box-container">
        {movie?.id && <MovieMakeReview id={movie?.id} />}
      </div>
    </div>
  );
};

export default MovieDetails;
