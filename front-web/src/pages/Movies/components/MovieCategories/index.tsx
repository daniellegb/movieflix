import './styles.scss';

const MovieCategories = () => (
    <div className="movie-categories ">
        <select
            value="Categorias"
            className="select-style text-style"
            name="category">
            <option value="1">Science Fiction</option>
            <option value="3">Action</option>
            <option value="2">Fantasy</option>
        </select>
    </div>
);

export default MovieCategories;