import React from 'react';
import {View} from "react-native";
import { MovieCard } from '../components';
import moviePoster from '../assets/moviePoster.png';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';

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
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            {
                movies.map((movie) => (
                    <MovieCard {...movie}/>
                ))
            }
        </ScrollView>
    );

};

export default Movies;