import React from 'react';
import './sales-card.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import {Link} from 'react-router-dom';


const SalesCard = () =>(
    <div className="sales-card">
        <div className="title">
            <h3>Shoes & T-shirts</h3>
            <h1>50% OFF</h1>
        </div>
        <Link to='/shop'>
            <CustomButton name={'Shop Now'}/>
        </Link>

    </div>
)

export default SalesCard;