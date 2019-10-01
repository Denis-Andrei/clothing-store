import SearchActionTypes from './search.types';

const INITIAL_STATE = {
    inputValue: ''
}

const searchReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case SearchActionTypes.SET_SEARCH_FIELD:
            return{
                ...state,
                inputValue: action.payload
            }    
        default:
            return state;
    }
}

export default searchReducer;