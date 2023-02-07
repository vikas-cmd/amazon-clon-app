import React from 'react';
import './Home.css';
import Product from './Product';

const Home = () => {
    return <>
    <div className='home'>
        <div className='home_container'>
            <img className='home_containerLogo'
            src='https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg' alt=''/>
            <div className='home_row'>
                <Product 
                    title={'The lean                                                  startuphghfh '} 
                    price={20.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={3}
                />
                
                

                <Product 
                title={'The lean startuphghfh '} 
                price={100.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={3}
                />
                

            </div>
            <div className='home_row'>
                <Product 
                title={'The lean startuphghfh '} 
                price={40.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={3}
                />
                <Product 
                title={'The lean startuphghfh '} 
                price={200.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={5}
                />
                <Product 
                title={'The lean startuphghfh '} 
                price={120.99}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={3}
                />
            </div>
            <div className='home_row'></div>
        </div>

    </div>

    </>;
}


export default Home;