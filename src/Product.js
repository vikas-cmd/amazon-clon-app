import React from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';

const Product = ({id,title,price,image,rating}) => {
    const [{basket},dispatch]=useStateValue();
    console.log(basket)
    
    const addToBasket=()=>{
        
        dispatch({
            type:'ADD_TO_BASKET',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating,
        
        }
        })
    }
    
    return <>
    
    <div className='product' >
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
               { Array(rating).fill().map((_,rating)=>
                <p>🌟</p>
                )}
                
            </div>
        </div>
        <img className='product_image'src={image} alt='' />
        <button onClick={addToBasket}>Add to Basket</button>
        
        

    </div>
    </>;
}

export default Product;