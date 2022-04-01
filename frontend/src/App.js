import React from 'react'
import { BrowserRouter, Route  } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'


function App() {
  return (
            <BrowserRouter>
            <div className="grid-cotainer">
                <header className="row">
                    <div>
                        <a className="brand" href="/">Comfort Fashion Store</a>
                    </div>
                    <div>
                        <a href="/cart">Cart</a>
                        <a href="/signin">Sign In</a>

                    </div>
                </header>
            
                 <main>
                     <Route path="/product/:id" element={<ProductScreen/>}></Route>
                     <Route path="/" element={<HomeScreen/>} exact></Route>
                   
                </main> 
                <footer className="row center">All Rights Reserved </footer>  
            </div>
            </BrowserRouter>
  );
}
export default App;
