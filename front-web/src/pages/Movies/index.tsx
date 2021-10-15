import MovieCard from "./components/MovieCard";


const Movies = () => (
    <>
    <div className="d-flex flex-row">
        <div className="p-2">
            <MovieCard />
        </div>
        <div className="p-2">
            <MovieCard />
        </div>
        <div className="p-2">
            <MovieCard />
        </div>
        <div className="p-2">
            <MovieCard />
        </div>
        <div className="p-2">
            <MovieCard />
        </div>
    </div>
    </>
);

export default Movies;