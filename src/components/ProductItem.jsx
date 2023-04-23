import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <div>
      <h2>title :{product.title}</h2>
      <h4>description :{product.desc}</h4>
      <span>price :{product.price}</span>
    </div>)
}

export default ProductItem