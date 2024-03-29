import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const Header = () => {
    const categories = [
        'All',
        'Electronics',
        'Books',
        'Clothing',
        'Home & Kitchen',
        'Toys',
        // Add more categories here
      ];
    const [{basket},dispatch]=useStateValue();
    const [selectedCategory, setSelectedCategory] = useState('All');

const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };
    
    

    return <>
    
    <div className='header'>
        <Link to='/'>
        <img className='header_logo' src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='' />
        
        </Link>
        

        <div className='header_search'>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

            <input  className='header_searchInput' type='text' />
            
            <BsSearch className='header_searchIcon'/>
           
        </div>
        <div className='header_nav'>
        <Link to='/Signin'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello Guest</span>
                
                <span className='header_optionLineTwo'>Sign In</span>

            </div>
            </Link>
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
            <span className='header_optionBasketCount'>{basket.length}</span>
                <AiOutlineShoppingCart className='header_optionBasketIcon'/>
                    
                
            </div>


            </Link>
            

        </div>

    </div>
    </>;
}




export default Header;