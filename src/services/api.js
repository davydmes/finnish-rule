import { BASEURL } from './env'
import axios from 'axios';

export const fetchApi= (ENDPOINT, METHOD="GET", PAYLOAD = {}, HEADERS = {}) => {

    let URL = BASEURL+ENDPOINT

    const options = {
        method: METHOD,
        headers: HEADERS,
        data: PAYLOAD,
        url: URL
    };
    return axios(options);
}