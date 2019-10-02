import React from 'react';
import './sign-up.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import { auth } from 'firebase';
import { createUserProfileDocument } from '../../firebase/firebase.utils';






class SignUp extends React.Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event =>{
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert("passwords don't match")
            return;
        }

        try{
            const {user} =await auth().createUserWithEmailAndPassword(email, password);

           await createUserProfileDocument(user, {displayName});

           this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
           })

        }catch(error){
            console.log(error);
        }
    }

    handleChange = event =>{
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className="sign-up">
        
                <h1 className='register-header'>Register Now</h1>

                <form className='form' onSubmit={this.handleSubmit}>
                    <input type="text" 
                        name='displayName' 
                        value={displayName} 
                        onChange={this.handleChange} 
                        label='Display Name' 
                        required
                        placeholder='Name'
                    />
                    <input type="email" 
                        name='email' 
                        value={email} 
                        onChange={this.handleChange} 
                        label='Email' 
                        required
                        placeholder='Email'
                    />

                    <input type="password" 
                        name='password' 
                        value={password} 
                        onChange={this.handleChange} 
                        label='Password' 
                        required
                        placeholder='Password'
                    />
                    <input type="password" 
                        name='confirmPassword' 
                        value={confirmPassword} 
                        onChange={this.handleChange} 
                        label='Confirm Password'
                        required
                        placeholder='Password'
                    />
                    {/* <button type='submit'>Register</button> */}
                    <CustomButton type='submit' name={'Register'} />
                </form>
        
                
        
                
            </div>
        )
    }
   
}


export default SignUp;