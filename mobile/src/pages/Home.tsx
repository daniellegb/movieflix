import React, { useEffect, useState } from 'react';
import {View, Text, Image} from "react-native";
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { theme, text } from '../styles';
import Movies from './Movies';
import eyesOpened from "../assets/eyes-opened.png"
import eyesClosed from "../assets/eyes-closed.png"
import { isAuthenticated, login } from '../services/auth';

const Home: React.FC = () => {
    
    const  [ hidePassword, setHidePassword ] = useState(true);
    const [userInfo, setUserInfo] = useState({
        username: "",
        password: ""
    })
    const navigation = useNavigation();

    useEffect(() => {
        isAuthenticated();
    }, [userInfo]);
    
    async function handleLogin() {
        const data = await login(userInfo);
        console.warn(data);
        (data.status == 200) ? navigation.navigate("Movies") : <></>;
    }

    return(
        <View style={theme.container}>
            <View style={theme.card}>
                <Text style={(text.loginText)}>login</Text>
                <View style={theme.form}>
                        <TextInput 
                            placeholder= "Email"
                            autoCapitalize="none"
                            keyboardType="email-address"
                            style= { theme.textInput}
                            value={userInfo.username}
                            onChangeText={
                                (e) => {
                                    const newUserInfo = {...userInfo};
                                    newUserInfo.username = e;
                                    setUserInfo(newUserInfo);

                                }
                            }
                        />
                        <View style={theme.passwordContainer}>
                            <TextInput 
                                placeholder= "Password"
                                autoCapitalize="none"
                                style= { theme.textInput}
                                value={userInfo.password}
                                secureTextEntry={hidePassword}
                                onChangeText={
                                    (e) => {
                                        const newUserInfo = {...userInfo};
                                        newUserInfo.password = e;
                                        setUserInfo(newUserInfo);
                                    }
                                }
                            />
                            <TouchableOpacity 
                                style={theme.toggle}
                                
                                onPress={() => hidePassword ? setHidePassword(!hidePassword) : setHidePassword(hidePassword) }>
                                <Image source={hidePassword ? eyesOpened : eyesClosed} />
                            </TouchableOpacity>    
                        </View>
                </View>
                <TouchableOpacity 
                    style={theme.primaryButton} 
                    activeOpacity={0.8}
                    onPress={() => handleLogin()}
                >
                    <Text style={(text.loginTextButton)}>fazer login</Text>
                </TouchableOpacity>
            </View>

        </View>
    );

};

export default Home;