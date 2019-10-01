import React from 'react';
import './newsletter.styles.scss';
import HeadingSmall from '../heading-small/heading-small.component';
import CustomButton from '../custom-button/custom-button.component';



const Newsletter = () =>(
    <div className="newsletter">
        
        <HeadingSmall name={'subscribe to our newsletter'}>
            <div className="form-subscribe">
                <input type="email" placeholder='Enter your email ...'/>
                <CustomButton name={'subscribe'}/>
            </div>
        </HeadingSmall>

    </div>
)

export default Newsletter;