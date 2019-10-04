import React from 'react';
import './latest-arrivals.styles.scss';
import HeadingSmall from '../heading-small/heading-small.component';
import CollectionItem from '../collection-item/collection-item.component';

import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import{ selectMensCollectionsOverview, selectWomensCollectionsOverview} from '../../redux/shop/shop.selectors';





const LatestArrivals = ({mens, womens}) =>{
    
    const data = mens.concat(womens);
    

    return(
    <div className="latest-arrivals">
        
        <HeadingSmall name={'latest arrivals'}/>
            <div className="items">
                    {
                    data.map(item=> <CollectionItem   key={item.items[item.items.length-1].id} item={item.items[item.items.length-1]} /> )
                    }
            </div>
    </div>
)}


const mapStateToProps = createStructuredSelector({
    mens: selectMensCollectionsOverview,
    womens: selectWomensCollectionsOverview
})

export default connect(mapStateToProps)(LatestArrivals);