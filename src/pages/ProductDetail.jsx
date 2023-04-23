import React from 'react'
import { useQuery, QueryCache, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
  let params = useParams();

  const queryClient = useQueryClient();

  const data = queryClient.getQueryData(["products"]);

  console.log("queryClient :", data);


  return (
    <div>ProductDetail : {params.id}</div>
  )
}

export default ProductDetail