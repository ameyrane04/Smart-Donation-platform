import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api', //our backend api
    headers: {
        'Content-Type': 'application/json',
    },
});

export default instance;