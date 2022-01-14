import ButtonIcon from "core/components/ButtonIcon";
import { Movie, User } from "core/types/Movie";
import { getSesssionData } from "core/utils/auth";
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
    const [ auth, setAuth ] = useState(false);
    const [ user, setUser] = useState<User>();
    
    useEffect(() => {
        makePrivateRequest({url: `/users/${getSesssionData().userId}`})
        .then(response => setUser(response.data));
        const author = user?.roles.map(role => (role.authority))
        if(author != undefined){
            for (const authority of author){
                if(authority == "ROLE_MEMBER"){
                    setAuth(true);
                }
            }
        }
    }, [user]);

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
                        value={auth? formData.text : "Only members can leave a review!"}
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