import { type } from "os"

export type MoviesResponse = {
    content: Movie[];
    totalPages: number;
}

export type GenresResponse = {
    content: Genre[];
    totalPages: number;
}

export type ReviewsResponse = {
    content: Reviews[];
    totalPages: number;
}

export type User = {
    email: string;
    id: number;
    name: string;
    roles: Roles[];
}

{/*export type User = {
    id: number;
    text: string;
    movieId: number;
    name: string;
}*/}

export type Genre = {
    id: number;
    name: string;
}

export type Movie = {
    id: number;
    title: string;
    subTitle:string;
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
    user: User;
}

export type Roles = {
    id: number;
    authority: string;
}