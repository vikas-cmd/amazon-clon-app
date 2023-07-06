import React, { useState } from 'react';
import './Signin.css';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';



const Signin = () => {
    const navigate=useNavigate();
    const [Email,setEmail]=useState();
    const [Password,setPassword]=useState();


    const signIn=e=>{
        e.preventDefault();

        //firebase code login submit
        auth
        .signInWithEmailAndPassword(Email,Password)
        .then((auth)=>{
            navigate('/');
        })
        .catch(error=>alert(error.message))

    }


    const register=e=>{
        
        e.preventDefault();


        // do some firebase code for
        auth
            .createUserWithEmailAndPassword(Email,Password)
            .then((auth)=>{
                  //it successfully created a new user with and password
                  console.log(auth);
                  if(auth){
                    navigate('/');
                  }
            })
            .catch(error=>alert(error.massage))
    }
    
    return <div>

        <div className='Sign-in'>
            <div className='sign-in_logo'>
                <Link to='/'>
                <img className='header_logo' src='https://zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-HD.png'  />
</Link>
            </div>
            <div className='sign_container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' placeholder='Email' value={Email} onChange={e=>setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' placeholder='password'  value={Password} onChange={e=>setPassword(e.target.value)} />
                    <button type='submit' onClick={signIn}>Sign In </button>

                </form>

                <p>
                    By signing-in you agree to theAmazone Fake clonke Conditions of Use & Sale.Please see our Privacy Notice,our cookies Notice And our Interest-Based Ads  Notice.
                </p>

                <button type='submit' onClick={register}>Create your Amazone Account</button>

            </div>



        </div>
    </div>;
}


export default Signin;