import axios from 'axios';


const ajax = axios.create({
    baseURL: process.env.NODE_ENV === "production" ? "http://209.97.140/api" : "http://localhost:8000/api",
    withCredentials: true,
});

export default ajax;



/*
        'X-Requested-With': 'XMLHttpRequest',
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.headers.common['baseURL'] = 'http://zoo-admin.eu/api';

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}




*/
















/*
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger.firebaseio.com/'
});

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest',
};

const csrf_token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

instance.defaults.headers.common['X-CSRF-TOKEN'] = csrf_token;
instance.defaults.headers.common['X-Requested-With'] =  'XMLHttpRequest';


export default instance;
*/


