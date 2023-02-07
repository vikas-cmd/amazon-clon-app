import React from 'react';
import "./Checkout.css";
const Checkout = () => {
    return <div>
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_add' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.JPG' alt=''></img>
                <div className='checkout_title'>
                    <h2 >Your Shopping Basket</h2>
                    {/*BasketItem */}
                    {/*BasketItem */}
                    {/*BasketItem */}
                    {/*BasketItem */}
                    {/*BasketItem */}

                </div>
                
                

            </div>
            <div className='checkout_right'>
                <h2>The subtotal will go here</h2>
            </div>

        </div>
    </div>;
}


export default Checkout;