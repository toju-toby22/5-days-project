import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage';
import {  Navigate, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      
          <Routes>
            <Route path="/"  element={ <Homepage />} />
            {/* <Route path="/Auth"  element={ <Auth />} />
            <Route path="Answer" element={<Answer />} /> */}
            
          </Routes>
    </div>
  );
}

export default App;
