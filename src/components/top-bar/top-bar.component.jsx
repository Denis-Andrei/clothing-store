import React from 'react';
import './top-bar.styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import SearchDropdown from '../search-dropdown/search-dropdown.component';
import { setSearchField } from '../../redux/search/search.actions';
import {auth} from '../../firebase/firebase.utils';


const TopBar = ({toggleSearchHidden, inputValue, searchChange, onSearch, currentUser}) =>{
    console.log(currentUser);
    return(
    <div className="top-bar">
        <div className="search-box">
            <input className='search-input' type="search" placeholder='Search ...'   onBlur={toggleSearchHidden} onChange={searchChange}/>

           { !inputValue? null:
            <SearchDropdown />
            
            }
        </div>
        {
            
            currentUser
            ?
            <div className='link' onClick={ () => auth.signOut()}>{currentUser.displayName},<span className='link' onClick={ () => auth.signOut()}></span>SIGN OUT</div>
            :
            <Link className='link' to='/sign-in'>Sign In</Link>
        }
        
    </div>
    )
}

const mapStateToProps = ({search: {inputValue}}) =>({
    inputValue
})

const mapDispatchToProps = dispatch =>({
    searchChange: (event) => dispatch(setSearchField(event.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(TopBar);

