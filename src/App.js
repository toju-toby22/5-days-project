import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import {  Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bodypage'>
      
          <Routes>
            <Route path="/"  element={ <Homepage />} />
            {/* {/* <Route path="/Auth"  element={ <Auth />} /> */}
            <Route path="ProductPage" element={<ProductPage />} /> 
            <Route path="Cart" element={<Cart />} /> 
            
          </Routes>
    </div>
  );
}

export default App;
