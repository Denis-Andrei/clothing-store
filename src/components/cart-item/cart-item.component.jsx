import React from 'react';
import './cart-item.styles.scss';
import {connect} from 'react-redux';
import {clearItem} from '../../redux/cart/cart.actions';

const CartItem = ({item, clearItem}) =>{
    const {title, imageName, price, quantity} = item;
    return(
        <div className="cart-item">
            <img className='search-image' src={require(`../../assets/images/collections/${imageName}.jpg`)} alt={imageName} />
            
            <div className="item-info">
                <h3 className='item-title'>{title}</h3>
                <p className='item-price'>{quantity} x ${price}</p>  
            </div> 
            
            <p onClick={() => clearItem(item)} className='x-mark'>&#10005;</p>
            

        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    clearItem: item => dispatch(clearItem(item))
})

export default connect(null, mapDispatchToProps)(CartItem);