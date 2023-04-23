import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import ContactPage from './pages/Contact'


// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage title="page" />,
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
