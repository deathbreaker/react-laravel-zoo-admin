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