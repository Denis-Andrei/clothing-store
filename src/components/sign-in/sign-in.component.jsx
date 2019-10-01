import React from 'react';
import './sign-in.styles.scss';
import CustomButton from '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';




class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email: '',
            password: ''
        };
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        }catch(error){
            console.log(error);
        }

        
    }

    handleChange = event =>{
        const {value, name} = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">

                <h1>Already have an account?</h1>

                <form className='form' onSubmit={this.handleSubmit}>
                    <input
                        name='email' 
                        type="email"
                        onChange={this.handleChange}
                        value={this.state.email} 
                        placeholder='Email'
                    />
                    <input 
                        name='password'
                        type='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        placeholder='Password'
                    />
                    
                    
                        <CustomButton type='submit' name={'sign in'} />
                        
                    <p>Don't have an account? <a href=''>Sign Up</a></p>
                </form>
                <CustomButton onClick={signInWithGoogle} name={'sign in with Google'}/> 

            </div>
        )
    }
    

}
    




export default SignIn;