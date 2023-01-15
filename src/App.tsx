import { IProduct } from '@shared/interfaces/IProduct';
import { ISearchProductResponse } from '@shared/interfaces/ISearchProductResponse';
import axios from 'axios';
import React from 'react';
import './App.css';
import ListProducts from './components/ListProducts';
import SearchForm from './components/SearchForm';

function App() {
  const [products, setProducts] = React.useState<IProduct[]>([]);

  async function search(keyword: string): Promise<void> {
    const { data: response } = await axios.get<ISearchProductResponse>(
      `https://dummyjson.com/products/search?q=${keyword}`,
    );
    setProducts(response.products);
  }

  return (
    <div className="App">
      <SearchForm search={search}/>
      <ListProducts products={products}/>
    </div>
  );
}

export default App;
