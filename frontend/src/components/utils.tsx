import axios from 'axios';
import { productStore } from '../store/ProductStore';

export const fetchData = (): void => {
  // get data from backend using get request
  axios.get('http://localhost:8000/api/product/').then((res) => {
    console.log(res.data);
    productStore.setProducts(res.data);
  });
};