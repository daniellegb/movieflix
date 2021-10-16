import ButtonIcon from "core/components/ButtonIcon";

const MovieMakeReview = () => (
    <div className="moviemaker-container">
        <textarea
            name="description"
            value="Description"
            className="form-control"
        />
        <ButtonIcon button="salvar avaliação" />
    </div>
);

export default MovieMakeReview;