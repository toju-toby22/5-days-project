import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './pages/Homepage';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import {  Navigate, Routes, Route } from "react-router-dom";
import Supermarket from './components/categories/Supermarket';
import NewProduct from './Dashboard/NewProduct';

function App() {
  return (
    <div className='bodypage'>
      
          <Routes>
            <Route path="/"  element={ <Homepage />} />
            {/* {/* <Route path="/Auth"  element={ <Auth />} /> */}
            <Route path="ProductPage" element={<ProductPage />} /> 
            <Route path="Cart" element={<Cart />} /> 





            {/* Categories */}
            <Route path="Supermarket" element={<Supermarket/>} /> 


            {/* dashbooard routes */}
            <Route path="/new-product" element={<NewProduct />} />

          </Routes>
    </div>
  );
}

export default App;
