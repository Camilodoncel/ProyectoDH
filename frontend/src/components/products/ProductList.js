import React, { useState } from "react";
import Products from "./Products.json";
import Product from "./Product";
import { ProductStyled } from "./ProductStyled";

const ProductList = () => {
  const [product, setProduct] = useState(Products);
  return (
    <ProductStyled>
      <section class="productList">
        {Products.map((product) => {
          return (
            <Product
              crimg={product.crimg}
              category={product.category}
              title={product.title}
              location={product.location}
              description={product.description}
            />
          );
        })}
      </section>
    </ProductStyled>
  );
};

export default ProductList;
