import React from 'react';
import {View, Text} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { theme, text } from '../styles';
import Movies from './Movies';

const Home: React.FC = () => {
    const navigation = useNavigation();
    return(
        <View style={theme.container}>
            <View style={theme.card}>
                <Text style={(text.loginText)}>login</Text>
                <TouchableOpacity 
                    style={theme.primaryButton} 
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate(Movies)}
                >
                    <Text style={(text.loginTextButton)}>fazer login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

};

export default Home;