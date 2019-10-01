import React from 'react';
import './heading-small.styles.scss';




const HeadingSmall = ({name, children}) =>(
    <div className="heading-small" >
        <h1 className='heading-h1'>{name.toUpperCase()}</h1>
        {children}
    </div>
)

export default HeadingSmall;