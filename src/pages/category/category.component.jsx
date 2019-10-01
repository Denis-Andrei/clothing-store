import React from 'react';
import './category.styles.scss';


import CategoryList from '../../components/category-list/category-list.component';

import { Route } from 'react-router-dom';
import CollectionPage from '../collection/collection.component';


const CategoryPage = ({match}) =>{
    
    return(
    <div className="category-page">
        
        
        <Route  exact path={`${match.path}`} component={CategoryList} />
        <Route   path={`${match.path}/:collectionId`} component={CollectionPage} />
        
        
    </div>
    )
}

export default CategoryPage;