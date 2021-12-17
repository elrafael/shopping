import { Product } from "../interfaces/product.interface";
export interface Cart {
  products: ProductsInCart[];
  value: number;
  discount: number;
  isPercent: boolean;
  total: number;
}

export interface ProductsInCart {
  product?: Product;
  quantity: number;
}
