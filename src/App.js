import './App.css';
import Navbar from './component/Navbar';
import Dropdown from './component/Dropdown';
import TextForm from './component/TextForm';
 import Form from './component/Form'
import React from "react";
import {
  BrowserRouter as Router,
  
  Routes ,
  Route
  
} from "react-router-dom";
function App() {
  return (
 <Router> 
  <div>
  
  <Navbar/>
  
   <Routes>
  
     <Route path="/about" element={<Dropdown/>} />
      <Route path="/contactus" element={<TextForm/>} />
<Route path="/home" element={<Form/>} />
      </Routes>  
    
   
  </div>
 </Router>
    );
    
}

export default App;
