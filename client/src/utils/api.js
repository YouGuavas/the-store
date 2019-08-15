import axios from 'axios';
const dotenv = require('dotenv').config();

const environment = process.env.NODE_ENV;
let BASE_URL; 

(environment === 'development') || (environment === 'dev') ? BASE_URL = 'http://localhost:3333' : BASE_URL = '';

const getProducts = function() {
  const url = `${BASE_URL}/api/products`;
  return axios.get(url).then(res=>res.data);
}
export {getProducts};
