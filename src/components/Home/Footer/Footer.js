import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-bg">
            <div style={{ height: '50px' }}></div>
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <h2 className="footer-h2 mb-4">Let's us handle your <br />problem and Report. </h2>
                    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo a <br /> pariatur officia id fuga reiciendis illum necessitatibus.</p>
                </div>
                <div className="col-md-6">
                    <input className="footer-input" type="email" name="" id="" placeholder="Your email address" />
                    <br />
                    <br />
                    <input className="footer-input" type="text" placeholder="your name / company name" />
                    <br />
                    <br />
                    <input className="footer-message" type="text" name="" id="" placeholder="your message" />
                    <br /><br />
                    <button className="send-btn">Send</button>
                </div>
            </div>
            <footer>
                <p className="copyright-notice"><small>© Ashik Zaman All Rights Reserved {new Date().getFullYear()}</small></p>
                <div style={{height:'30px'}}></div>
            </footer>
        </div>

    );
};

export default Footer;