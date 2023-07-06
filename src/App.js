
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Checkout from "./Checkout";
import Signin from "./Signin";

function App() {
  return (
    <>
    
   
      <BrowserRouter>
      <div className="app">
        <Header/>
        <Routes>
        
          
          
          <Route path="/checkout" element={<Checkout/>}>

          </Route>
          <Route path="/" element={<Home/>}>

          </Route>
          <Route path='/signIn' element={<Signin />}>

          </Route>

        
      
        </Routes>

      </div>
      
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
