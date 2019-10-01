import React from 'react';
import './collection-items.styles.scss';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom'
import CollectionItem from '../collection-item/collection-item.component';




const CollectionItems = ({mensCollection,womensCollection, match}) =>{
    let obj = (match.params.categoryId === 'mens') ? (mensCollection[`${match.params.collectionId}`]) : (womensCollection[`${match.params.collectionId}`]);
    return(
    <div className="collection-items">
        
       {       
            
           obj.items.map( item => <CollectionItem key={item.id} item={item} />)  
          
       }
       
    </div>
    
    ) 
}

const mapStateToProps = state =>({
    mensCollection: state.shop.mensCollection,
    womensCollection: state.shop.womensCollection
})

export default withRouter(connect(mapStateToProps)(CollectionItems));



