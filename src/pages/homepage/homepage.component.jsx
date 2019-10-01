import React from 'react';
import './homepage.styles.scss';
import Jumbotron from '../../components/jumbotron/jumbotron.component';
import LatestArrivals from '../../components/latest-arrivals/latest-arrivals.component';
import About from '../../components/about/about.component';



const HomePage = () =>(
    <div className="home-page">

        <Jumbotron />
        <LatestArrivals />
        <About />
       
    </div>
)

export default HomePage;