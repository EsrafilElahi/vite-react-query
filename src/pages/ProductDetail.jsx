import React from 'react';
import axios from 'axios';
import { useQuery, QueryCache, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetail = (props) => {
  let params = useParams();
  const navigate = useNavigate();

  const { data: product, isError, error, status, isLoading } = useQuery({
    queryKey: ['products', params.id],
    queryFn: () => axios.get(`https://dummyjson.com/products/${params.id}`),
    enabled: !!params.id
  })


  if (isError) {
    return <div>has an error accured!! {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>back</span>
      <h1>ProductDetail page with id : {params.id}</h1>
      <img width={400} height={400} src={product.data.thumbnail} />
      <h2>{product.data.title}</h2>
      <h2>{product.data.price}</h2>
    </div>
  )
}

export default ProductDetail