import SearchActionTypes from './search.types';

export const setSearchField = (text) =>({
    type: SearchActionTypes.SET_SEARCH_FIELD,
    payload: text
})