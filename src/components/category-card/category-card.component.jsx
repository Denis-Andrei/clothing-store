import React from 'react';
import './category-card.styles.scss';

import {Link, withRouter} from 'react-router-dom';

const CategoryCard = ({name, image, match}) =>{
    

    return(
        <div className="category-card"
            
        
        >
            <Link to={`${match.url}/${name}`}>
                <img className='category-image' src={require(`../../assets/images/collections/${image}.jpg`)} alt=""/> 
                <h3 className='item-title'>{name.toUpperCase()}</h3> 
            </Link>
        </div>
   
   )
}



export default withRouter(CategoryCard);