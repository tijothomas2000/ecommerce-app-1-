import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL
const apiKey = process.env.REACT_APP_API_TOKEN;
export const makeRequest = axios.create({
    baseURL: apiUrl,
    headers: {
        Authorization: `bearer ${apiKey}`
    }
})