import axios from 'axios';

const camionApi = axios.create({
    baseURL: 'http://localhost:4000/',
});

export default camionApi;