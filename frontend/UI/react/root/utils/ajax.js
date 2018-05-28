import axios from 'axios';

const ajax = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "http://159.65.87.193/api" : "http://localhost:8000/api",
    withCredentials: true,
});

export default ajax;














