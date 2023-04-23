import React, { useState, useEffect } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useBeforeUnload, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from '../components/ProductItem';
import styles from '../styles/products.module.css';
import { useProductsQuery } from '../hooks/useProducts';


const Products = (props) => {
  const client = useQueryClient();
  const [page, setPage] = useState(1)

  const { data, status, isError, isLoading, error, isPreviousData, prefetch } = useProductsQuery(page)

  console.log('products :', data);


  useBeforeUnload(
    prefetch(2)
  )


  if (isError) {
    return <div>has an error accured!! {error.message}</div>
  }
  if (isLoading) {
    return <div>Loading...</div>
  }


  const handleNextPage = () => {
    setPage(prev => prev + 1);
    prefetch(page + 2);
  }

  const handlePrev = () => {
    page > 1 ? setPage(prev => prev - 1) : setPage(1);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.products}>
        {data?.products?.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}

      </div>
      <div style={{ margin: '3rem 0', display: 'flex', justifyContent: 'space-evenly' }}>
        <span style={{ cursor: 'pointer', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} onClick={() => handlePrev()}>prev</span>
        <span>{page}</span>
        <span style={{ cursor: 'pointer', padding: '10px', borderRadius: '5px', border: '1px solid gray' }} onClick={() => handleNextPage()}>next</span>
      </div>
    </div>
  )
}

export default Products