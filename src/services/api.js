import axios from 'axios';

const api = axios.create({
   baseURL: 'https://pub-programmer.herokuapp.com'
})

export default api;