import React from 'react';
import './checkoutProduct.css'
import { useStateValue } from './StateProvider';


const CheckoutProduct = ({id,image,title,price,rating}) => {
    
    
   const [{basket},dispatch]=useStateValue();
    const removeBasket=()=>{
        dispatch({
            type:'Remove_From_Basket',
            id:id,
        }

        )
        
    }
    return <>
    <div className='checkoutProduct'>
        <img className='checkoutProduct_image' src={image} />

        <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'>
                {title}

            </p>
            <p className='checkoutProduc_price'>
                <small>Rs</small>
                <strong>{price}</strong>
                </p>
                

            <div className='checkoutProduct_rating'>
                {
                    Array(rating).fill().map((_,i)=>
                        <p>🌟</p>
                    )
                }
                </div>
                <button onClick={removeBasket}>remove from Basket</button>
        </div>
    </div>




    </>;
}



export default CheckoutProduct;