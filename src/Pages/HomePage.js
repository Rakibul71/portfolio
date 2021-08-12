import React from "react";
import { FaGithub, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> Rakibull Islam</span>
        </h1>
        <p className="h-sub-text">
          {" "}
          I'm Full Stack a web developer. A self-motivated and enthusiastic web
          developer with a deep interest in JavaScript. I can create modern &
          responsive web sites/applications with high quality and professional
          look. As every website/application that represents a business plays a
          very important role in its growth. That's why I treat every website
          according to its nature
        </p>

        <div className="icons">
          <a
            href="https://github.com/Rakibul71"
            className="icon-holder"
            target="_blank"
          >
            <FaGithub className="icon gh"></FaGithub>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100009149015037"
            className="icon-holder"
            target="_blank"
          >
            <FaFacebookF className="icon fb"></FaFacebookF>
          </a>
          <a
            href="https://www.linkedin.com/in/rakibul-islam71/"
            className="icon-holder"
            target="_blank"
          >
            <FaLinkedin className="icon ln"></FaLinkedin>
          </a>
          <br />
          <div>
            <a
              href="https://drive.google.com/file/d/1SIwn8JZHPuht_NLogEKOrZ90TKdsIE-q/view"
              target="_blank"
            >
              <button className="btn">Download Cv</button>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
