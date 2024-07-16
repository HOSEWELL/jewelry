import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid" style={{backgroundColor:"#A5A5A5", margin:"0", padding:"10px"}}>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">

        <li className="nav-item" style={{marginLeft:"20px"}}>
         <Link style={{textDecoration:"none", color:"#967f20", fontWeight:"bold"}} to="/app" className="nav-brand">Home</Link>
        </li>
        <li className="nav-item" style={{marginLeft:"20px"}}>
         <Link style={{textDecoration:"none", color:"#967f20", fontWeight:"bold"}} to="/products" className="nav-brand">Products</Link>
        </li>
       
        <li className="nav-item" style={{marginLeft:"20px"}}>
         <Link style={{textDecoration:"none", color:"#967f20", fontWeight:"bold"}} to="/footer" className="nav-brand">About Us</Link>
        </li>
      
      </ul>
      

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search....." aria-label="Search" style={{borderRadius:"60px"}}/>
      </form>

      <form className="d-flex" role="search">
      <i style={{backgroundColor:"#967f20", padding:"10px", color:"white", borderRadius:"60px"}} class="fa-solid fa-cart-shopping"></i>
      </form>
      
      <form className="d-flex" role="search">
      <i style={{backgroundColor:"#967f20", padding:"10px", color:"white", borderRadius:"60px", marginLeft:"20px"}} class="fa-solid fa-user"></i>
      </form>


    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar
       