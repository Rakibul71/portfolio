import React from "react";
import emailjs from "emailjs-com";

const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2uc7i5l",
        "template_cxyatxa",
        e.target,
        "user_iDHHLs6cBnzE744ga9yiT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="contactMain">
      <h1>Contact Form</h1>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <br />
        <label>Name : </label>
        <br />
        <input type="text" name="user_name" />
        <br />
        <label>Email :</label>
        <br />
        <input type="email" name="user_email" />
        <br />
        <label>Message :</label>
        <br />
        <textarea name="message" />
        <br />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Email;
