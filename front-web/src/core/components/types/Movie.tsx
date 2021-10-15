export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type Movie = {
    id: number;
    title: string;
    subtitle:string;
    year: number;
    imgUrl: string;
    synopsis: string;
    genreId: number;
    genreName: string;
    reviews: Reviews[];
}

export type Reviews = {
    id: number;
    text: string;
    movieId: number;
    user: string;
}