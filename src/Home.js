import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from './Product';
import { apiData } from './Api';



const Home = () => {
    const [data, setData] = useState([]);
    const api = async () => {
        const product = await apiData();
        setData(product);
    };
    useEffect(() => {
        api();
    }, []);

    return <>

        <div className='home'>
            <div className='home_container'>
                <img className='home_containerLogo'
                    src='https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg' alt='' />
                <div className='home_row1'>
                    {data.map((data) => (
                        <div className='product_container'>
                            <Product
                                id={data.id}
                                title={data.title}
                                price={data.price}
                                image={data.image}
                                rating={Math.floor(data.rating.rate)}
                            />
                            {console.log(Math.floor(data.rating.rate))}
                        </div>

                    ))}





                

            </div>
            <div className='home_row'></div>
        </div>

    </div >


    </>;
}


export default Home;