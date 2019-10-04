import React from 'react';
import './checkout-summary.styles.scss';



const CheckoutSummary = ({quantity, price}) =>{
    
    return(
        <div className="checkout-summary">
            
            <h1 className='summary-title'>Summary</h1>

            <div className="subtotal">
                <div className="subtotal-info">
                    <h3 className="subtotal-title">Subtotal</h3>
                    <p className="subtotal-items">{quantity} Items</p>
                </div>
                
                <p className="subtotal-price">&#36;{price}</p>
                
            </div>

            <div className="shipping">
                <div className="shipping-info">
                    <h3 className="shipping-title">Shipping</h3>
                    
                </div>

                <p className="shipping-price">&#36;5.00</p>
            </div>

            <div className="total">
                <h3 className="total-title">TOTAL</h3>
                <p className="total-price">&#36;{price + 5}</p>
            </div>
        </div>
    )
}



export default CheckoutSummary;