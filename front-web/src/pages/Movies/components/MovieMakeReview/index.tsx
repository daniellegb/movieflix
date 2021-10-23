import ButtonIcon from "core/components/ButtonIcon";
import './styles.scss';

const MovieMakeReview = () => (
    <div className="moviemaker-container">
        <textarea
            name="review"
            value="Insert your review"
            className="form-control"
        />
        <div className="button-position">
            <ButtonIcon button="salvar avaliação" />
        </div>
    </div>
);

export default MovieMakeReview;