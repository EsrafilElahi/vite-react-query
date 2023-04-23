import React, { useEffect } from 'react';
import { useBeforeUnload, useNavigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductsPage from './pages/Products'
import ProductDetailsPage from './pages/ProductDetail'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'


// Routes
const router = createBrowserRouter([
  {
    path: "/products",
    element: <ProductsPage title="page" />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailsPage />,
    // with this data loaded before rendering
    loader: async ({ params }) => {
      return params
    },
  },
  {
    path: "/about",
    element: <AboutPage title="page" />,
  },
  {
    path: "/contact",
    element: <ContactPage title="page" />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
