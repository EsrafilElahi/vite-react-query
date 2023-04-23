import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from "react-router-dom";



// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Home Page</div>,
  },
  {
    path: "/about",
    element: <div>About Us Page</div>,
  },
  {
    path: "/contact",
    element: <div>Contact Us Page</div>,
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
