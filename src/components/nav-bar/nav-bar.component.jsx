import React from 'react';
import './nav-bar.styles.scss';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


const NavBar = ({hidden}) =>(
    <div className="nav-bar">
        <Link className="logo" to='/'>
            LOGO
        </Link>

        <div className="options">
            
            <Link className="option" to='/shop/mens'>MEN</Link>
            <Link className="option" to='/shop/womens'>WOMEN</Link>
            {/* <Link className="option" to='/shop/womens/accessories'>ACCESSORIES</Link> */}
            <CartIcon />
 
        </div>
        {hidden ? null : <CartDropdown />}

    </div>
)

const mapStateToProps = ({cart: {hidden}}) => ({
    hidden
})

export default connect(mapStateToProps)(NavBar);