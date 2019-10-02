import React from 'react';
import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import HeadingSmall from '../../components/heading-small/heading-small.component';






const SignInPage = () =>(
    
    <div className="sign-in-page">
        <HeadingSmall name={'Sign in'} />

        <div className="sign-in-container">
            <SignIn />
        </div>
        
    </div>
)



export default SignInPage;