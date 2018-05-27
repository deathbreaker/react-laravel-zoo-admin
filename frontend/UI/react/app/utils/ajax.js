import axios from 'axios';

const ajax = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "http://209.97.140.65/api" : "http://localhost:8000/api",
    withCredentials: true,
});

export default ajax;














