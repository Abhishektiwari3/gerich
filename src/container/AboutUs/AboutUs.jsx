import React from 'react';

import './AboutUs.css';

import { images } from '../../constants'

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
      </div> 
    
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__image' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus reiciendis, ut ipsam in excepturi. Distinctio veniam qui hic amet corporis quaerat deleniti.</p>
        <button type='button' className="custom__button">Knowo More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="knife_image" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__image' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus doloribus reiciendis, ut ipsam in excepturi. Distinctio veniam qui hic amet corporis quaerat deleniti.</p>
        <button type='button' className="custom__button">Knowo More</button>
      </div>

    </div>
  
  </div>
);

export default AboutUs;

