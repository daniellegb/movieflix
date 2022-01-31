import React from 'react';
import { View, Text, ImageSourcePropType, Image } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';

interface MovieProps {
    id: Number;
    imgUrl: ImageSourcePropType;
    title: String;
    year: String;
    subTitle: String;
}

const MovieCard: React.FC<MovieProps> = ({ id, imgUrl, title, year, subTitle }) => {
    return (
        <TouchableOpacity>
            <Image source={imgUrl} />
            <Text>{title}</Text>
        </TouchableOpacity>
    );
}

export default MovieCard;