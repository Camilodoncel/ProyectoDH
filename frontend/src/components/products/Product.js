import React from 'react'
import { ProductStyled } from './ProductStyled'
const Product = (props) => {
  return (
  <ProductStyled>
      <span class="cardProduct">
          <img className='imgProduct' src={props.crimg}/>
          <div class="caption">
            <div class="category">{props.category}</div>
            <div class="title">{props.title}</div>
            <div class="ubication"><i class="fa fa-map-marker"></i> {props.location} - <span class="map">MOSTRAR EN EL MAPA</span> </div>
            <p class="description">{props.description}</p>
            <button class="verMas">Ver</button>
          </div>
      </span>  
  </ProductStyled>
  )
}

export default Product