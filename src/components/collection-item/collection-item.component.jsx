import React from 'react';
import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';
import {connect} from 'react-redux';

const CollectionItem = ({item, addItem}) =>{
    const { title, price, imageName} = item;
    
    return(
   
        <div  className="collection-item">
            <img className='collection-image' src={require(`../../assets/images/collections/${imageName}.jpg`)} alt={imageName}/> 
            <h3 className='item-title'>{title.toUpperCase()}</h3>
            <p className='item-price'>${price}</p>   

            <CustomButton onClick={ () => addItem(item)} name={'ADD TO CART'} noBorder />
            
        </div>
   
    
)}

const mapDispatchToProps = dispatch => ({
    addItem: (item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);