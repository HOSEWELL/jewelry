import React from "react";
import './index.css'

const Footer = () => {
    return (
        <>
        <div className="footer">
            <div>
                <div>
                    <h4 >Where about</h4>
                    <span>4517 Washington Ave. Manchester. <br />Kentucky 39495</span>
                </div>
                <div>
                    <h4>Contact</h4>
                    <span>(808)555-0111</span>
                </div>
                <div>
                    <h4>Mailbox</h4>
                    <span>hello@lavishglamour.io</span>
                </div>
            </div>
            <div>
                <h4>Pages</h4>
                <li>About us</li>
                <li>Categories</li>
                <li>Shop</li>
                <li>Contact us</li>
            </div>
            <div>
                <h4>Resource</h4>
                <li>FAQ</li>
                <li>Reviews</li>
                <li>Blog</li>
                <li>Return Policy</li>
            </div>
            <div>
                <h4>Utilities</h4>
                <li>Style Guide</li>
                <li>Error 404</li>
                <li>Licensing</li>
                <li>Changelog</li>
            </div>
            <div>
                <h4>Subscribe</h4>
                <input type="text" placeholder="Enter your name" />
                <br />
                <input type="text" placeholder="Enter your email" />
                <br />
                <button>Submit</button>
            </div>
        </div>
        </>
    );
};
export default Footer;