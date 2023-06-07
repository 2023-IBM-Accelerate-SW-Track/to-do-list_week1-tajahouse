import React, { Component } from 'react';
import profile_img from '../assets/Taja-Img.jpg';
import "./About.css";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div className='split left'>
          <div className = 'centered'>
            <img 
              className = 'profile_image'
              alt = 'Profile Pic'
              src={profile_img}
              >
            </img>
          </div>
        </div>
      <div className='split right'>
        <div className='centered'>
          <div className='name_title'>Taja House
          </div>
          <div className='brief_description'>
          Software Engineer with 3+ years in multiple programming languages and frameworks. Comfortable in Agile software environments and project teams utilizing skills such as Java, React, MongoDB and others. Current Military Spouse with a background as a computer science and technology educator.
          </div>
        </div>

      </div>
      </div>
    )
  }
}