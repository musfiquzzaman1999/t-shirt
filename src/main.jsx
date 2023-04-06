import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Component/Home';
import Main from './Component/Main';
import OrderReview from './Component/OrderReview';
import About from './Component/About';
import  Connect  from './Component/Contact';
import Contact from './Component/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader : ()=> fetch('tshirts.json'),
      },
      {
        path: "/review",
        element: <OrderReview></OrderReview>,
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
     
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
