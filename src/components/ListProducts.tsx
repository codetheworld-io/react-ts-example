import { IProduct } from '@shared/interfaces/IProduct';
import React from 'react';

export type ListProductsProps = {
  products: IProduct[];
}

const ListProducts: React.FC<ListProductsProps> = ({ products }) => {
  return (
    <ul data-testid="list-products">
      {products.map(({ id, title }) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
};

export default ListProducts;
