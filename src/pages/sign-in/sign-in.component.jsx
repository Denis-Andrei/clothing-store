import React from 'react';
import './sign-in.styles.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import HeadingSmall from '../../components/heading-small/heading-small.component';
import SignUp from '../../components/sign-up/sign-up.component';





const SignInPage = () =>(
    
    <div className="sign-in-page">
        <HeadingSmall name={'Sign in'} />

        <div className="sign-in-container">
            <SignIn />
            <SignUp />
        </div>
        
    </div>
)



export default SignInPage;