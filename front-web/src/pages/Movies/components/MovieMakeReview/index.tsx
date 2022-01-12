import ButtonIcon from "core/components/ButtonIcon";
import { User } from "core/types/Movie";
import { getSesssionData } from "core/utils/auth";
import { makePrivateRequest } from "core/utils/request";
import { useState } from "react";
import './styles.scss';

type FormState = {
    text: string;
    movieId: number;
}

type Props = {
    id: number;
}

const MovieMakeReview = ({ id }: Props) => {

    const [formData, setFormData] = useState<FormState>({
        text: '',
        movieId: id
    });



    const handleOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(formData.movieId);
        console.log(formData.text);
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
            console.log(formData);
    }

return(
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
    );
}

export default MovieMakeReview;