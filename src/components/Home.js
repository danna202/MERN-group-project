import React from 'react';
import backgroundImage from '../images/menu-background.jpg';
import Sign from '../images/sign.jpg'

function Home() {
    return (
       
            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
        
               
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
                borderRadius: '10px',
                
              }}>
                <img className="sign" src={Sign} alt="sign" width="400" height="500" />
               
              </div>
            </div>
          )
        }


export default Home;