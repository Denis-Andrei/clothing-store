import React from 'react';
import './about.styles.scss';

import Background from '../../assets/images/our.png';


const About = () =>(
    <div className="about" 
        style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'auto',
            backgroundPosition: 'top center'
            
        }}
    >
        <div className='info'>
            <h1 className='about-h1'>OUR STORY</h1>
            <p className='about-p'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum

            </p>
        </div>
        
          
    </div>
)

export default About;