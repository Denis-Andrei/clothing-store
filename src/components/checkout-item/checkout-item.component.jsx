import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux';
import {addItem,clearItem, removeItem} from '../../redux/cart/cart.actions';


const CheckoutItem = ({item, clearItem, addItem, removeItem}) =>{

    const {title, imageName, price, quantity} = item;
    
    return(
        <div className="checkout-item">
            
            
            <div className="item">
                <img className='checkout-image' src={require(`../../assets/images/collections/${imageName}.jpg`)} alt={imageName} />

                <div className="item-info">
                    <h3 className='item-title'>{title.toUpperCase()}</h3>
                    <p className='item-price'>{quantity} x &#36;{price}</p>  
                </div>
            </div> 
            
            <div className="item-quantity">
                <div onClick={ () => removeItem(item)} className="sign-minus">&#8722;</div>
                    <span className="quantity">{quantity}</span>
                <div onClick={ () => addItem(item)} className="sign-plus">&#43;</div>
                
            </div>

            <div className="total-price">
                <p className="">&#36;{price * quantity}</p>
            </div>

            <p onClick={() => clearItem(item)} className='x-mark'>&#10005;</p>
            

        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item=> dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);