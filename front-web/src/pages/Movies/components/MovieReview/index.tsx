import ButtonIcon from "core/components/ButtonIcon";
import { Movie } from "core/types/Movie";
import { makePrivateRequest } from "core/utils/request";
import { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard";
import './styles.scss';

type FormState = {
    text: string;
    movieId: number;
}

type Props = {
    id: number;
}

const MovieReview = ({ id }: Props) => {

    const [formData, setFormData] = useState<FormState>({
        text: '',
        movieId: id
    });
    const [ movie, setMovie ] = useState<Movie>();

    useEffect(() => {
        makePrivateRequest({url: `/movies/${id}`})
        .then(response => setMovie(response.data));
    }, [movie?.reviews]);

    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const payload = {
            ...formData
        }
        makePrivateRequest({ url: '/reviews', method: 'POST', data: payload })
            .then(() => {
                setFormData({
                    text: '',
                    movieId: id
                })
            });
    }

    return(
        <div className="movie-text-box-container">
        <form onSubmit={handleSubmit}>
            <div className="moviemaker-container">
                <textarea
                    name="text"
                    value={formData.text}
                    className="form-control"
                    onChange={handleOnChange}
                />
                <div className="button-position">
                    <ButtonIcon button="salvar avaliação" />
                </div>
            </div>
        </form>
        <div className="movie-reviews-container">
            {movie?.reviews.map( 
                review => (
                    <div key={review.id}>
                        <ReviewCard user={review.user} text={review.text} />
                    </div>
                )
            )}
        </div>
        </div>
    );
}

export default MovieReview;