import React from 'react';
import axios from 'axios';
import { useQuery, QueryCache, useQueryClient } from '@tanstack/react-query';
import { useParams, useNavigate, useLoaderData, } from 'react-router-dom';
import { useProductQuery } from '../hooks/useProduct';


const ProductDetail = (props) => {
  let params = useParams();
  const navigate = useNavigate();

  const { data: product, isError, error, status, isLoading } = useProductQuery(params.id)

  const paramID = useLoaderData();

  console.log('album :', paramID)


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
      <img width={400} height={400} src={product.thumbnail} />
      <h2>{product.title}</h2>
      <h2>{product.price}</h2>
    </div>
  )
}

export default ProductDetail