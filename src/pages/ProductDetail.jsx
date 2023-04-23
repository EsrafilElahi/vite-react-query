import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {

  let params = useParams();


  return (
    <div>ProductDetail : {params.id}</div>
  )
}

export default ProductDetail