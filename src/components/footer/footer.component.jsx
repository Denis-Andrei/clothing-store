import React from 'react';
import './footer.styles.scss';
import { Link } from 'react-router-dom';



const Footer = () =>(
    <div className="footer" >
        
        <div className="footer-box">

            <div className="footer-customers">
                <h4 className='footer-h4'>Customers Care</h4>
                <Link className='option' to='/'>Contact Us</Link>
                <Link className='option' to='/'>Careers</Link>
                <Link className='option' to='/'>Shipping</Link>
                <Link className='option' to='/'>Returns</Link>
                <Link className='option' to='/'>Privacy & Policy</Link>
            </div>

            <div className="footer-social-icons">
                <h4 className='footer-h4'>Social Media</h4>
                <Link className='option' to='/'>Twitter</Link>
                <Link className='option' to='/'>Facebook</Link>
                <Link className='option' to='/'>YouTube</Link>
                <Link className='option' to='/'>Instagram</Link>
            </div>

            <div className="footer-quick-links">
                <h4 className='footer-h4'>Quick Links</h4>
                <Link className='option' to='/shop/mens'>Mens</Link>
                <Link className='option' to='/shop/womens'>Womens</Link>
                <Link className='option' to='/shop/womens/accessories'>Accessories</Link>
                <Link className='option' to='/sign-in'>Sign In</Link>
                
            </div>
        </div>

        <p className='footer-author'>Copyright © 2019 Clothing Shop</p>
          
    </div>
)

export default Footer;