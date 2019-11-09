import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-6db60.firebaseio.com/'
});

export default instance;