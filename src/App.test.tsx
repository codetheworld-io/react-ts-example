import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import React from 'react';
import { ISearchProductResponse } from '@shared/interfaces/ISearchProductResponse';
import { IProduct } from '@shared/interfaces/IProduct';

describe('App', () => {
  it('displays the search form and the list of products', async () => {
    render(<App />);

    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    expect(screen.getByTestId('list-products')).toBeInTheDocument();
  });

  it('searches for products when the search form is submitted', async () => {
    const response = { products: [] as IProduct[] } as ISearchProductResponse;
    jest.spyOn(axios, 'get').mockResolvedValue({ data: response });
    const setProducts = jest.fn();
    jest.spyOn(React, 'useState').mockImplementation(() => [[], setProducts]);

    render(<App />);

    const searchInput = screen.getByTestId('search-input');
    const searchForm = screen.getByTestId('search-form');

    // Set the value of the search input
    fireEvent.change(searchInput, { target: { value: 'keyword' } });

    // Submit the search form
    fireEvent.submit(searchForm);

    // Assert that the axios.get function was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith(
      'https://dummyjson.com/products/search?q=keyword',
    );

    // Wait for the setProducts function to have been called
    await waitFor(() => {
      expect(setProducts).toHaveBeenCalledWith(response.products);
    });
  });
});
