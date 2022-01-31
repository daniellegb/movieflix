import React from 'react';
import {ActivityIndicator, View} from "react-native";
import { MovieCard } from '../components';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../styles';
import { useState, useEffect } from "react";
import { api } from '../services';

const Movies: React.FC = () => {

    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    async function fillMovies() {
        setLoading(true);
       // const res = await api.get(`/movies`);
        setMovies(((await api.get(`/movies`)).data.content));
        setLoading(false);
    }

    useEffect(() => {
        fillMovies;
    }, [])

    return(
        <ScrollView contentContainerStyle={theme.scrollContainer}>
            {loading ? 
                (
                    <ActivityIndicator size="large" />
                ) 
                : 
                (
                    movies.map((movie) => (
                        <MovieCard {...movie}/>
                    ))
                )
            }
        </ScrollView>
    );

};

export default Movies;