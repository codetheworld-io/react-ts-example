import { render, screen } from '@testing-library/react';
import ListProducts from './ListProducts';
import { IProduct } from '@shared/interfaces/IProduct';

describe('ListProducts', () => {
  it('should render product list', () => {
    const products = [
      { id: 1, title: 'Product 1' },
      { id: 2, title: 'Product 2' },
    ] as IProduct[];

    render(<ListProducts products={products}/>);

    const lists = screen.getAllByRole('listitem');
    expect(lists).toHaveLength(2);
    expect(lists[0]).toHaveTextContent(products[0].title);
    expect(lists[1]).toHaveTextContent(products[1].title);
  });
});
