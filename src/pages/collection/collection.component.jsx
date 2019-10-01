import React from 'react';
import './collection.styles.scss';

import CollectionItems from '../../components/collection-items/collection-items.component';
import HeadingSmall from '../../components/heading-small/heading-small.component';





const CollectionPage = ({match}) =>{
    
    return(
    <div className="collection-page">


        <HeadingSmall name={match.params.collectionId} />
        <CollectionItems />
        
        
    </div>
    )
}

export default CollectionPage;