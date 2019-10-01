import React from 'react';
import './search-dropdown-item.styles.scss';
import {withRouter} from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.actions';

const SearchDropdownItem = ({item, history, addItem}) =>{
    const {title, imageName , price} = item
    return(
        <div className="search-dropdown-item" onClick={()=>history.push(`/shop/mens/jeans/${title}`)}>
            <img className='search-image' src={require(`../../assets/images/collections/${imageName}.jpg`)} alt={imageName} />
            
            <div className="item-info">
                <h3 className='item-title'>{title.toUpperCase()}</h3>
                <p className='item-price'>&#36;{price}</p>  
            </div> 
            
            <CustomButton onClick={() => addItem(item)} name={'ADD TO CART'}  />

        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null,mapDispatchToProps)(SearchDropdownItem));