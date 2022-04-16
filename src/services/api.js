import axios from 'axios';

const api = axios.create({
   baseURL: 'https://resilia-pub.herokuapp.com'
})

export default api;