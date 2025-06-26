
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.18.6:3333/api', // troque pelo IP da sua máquina
});

export default api;
