import { api, TOKEN } from "./index";
import queryString from "query-string";
import ASyncStorage from '@react-native-async-storage/async-storage';

interface AuthProps {
    username: string;
    password: string;
}

export async function login(userInfo: AuthProps){
    const data = queryString.stringify({...userInfo, grant_type: "password"});
    const result = await api.post(
        'oauth/token', 
        data,
        {headers: {
            Authorization: TOKEN,
            "Content-Type": "application/x-www-form-urlencoded",
        }}
    );

    const { access_token } = result.data;
    setASyncKeys("@token", access_token);
    return result;
}

async function setASyncKeys(key: string, value: string) {
    try {
        await ASyncStorage.setItem(key, value);
    } catch (e) {
        console.warn(e);
    }
}

export async function isAuthenticated() {
    try {
        const token = await ASyncStorage.getItem("@token");
        token ? console.warn("Logado") : console.warn ("Deslogado");
    } catch (e) {
        console.warn(e);
    }
}