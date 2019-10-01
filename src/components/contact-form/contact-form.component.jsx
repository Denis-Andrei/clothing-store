import React from 'react';
import './contact-form.styles.scss';
import CustomButton from '../custom-button/custom-button.component';


import Facebook from '../../assets/social-icons/facebook.svg'
import Twitter from '../../assets/social-icons/twitter.svg'
import Instagram from '../../assets/social-icons/instagram.svg'


const ContactForm = () =>(
    <div className="contact">

        <div className="contact-form">
            <h1 className="contact-header">SEND US A MESSAGE</h1>

            <form className='form' action="">
                <input type="text" placeholder='Your name ...'/>
                <input type="email" placeholder='Your email ...'/>
                <input type="tel" placeholder='Your phone number ...'/>
                <textarea className='text-box'  cols="30" rows="10" placeholder='Your message ...'></textarea>
            </form>

            <CustomButton name={'sumbit'}/>
        </div>


        <div className="contact-info">
            <h1 className="info-header">CONTACT INFO</h1>

                <div className="info">
                    <h3>Phone: <span className="phone">07766327552</span></h3>
                    <h3>Email: <span className="email">store@store.com</span></h3>
                    <h3>Address: <span className="address">80 Colplow Street, Birmingham, UK</span></h3>
                </div>

                <div className="social-icons">
                    <a href='https://facebook.com' target='_blank' rel="noopener noreferrer"><img className='social-icon' src={Facebook} alt=""/></a>
                    <a href='https://twitter.com' target='_blank' rel="noopener noreferrer"><img className='social-icon' src={Twitter} alt=""/></a>
                    <a href='https://instagram.com' target='_blank' rel="noopener noreferrer"><img className='social-icon' src={Instagram} alt=""/></a>
                </div>
        </div>

    </div>
    
    
)



export default ContactForm;



