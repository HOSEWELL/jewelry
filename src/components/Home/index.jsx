import React from "react";
import '../../index.css'


const Home=()=>{
    return (
        <>
        <div className="home">
            <div >
                <span>
                    Experience the <br />Brilliance of <br />Crftsmanship
                </span>
                <br /><br />
                <span>
                    Discover a world where beauty meets craftsmanship, where <br />
                    every piece of jewelry tells a story.
                </span>
                <br />
                <br /><br />
                <button className="success">    All products </button>
            </div>
            <div style={{border: "1px solid black", width:"50%", display:"flex"}}>
                <img style={{width:"30%", marginRight:"20px", borderRadius:"0px 0px 40px 40px ", height:"70%"}} src="https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D" alt="" />
                <img style={{width:"30%", borderRadius:"40px 40px 0px 0px ", height:"70%", marginBottom:"0px"}} src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        </div>  
        
        </>
    )
}

export default Home