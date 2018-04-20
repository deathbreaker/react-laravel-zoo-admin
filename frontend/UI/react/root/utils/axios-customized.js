
window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.headers.common['baseURL'] = 'http://localhost:8000/api';

let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}


















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


