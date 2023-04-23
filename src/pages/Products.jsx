import React, { useLayoutEffect } from 'react'
import { useBeforeUnload, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductItem from '../components/ProductItem';


const Products = (props) => {
  const { title } = props

  const prods = [
    {
      id: 1,
      title: 'prod 1',
      desc: 'desc 1',
      price: 121
    },
    {
      id: 2,
      title: 'prod 2',
      desc: 'desc 2',
      price: 122
    },
    {
      id: 3,
      title: 'prod 3',
      desc: 'desc 3',
      price: 123
    },
    {
      id: 4,
      title: 'prod 4',
      desc: 'desc 4',
      price: 124
    },
    {
      id: 5,
      title: 'prod 5',
      desc: 'desc 5',
      price: 125
    },
    {
      id: 6,
      title: 'prod 6',
      desc: 'desc 6',
      price: 126
    },
  ]

  return (
    <div>
      {prods.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Products