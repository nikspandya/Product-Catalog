import { makeAutoObservable } from 'mobx';
import { ProductType } from '../types/type';

class ProductStore {
  productDetails: ProductType = {} as ProductType;

  products: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setProductDetails = (productDetails: ProductType): void => {
    this.productDetails = productDetails;
  };

  setProducts = (products: ProductType[]): void => {
    this.products = products;
  };

}

export const productStore = new ProductStore();