import React, { useLayoutEffect } from 'react'
import { useBeforeUnload, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";


const Products = (props) => {
  const { title } = props


  return (
    <div>Products {title}</div>
  )
}

export default Products