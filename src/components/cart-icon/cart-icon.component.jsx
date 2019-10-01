import React from 'react';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as Icon} from '../../assets/svg/cart.svg';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsQuantity } from '../../redux/cart/cart.selectors';

const CartIcon = ({toggleCartHidden, numberOfItems}) =>{
    
    return(
    <div className="cart" onClick={toggleCartHidden}>

        <Icon className='cart-icon'/>
        {
            numberOfItems
            ?
            <span className='item-count'>{numberOfItems}</span>
            :
            <span className='item-count item-count-red'>0</span>
        }
       
    </div>
    )
}

const mapStateToProps = createStructuredSelector({
    numberOfItems: selectCartItemsQuantity
})

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);


