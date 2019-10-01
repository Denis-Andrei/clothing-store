import React from 'react';
import './contact.styles.scss';
import HeadingSmall from '../../components/heading-small/heading-small.component';
import ContactForm from '../../components/contact-form/contact-form.component';

const ContactPage = () =>(
    <div className="contact-page">

        <HeadingSmall name={'contact'} />
        <ContactForm />
    </div>
)

export default ContactPage;