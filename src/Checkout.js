import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';
import CheckoutProduct from './Checkoutproduct';
import { useStateValue } from './StateProvider';

const Checkout = () => {
    const [{basket},dispatch]=useStateValue();
    return <div>
        <div className='checkout'>
            <div className='checkout_left'>
                <img className='checkout_add' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668.JPG' alt=''></img>
               
                 <div className='checkout_title'>
                    <h2 >Your Shopping Basket</h2>
                   { basket.map((item)=>(
                    <CheckoutProduct 
                    id={item.id} 
                    title={item.title} 
                    price={item.price} 
                    image={item.image}  
                    rating={item.rating}/>
                ))
            }
                   
                </div>
                
                

            </div>
            <div className='checkout_right'>
                <h2>The subtotal will go here</h2>
                <Subtotal />
            </div>

        </div>
    </div>;
}


export default Checkout;