import React from 'react';
import './category-list.styles.scss';
import { connect } from 'react-redux';

import CategoryCard from '../category-card/category-card.component';
import HeadingSmall from '../heading-small/heading-small.component';
import { selectMensCollectionsOverview, selectWomensCollectionsOverview} from '../../redux/shop/shop.selectors';

const CategoryList = ({mensCollection,womensCollection, match}) =>{ 
   
    return(
        <div>
        <HeadingSmall name={`${match.params.categoryId}`} />
            <div className="category-list">
            
                {    
                    (match.params.categoryId === 'womens')?
                            womensCollection.map(cat =>  <CategoryCard key={cat.id} name={cat.title} image={cat.image}/>)
                    :
                    mensCollection.map(cat =>  <CategoryCard key={cat.id} name={cat.title} image={cat.image} />)
                }
        
        </div>
    </div>
    )
}

const mapStateToProps = state =>({
    mensCollection: selectMensCollectionsOverview(state),
    womensCollection: selectWomensCollectionsOverview(state)
   
})

export default connect(mapStateToProps)(CategoryList);



