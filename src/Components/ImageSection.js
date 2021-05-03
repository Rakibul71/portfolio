import React from 'react';
// import about from '../img/about.jpg';
import about from '../img/about.jpg';

const ImageSection = () => {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>I am<span> Rakibull Islam</span></h4>
                <p className="about-text">
                I'm Full Stack a web developer. A self-motivated and enthusiastic web developer with a deep interest in JavaScript.
                 I can create modern & responsive web sites/applications with high quality and professional look. As every website/application that represents a business plays a very important role in its growth.
                 That's why I treat every website according to its nature
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Countries</p>
                    </div>
                    <div className="right-section">
                        <p>: Rakibull Islam</p>
                        <p>: 23</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla, English ,Hindi</p>
                        <p>: Thanapara,Dhaka,Bangladesh</p>
                        <p>: Bangladesh</p>
                    </div>
                </div>
                <a href="https://drive.google.com/file/d/1SIwn8JZHPuht_NLogEKOrZ90TKdsIE-q/view" target="_blank">
                    <button className="btn">Download Cv</button>
                </a>
            </div>
        </div>
    );
};

export default ImageSection;