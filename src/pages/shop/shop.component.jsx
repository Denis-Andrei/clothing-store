import React from 'react';
import './shop.styles.scss';

import { Route } from 'react-router-dom';
import Choose from '../../components/choose/choose.component';
import CategoryPage from '../category/category.component';




const ShopPage = ({match}) =>{
    
    return(
    <div className="shop-page">
        
        <Route exact path={match.path} component={Choose} />
        <Route  path={`${match.path}/:categoryId`} component={CategoryPage} />
        
    </div>
    )
}


export default ShopPage;