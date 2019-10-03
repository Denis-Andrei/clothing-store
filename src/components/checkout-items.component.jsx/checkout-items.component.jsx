import React from 'react';
import './checkout-items.styles.scss';
import {connect} from 'react-redux';
import CheckoutItem from '../checkout-item/checkout-item.component';
import { createStructuredSelector } from 'reselect';
import {selectCartItems, selectCartTotalPrice} from '../../redux/cart/cart.selectors';

const CheckoutItems = ({cartItems, totalPrice}) =>{
    
    return(
        <div className="checkout-items">
            
            {
                 cartItems.map(item=> <CheckoutItem key={item.id} item={item} />)
            }
           
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    totalPrice: selectCartTotalPrice,
    cartItems: selectCartItems
})
    


export default connect(mapStateToProps)(CheckoutItems);