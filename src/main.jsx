import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Home from './components/Home/index.jsx';
import Footer from './components/Footer/index.jsx';
import Logos from './components/logos/index.jsx';
import ProductContainer from './components/products/indexcontainer.jsx';
import ProductProfile from './components/products/productProfile.jsx';
import Register from './components/Signing/register.jsx';
import Login from './components/Signing/login.jsx';


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
    path: "logos",
    element: <Logos />
  },
  {
    path: "/products",
    element: <ProductContainer />
  },
  {
    path: "/productprofile",
    element: <ProductProfile />
  },
  {
    path: "/footer",
    element: <Footer />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login/>
  }

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
