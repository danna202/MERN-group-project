import React from 'react';
import Sign from '../images/sign.jpg';
import '../SCSS/_home.scss';


function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <img className="sign" src={Sign} alt="sign" />
      </div>
    </div>
  );
}

export default Home;