import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import ContactForm from '../ContactForm/ContactForm';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-area">
            <Menubar />
            <div className="contact-container">
                <h3><span>Get</span> In Touch , </h3>
                <div className="touch-info">
                    <div className="touch-data">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                        <h4>Address</h4>
                        <p>Dhaka-1246 Bangladesh</p>
                    </div> 
                    </div>
                    <div className="touch-data">
                    <i className="fas fa-at"></i>
                    <div>
                        <h4>Email</h4>
                        <p>dev.samiulhowlader@gmail.com</p>
                    </div>
                    </div>
                    <div className="touch-data">
                    <i className="fas fa-phone-alt"></i>
                    <div>
                        <h4>Phone</h4>
                        <p>Ban - (+880) 173 5006 481</p>
                    </div>
                    </div>
                    <div className="touch-data">
                    <i className="fab fa-github"></i>
                    <div>
                        <h4>Github</h4>
                        <p><a href="https://github.com/simplysamiul" target="_blank">github.com/simplysamiul</a></p>
                    </div>
                    </div>  
                </div>
                <h3><span>Contact</span> Form</h3>
                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;