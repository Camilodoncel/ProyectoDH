import React from 'react';
import Header from "./components/Header/Header"
import { Searcher } from './components/Searcher/Searcher.js';
import  Routers   from "./Routes/Routers.js"
import ProductList from './components/products/ProductList'


function App() {
  return (
    <div className="App">
      <Routers/>
      <Searcher/>
      <ProductList/>
    </div>
  );
}

export default App;
