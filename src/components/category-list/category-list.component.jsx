import React from 'react';
import './category-list.styles.scss';
import { connect } from 'react-redux';

import CategoryCard from '../category-card/category-card.component';
import HeadingSmall from '../heading-small/heading-small.component';
import { selectMensCollectionsOverview, selectWomensCollectionsOverview} from '../../redux/shop/shop.selectors';

const CategoryList = ({mensCollection,womensCollection, match}) =>{ 
    let data;
    if(match.params.categoryId === 'womens'){
         data = womensCollection;
    }else if(match.params.categoryId === 'mens'){
         data = mensCollection;
    }

    return(
        <div>
        <HeadingSmall name={`${match.params.categoryId}`} />
            <div className="category-list">
            
                {
                    data
                    ?
                        data.map(cat =>  <CategoryCard key={cat.id} name={cat.title} image={cat.image}/>)
                    :
                        ''
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



