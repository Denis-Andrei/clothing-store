import React from 'react';
import './jumbotron.styles.scss';
import SalesCard from '../sales-card/sales-card.component';
import Background from '../../assets/images/jumb.png';




const Jumbotron = () =>(
    <div className="jumbotron" 
        style={{backgroundImage: `url(${Background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'center'
        
        }}
    >
        <SalesCard />
          
    </div>
)

export default Jumbotron;