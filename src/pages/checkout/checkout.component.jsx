import React from 'react';
import './checkout.styles.scss';

import HeadingSmall from '../../components/heading-small/heading-small.component';
import CheckoutSummary from '../../components/checkout-summary/checkout-summary.component';
import CheckoutItems from '../../components/checkout-items.component.jsx/checkout-items.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsQuantity, selectCartTotalPrice, selectCartItems } from '../../redux/cart/cart.selectors';
import {Link } from 'react-router-dom';
import LatestArrivals from '../../components/latest-arrivals/latest-arrivals.component';
import StripeCheckoutButton from '../../components/stripe-btn/stripe-btn.component';

const CheckoutPage = ({itemQuantity, totalPrice, cartItems}) =>{
    
    return(
    <div className="checkout-page">

        <HeadingSmall name={'checkout'} />


        
            {
                (cartItems.length > 0) 
                ? 
                <div className="checkout-container">
                    <CheckoutItems />

                    <div className="pay-info">
                        <CheckoutSummary quantity={itemQuantity} price={totalPrice}/>
                        <StripeCheckoutButton price={totalPrice} />
                        <div className="test-info">
                            <h3>Test the payment method: </h3>          
                            
                            <p>4242 4242 4242 4242</p> 
                            <p>Exp: 01/20</p>
                            <p>CVV: 123</p>
                                
                        </div>
                    </div>
                </div>
                :
                <div className='checkout-message'>
                    <h3 >Your cart is empty</h3>
                    <Link to='/shop'><CustomButton name={'shop now'}/></Link>
                    
                </div>
            }

        <LatestArrivals />
        
        
        
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    itemQuantity: selectCartItemsQuantity,
    totalPrice: selectCartTotalPrice,
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(CheckoutPage);