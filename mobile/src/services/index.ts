import axios from 'axios'

export const api = axios.create({
    baseURL: "https://daniellegb-movieflix.herokuapp.com",
});