import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Home from './components/Home/index.jsx';
import Products from './components/Products/index.jsx';
import Footer from './components/Footer/index.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error</div>
  },
  {
    path: "/app",
    element: <App />
  },
  {
    path: "/navbar",
    element: <Navbar />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/footer",
    element: <Footer />
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
