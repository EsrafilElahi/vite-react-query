import React from 'react'

const ProductItem = ({ product }) => {
  return (
    <div>
      <h2 className='text-3xl text-orange-900 font-bold underline'>title :{product.title}</h2>
      <h4>description :{product.desc}</h4>
      <span className='text-3xl text-orange-900'>price :{product.price}</span>
    </div>)
}

export default ProductItem