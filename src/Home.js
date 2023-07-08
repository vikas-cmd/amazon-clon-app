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
                id={10023}
                    title={'The lean startuphghfh '} 
                    price={20}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                    rating={3}
                />
                
                

                <Product 
                id={10024}
                title={'The lean startuphghfh '} 
                price={100}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={3}
                />
                

            </div>
            <div className='home_row'>
                <Product 
                id={10025} 
                title={'The lean startuphghfh '} 
                price={40}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={3}
                />
                <Product 
                id={10026}
                title={'The lean startuphghfh '} 
                price={200}
                image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
                rating={5}
                />
                <Product 
                id={10027}
                title={'The lean startuphghfh '} 
                price={120}
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