import axios from 'axios';
import { productStore } from '../store/ProductStore';

export const getDiscountPrice = (price: number): number => {
  // Appply 10% discount to price when time is between 10 to 15
  const today = new Date();
  const currenTime = today.getHours(); 
  let dicountPrice = price;
  
  if (currenTime <= 10 || currenTime <= 14) {
    dicountPrice = price - ((price * 10) / 100);
  } else {
    dicountPrice = price;
  }
  return dicountPrice;
};

// Latter move to env vars
export const SERVER_URL = 'http://localhost:8000/api/product/';

export const fetchData = (): void => {
  // get data from backend using get request
  axios.get(SERVER_URL).then((res) => {
    console.log(res.data);
    productStore.setProducts(res.data);
  });
};