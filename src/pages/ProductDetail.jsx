import React from 'react'
import { useQuery, QueryCache, useQueryClient } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

const ProductDetail = (props) => {
  let params = useParams();

  const queryClient = useQueryClient();

  // https://fakestoreapi.com/products/1

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ['products', params.id],
    queryFn: axios.get()
  })


  const Products = queryClient.getQueryData(["products"]);
  console.log("queryClient :", Products);


  return (
    <div>ProductDetail : {params.id}</div>
  )
}

export default ProductDetail