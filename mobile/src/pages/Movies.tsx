import React from 'react';
import {View} from "react-native";
import { MovieCard } from '../components';
import moviePoster from '../assets/moviePoster.png';

const movies = [
    {
        id: 1,
        imgUrl: moviePoster,
        title: "Title",
        year: "1999",
        subTitle: "SubTitle",
    },
    {
        id: 2,
        imgUrl: moviePoster,
        title: "Title",
        year: "1999",
        subTitle: "SubTitle",
    },
    {
        id: 3,
        imgUrl: moviePoster,
        title: "Title",
        year: "1999",
        subTitle: "SubTitle",
    },
    {
        id: 4,
        imgUrl: moviePoster,
        title: "Title",
        year: "1999",
        subTitle: "SubTitle",
    }
]

const Movies: React.FC = () => {
    return(
        <View>
            {
                movies.map((movie) => (
                    <MovieCard {...movie}/>
                ))
            }
        </View>
    );

};

export default Movies;