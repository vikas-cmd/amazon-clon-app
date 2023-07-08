
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Checkout from "./Checkout";
import Signin from "./Signin";
import { useEffect } from "react";

function App() {
  
   
  
  

  useEffect(()=>{

   
  })


  return (
    <>
    
    
   
      <BrowserRouter basename="/amazon-clon-app">
      <div className="app">
      <Header/>
        <Routes>
        
        <Route path="/" element={<Home/>}>
            

            </Route>
          
          <Route path="/checkout" element={<Checkout/>}>

          </Route>
          
          <Route path='/signIn' element={<Signin />}>

          </Route>

        
      
        </Routes>
      

      </div>
      
    
    </BrowserRouter>
    <Home/>
    
    </>
    
  );
}

export default App;
