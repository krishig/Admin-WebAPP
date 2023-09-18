import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Productpage from './Components/Productpage';
import Orderpage from './Components/Orderpage';
 
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App w-[100%] h-[100vh]">
      
     
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={<Dashboard/>}></Route>
          <Route path='/products' element={<Productpage/>}></Route>
          <Route path='/orders' element={<Orderpage/>}></Route>
          </Routes>
        
      </div>
    
    </BrowserRouter>
  );
}

export default App;
