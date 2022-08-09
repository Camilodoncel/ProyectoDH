import React from 'react'

import {Searcher} from "../Searcher/Searcher"
import Category from "../Category/Categories"
import ProductList from '../products/ProductList'



const Home = () => {
 

  return (
    <div>

        <Searcher/>
        <Category/>
        <ProductList/>
          

    </div>
  )
}

export default Home