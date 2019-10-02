import React from 'react';
import './top-bar.styles.scss';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import SearchDropdown from '../search-dropdown/search-dropdown.component';

import {auth} from '../../firebase/firebase.utils';
import { toggleSearchHidden } from '../../redux/search/search.actions';

import {FaSearch} from 'react-icons/fa'
import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'

const TopBar = ({toggleSearchHidden, inputValue, searchChange, onSearch, currentUser, hidden}) =>{
    
    return(
    <div className="top-bar">
        <div className="social-icons">
            <a href='https://www.facebook.com' target='_blank' rel="noopener noreferrer"><FaFacebookSquare className='social-icon'  /></a>
            <a href='https://www.twitter.com' target='_blank' rel="noopener noreferrer"><FaTwitter className='social-icon' /></a>
            <a href='https://www.instagram.com' target='_blank' rel="noopener noreferrer"><FaInstagram className='social-icon' /></a>
        </div>
        
        <p className='search-icon' onClick={toggleSearchHidden}><FaSearch /></p> 

        { 
            hidden
            ? 
            null
            :
            <SearchDropdown />
        
        } 
        
        {
            
            currentUser
            ?
            <div className='link sign-up-button' onClick={ () => auth.signOut()}>{currentUser.displayName},<span className='link' onClick={ () => auth.signOut()}></span>SIGN OUT</div>
            :
            <div className="buttons">
                <Link className='link' to='/sign-in'>Sign in</Link>
                <Link className='link sign-up-button' to='/sign-up'>Sign up</Link>
            </div>
        }
        
    </div>
    )
}

const mapStateToProps = ({search: { hidden}}) =>({
    hidden
})

const mapDispatchToProps = dispatch =>({
    toggleSearchHidden: () => dispatch(toggleSearchHidden())
})


export default connect(mapStateToProps,mapDispatchToProps)(TopBar);

