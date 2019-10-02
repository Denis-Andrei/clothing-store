import React from 'react';
import './search-dropdown.styles.scss';
import {connect} from 'react-redux';


import SearchDropdownItem from '../search-dropdown-item/search-dropdown-item.component';
import { selectMensCollectionsOverview, selectWomensCollectionsOverview} from '../../redux/shop/shop.selectors';
import { setSearchField, toggleSearchHidden } from '../../redux/search/search.actions';

const SearchDropdown = ({mensCollection, womensCollection, searchInput, searchChange, toggleSearchHidden}) =>{
   

    let AllMenAndWomenCollection = mensCollection.concat(womensCollection);
    let filteredCollection = AllMenAndWomenCollection.map(item => item.items.filter(i=> i.title.toLowerCase().includes(searchInput.toLowerCase())));
    
    
    return(
        <div className="search-dropdown">
            <input className='search-input' type="search" placeholder='Search ...'  onChange={searchChange} autoFocus />
            <span className='close-icon' onClick={toggleSearchHidden}>&#10006;</span>

            {
                searchInput
            ?
            <div className="search-dropdown-content">
            
            
            {  
               filteredCollection.map(item=> item.map(item=> <SearchDropdownItem toggle={toggleSearchHidden} key={item.id} item={item} />))
            
            }
            </div>
            :
            ''}
        </div>
    )
}

const mapStateToProps = (state) =>({
    mensCollection: selectMensCollectionsOverview(state),
    womensCollection: selectWomensCollectionsOverview(state),
    searchInput: state.search.inputValue
    
})

const mapDispatchToProps = dispatch =>({
    searchChange: (event) => dispatch(setSearchField(event.target.value)),
    toggleSearchHidden: () => dispatch(toggleSearchHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown); 

