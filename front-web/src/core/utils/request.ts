import axios, { Method } from 'axios';
import qs from 'qs';
import { CLIENT_ID, CLIENT_SECRET, getSesssionData } from 'core/utils/auth';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object | string;
    params?: object;
    headers?: object;
}

type LoginData = {
    username: string;
    password: string;
}

const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const makeRequest = ({ method = 'GET', url, data, params, headers }: RequestParams) => {
    return axios({
        method,
        url: `${BASE_URL}${url}`,
        data,
        params,
        headers
    });
}

export const makePrivateRequest = ({ method = 'GET', url, data, params}: RequestParams) => {
    const sessionData = getSesssionData();
    const headers = {
        'Authorization': `Bearer ${sessionData.access_token}`
    }
    return makeRequest({ method, url, data, params, headers });
}

export const makeLogin = (loginData: LoginData) => {
    const token = `${CLIENT_ID}:${CLIENT_SECRET}`;
    console.log(token);

    const headers = {
        Authorization: `Basic ${window.btoa(token)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    console.log(window.btoa(token));

    const payload = qs.stringify({ ...loginData, grant_type: 'password' });
    console.log(payload);

    return makeRequest({ url: '/oauth/token', data: payload, method: 'POST', headers });
}