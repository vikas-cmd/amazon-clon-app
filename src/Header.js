import React from 'react';
import { BsSearch } from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => {
    return <>
    
    <div className='header'>
        <Link to='/'>
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        
        </Link>
        

        <div className='header_search'>
            <input className='header_searchInput' type='text' />
            <BsSearch className='header_searchIcon'/>
           
        </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>Sign In</span>

            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Return</span>
                <span className='header_optionLineTwo'>& Order</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>

            </div>
            <Link to='/checkout' >
            <div className='header_optionBasket'>
            <span className='header_optionBasketCount'>0</span>
                <AiOutlineShoppingCart className='header_optionBasketIcon'/>
                    
                
            </div>


            </Link>
            

        </div>

    </div>
    </>;
}




export default Header;