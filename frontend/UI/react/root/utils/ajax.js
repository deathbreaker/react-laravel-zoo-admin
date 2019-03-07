import axios from 'axios';

const ajax = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "https://zoo-admin.herokuapp.com/api" : "http://localhost:8000/api",
    withCredentials: true,
});

export default ajax;














