import React from 'react';
import Waitress from '../images/Waitress.jpg';
import '../SCSS/_about.scss';


function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <img className="waitress" src={Waitress} alt="Waitress" width="500" height="350" />
        <p>
          Order-UPP is a demo application we hope to incorporate for the waitress on the go. Assigned with an Order_id, simply add the order for the customer and wait.
        </p>
      </div>
    </div>
  );
}

export default About;