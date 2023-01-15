import { IProduct } from './IProduct';

export interface ISearchProductResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
