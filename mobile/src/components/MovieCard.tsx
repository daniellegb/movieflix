import React from 'react';
import { View, Text, ImageSourcePropType, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { text, theme } from '../styles';

interface MovieProps {
    id: Number;
    imgUrl: ImageSourcePropType;
    title: String;
    year: String;
    subTitle: String;
}

const MovieCard: React.FC<MovieProps> = ({ id, imgUrl, title, year, subTitle }) => {
    return (
        <TouchableOpacity style={theme.movieCard}>
            <Image style={theme.imgCard} source={imgUrl} />
            <View style={theme.movieCard}>
                <Text style={text.movieCardTextTitle}>{title}</Text>
                <Text style={text.movieCardTextYear}>{year}</Text>
                <Text style={text.movieCardTextSubTitle}>{subTitle}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default MovieCard;