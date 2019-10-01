import MENS_DATA from './mens-data'; 
import WOMENS_DATA from './womens-data';


const INITIAL_STATE = {
    mensCollection: MENS_DATA,
    womensCollection: WOMENS_DATA,

}

  const shopReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        
        default:  
            return state;
    }
 }
 
 export default shopReducer;