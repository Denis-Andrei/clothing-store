import SearchActionTypes from './search.types';

const INITIAL_STATE = {
    inputValue: '',
    hidden: true
}

const searchReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SearchActionTypes.SET_SEARCH_FIELD:
            return{
                ...state,
                inputValue: action.payload
            }
        case SearchActionTypes.TOGGLE_SEARCH_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden,
                inputValue: ''
            }       
        default:
            return state;
    }
}

export default searchReducer;