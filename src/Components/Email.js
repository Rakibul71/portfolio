import React from 'react';
import emailjs from 'emailjs-com';
// import './ContactUs.css';

const Email = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_2uc7i5l', 'template_cxyatxa', e.target, 'user_iDHHLs6cBnzE744ga9yiT')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <br/>
            <label>Email</label>
            <input type="email" name="user_email" />
            <br/>
            <label>Message</label>
            <textarea name="message" />
            <br/>
            <input type="submit" value="Send" />
        </form>
    );
};

export default Email;