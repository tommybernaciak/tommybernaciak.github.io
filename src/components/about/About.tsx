import React from 'react';
import './../App.css';

const About: React.FC = () => {
  return (
    <div className="content-box">
      <div className="content-heading">About</div>
      <p>Hi, my name is Tommy and I am a software engineer and a web developer.</p>
      <p>I'm proud to have worked with some awesome companies:</p>

      <div className="button-group">
        <div className="button" onClick={() => window.open('https://www.binarapps.com/')}>
          BINARAPPS
        </div>
        <div className="button" onClick={() => window.open('https://www.stratajet.com/')}>
          STRATAJET
        </div>
        <div className="button" onClick={() => window.open('https://www.gabi.com/')}>
          GABI
        </div>
      </div>
      <div className="button-group">
        <div className="button" onClick={() => window.open('https://www.abb.com/')}>
          ABB
        </div>
        <div className="button" onClick={() => window.open('https://www.biotechnologia.pl/')}>
          BIO-TECH MEDIA
        </div>
        <div className="button" onClick={() => window.open('http://www.lokoom.eu/')}>
          LOKOOM
        </div>
      </div>

      <div className="content-heading">Contact</div>
      <div className="contact card">
        <p>tommybernaciak.com Tomasz Bernaciak</p>
        <p>contact@tommybernaciak.com</p>
        <p>
          <a href="tel:+48666393797">+48 666 393 797</a>
        </p>
      </div>
    </div>
  );
};

export default About;
