
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter,Routes,Route } from "react-router-dom";

import Checkout from "./Checkout";

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

        
      
        </Routes>

      </div>
      
    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
