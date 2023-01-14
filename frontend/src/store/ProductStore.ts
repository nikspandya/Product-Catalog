import { makeAutoObservable } from 'mobx';
import { ProductType } from '../types/type';

class ProductStore {
  productDetails: ProductType = {} as ProductType;

  isProductBeingEdited: boolean = false;

  products: ProductType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setIsProductBeingEdited = (isProductBeingEdited: boolean): void => {
    this.isProductBeingEdited = isProductBeingEdited;
  };

  setProductDetails = (productDetails: ProductType): void => {
    this.productDetails = productDetails;
  };

  setProducts = (products: ProductType[]): void => {
    this.products = products;
  };

}

export const productStore = new ProductStore();