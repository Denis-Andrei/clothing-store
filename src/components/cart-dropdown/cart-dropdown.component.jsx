import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({cartItems, history, dispatch}) =>{
    console.log(cartItems);
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length 
            ?
            cartItems.map(item => <CartItem key={item.id} item={item} /> )
            :
            <p className='empty-message'>empty cart</p>
        }
        
        </div>
        {
            cartItems.length
            ?
                <CustomButton name={'Go to checkout'} onClick={() =>{
                    
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                    }
                }
                />
            :
            ''
        }
    </div>
    )
}

const mapStateToProps = state =>({
    cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));


