import React from 'react';
import './choose.styles.scss';
import { Link } from 'react-router-dom';
import Woman from '../../assets/images/woman.jpg'
import Man from '../../assets/images/man.jpg'
import CustomButton from '../custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';


const Choose = ({match}) =>{
    
    return(
    <div className="choose-box">

       <div className="gender-box" 
            style={{backgroundImage: `url(${Man})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'}}
       >
            <Link to={`${match.path}/mens`}>
                <CustomButton name={'shop mens'} noBorder inverted/>
            </Link>
            
        </div>
        <div className="gender-box"
            style={{backgroundImage: `url(${Woman})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}
        >
            <Link to={`shop/womens`}>
                <CustomButton name={'shop womens'} noBorder inverted/>
            </Link>
            
        </div>
    </div>
    )
}



export default withRouter(Choose);


