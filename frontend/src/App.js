import React from 'react';
import Header from "./components/Header/Header"
import { Searcher } from './components/Searcher/Searcher.js';
import  Routers   from "./Routes/Routers.js"
import ProductList from './components/products/ProductList'
import Footer from './components/Footer/Footer'
import Categories from './components/Category/Categories'


function App() {
  return (
    <div className="App">
      <Routers/>

    </div>
  );
}

export default App;
