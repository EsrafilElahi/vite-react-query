import React from 'react';
import axios from 'axios';
import { useParams, useNavigate, useLoaderData, useLocation } from 'react-router-dom';
import { useQuery, QueryCache, useQueryClient } from '@tanstack/react-query';
import { useProductQuery } from '../hooks/useProduct';
import { useDeleteProduct } from '../hooks/useDeleteProduct';


const ProductDetail = (props) => {
  let params = useParams();
  const navigate = useNavigate();
  const paramID = useLoaderData();
  const queryClient = useQueryClient();

  const { data: product, isError, error, status, isLoading } = useProductQuery(params.id)
  const mutation = useDeleteProduct(params.id)
  const products = queryClient.getQueryData(["products", 1])

  console.log('products :', products)

  const handleDelete = () => {
    mutation.mutate()
  }

  if (mutation.isError || isError) {
    return <div>has an error accured!! {mutation.error.message || error.message}</div>
  }
  if (mutation.isLoading || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <span style={{ cursor: 'pointer' }} onClick={() => navigate(-1)}>back</span>
      <h1>ProductDetail page with id : {params.id}</h1>
      <img width={400} height={400} src={product.thumbnail} />
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>

      <h2 style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleDelete()}>delete product</h2>
    </div>
  )
}

export default ProductDetail