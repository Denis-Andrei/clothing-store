import SearchActionTypes from './search.types';

export const setSearchField = (text) =>({
    type: SearchActionTypes.SET_SEARCH_FIELD,
    payload: text
})

export const toggleSearchHidden = () =>({
    type: SearchActionTypes.TOGGLE_SEARCH_HIDDEN
})