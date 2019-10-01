import React from 'react';
import './custom-button.styles.scss';




const CustomButton = ({name, noBorder, inverted , ...otherProps}) =>{

return(
    
        
        <button  className={`custom-button 
                ${ (noBorder) ? 'no-border' : ''}
                ${ (inverted) ? 'inverted' : ''}
        `} {...otherProps}>
        
            {name.toUpperCase()}
        
        </button>
          
    
)}

export default CustomButton;