import axios from 'axios';

const environment = process.env.NODE_ENV;
let BASE_URL; 

(environment === 'development') || (environment === 'dev') ? BASE_URL = 'http://localhost:3333' : BASE_URL = '';

const getProducts = function() {
  const url = `${BASE_URL}/api/products`;
  return axios.get(url).then(res=>res.data);
}
const postProduct = function(data) {
  const url = `${BASE_URL}/api/newproduct`;
  const {name, price, image, description} = data;
  console.log(data);
  //{name, price, image, description}
  return axios.post(url, data).then(res => res.data);

}
export {getProducts, postProduct};
