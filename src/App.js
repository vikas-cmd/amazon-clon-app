
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Checkout from "./Checkout";
import Signin from "./Signin";
import { useEffect } from "react";

function App() {
  useEffect(()=>{

      // will only run once when he app component loads...

  })


  return (
    <>
    
   
      <BrowserRouter>
      <div className="app">
        <Header/>
        
        <Routes>
        
               </Route>
          <Route path="/" element={<Home/>}>

          </Route>
          
          <Route path="/checkout" element={<Checkout/>}>

     
          <Route path='/signIn' element={<Signin />}>

          </Route>

        
      
        </Routes>

      </div>
      
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
