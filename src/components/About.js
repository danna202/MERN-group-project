import React from 'react'
import Waitress from '../images/Waitress.jpg'
import backgroundImage from '../images/menu-background.jpg'

function About() {
  return (
    <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <div style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        maxWidth: '800px',
        borderRadius: '10px'
      }}>
        <img className="waitress" src={Waitress} alt="Waitress" width="500" height="350" />
        <p style={{ color: 'black', marginLeft: '20px', fontSize: '20px', lineHeight: '30px' }}>
         Order-UPP is a demo we hope to incorporate for the waitress on the go. Assigned with an Order_id, simply add the order for the customer 
         and wait. 
        </p>
      </div>
    </div>
  )
}

export default About