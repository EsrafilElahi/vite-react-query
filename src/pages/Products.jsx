import React, { useLayoutEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios'
import { useBeforeUnload, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from '../components/ProductItem';
import styles from '../styles/products.module.css';

const Products = (props) => {
  const client = useQueryClient();

  const { data: products, status, isError, isLoading, error } = useQuery(["products"], () => axios.get("https://fakestoreapi.com/products?limit=10"));

  if (isError) {
    return <div>has an error accured!! {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className={styles.products}>
      {products?.data?.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products