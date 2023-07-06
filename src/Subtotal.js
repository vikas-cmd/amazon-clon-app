import React, { useEffect, useState } from 'react';
import './SubTotal.css';
import { useStateValue } from './StateProvider';


const Subtotal = () => {
    const [{basket},dispatch]=useStateValue();
    const [total, setTotal] = useState()
    useEffect(()=>{
        setTotal(
            basket.reduce((acc,curr)=>acc+curr.price,0)
        )

    })
    return <div className='subtotal'>
        <p>
            Subtotal ({basket.length} items):<strong>Rs.{total}</strong>
        </p>
        <small className='subtotal_gift'>
            <input type='checkbox' />This order contains a gift
        </small>

        <button>Proceed to Checkout</button>


    </div>;
}


export default Subtotal;