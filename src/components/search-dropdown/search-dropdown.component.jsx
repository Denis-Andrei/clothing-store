import React from 'react';
import './search-dropdown.styles.scss';
import {connect} from 'react-redux';


import SearchDropdownItem from '../search-dropdown-item/search-dropdown-item.component';
import { selectMensCollectionsOverview, selectWomensCollectionsOverview} from '../../redux/shop/shop.selectors';

const SearchDropdown = ({mensCollection, womensCollection, searchInput}) =>{
   

    let AllMenAndWomenCollection = mensCollection.concat(womensCollection);
    let filteredCollection = AllMenAndWomenCollection.map(item => item.items.filter(i=> i.title.toLowerCase().includes(searchInput.toLowerCase())));
   
    
    return(
        <div className="search-dropdown">
            <div className="search-dropdown-content">

            
            {  
               filteredCollection.map(item=> item.map(item=> <SearchDropdownItem key={item.id} item={item} />))
            }
            </div>

        </div>
    )
}

const mapStateToProps = (state) =>({
    mensCollection: selectMensCollectionsOverview(state),
    womensCollection: selectWomensCollectionsOverview(state),
    searchInput: state.search.inputValue
    
})

export default connect(mapStateToProps)(SearchDropdown); 

