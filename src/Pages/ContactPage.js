import React from "react";
import ContactItem from "../Components/ContactItem";
import Title from "../Components/Title";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Email from "../Components/Email";

const ContactPage = () => {
  return (
    <div>
      <div className="title">
        <Title title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d3637.8232431562346!2d89.91296520077663!3d24.24796017542584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x39fdfbbdb6ccdcef%3A0x3c809fe7dd0bcc9b!2sThanapara%20General%20Store%2C%20Tangail!3m2!1d24.2445746!2d89.9154836!4m5!1s0x39fdfbe3d271b363%3A0x8a0d420f347f7c7c!2sTangail!3m2!1d24.251345099999998!2d89.9167104!5e0!3m2!1sen!2sbd!4v1619947997490!5m2!1sen!2sbd"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+8801793010043"}
            text2={"+8801929910838"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"rakibulislam202019@gmail.com"}
            text2={""}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Block-e, Thana para, Tangail."}
            text2={"Bangladesh"}
            title={"Address"}
          />
        </div>
      </div>
      <div className="emailDiv">{/* <Email></Email> */}</div>
    </div>
  );
};

export default ContactPage;
