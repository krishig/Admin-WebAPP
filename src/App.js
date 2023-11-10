import './App.css';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
import Productpage from './Components/Productpage';
import Orderpage from './Components/Orderpage';
import Accountpage from './Components/Accountpage';
import Category from './Components/Category';
 import Sub_category from './Components/Sub_category';
 import Brands from './Components/Brands';
 import Homepage from './Components/Homepage';
 import Protected from './Components/Protected';
 import Addcategory from './Components/Addcategory';
 import CategoryEditData from './Components/CategoryEditData';
 import Sub_category_edit_data from './Components/Sub_category_edit_data';
 import Addsubcategory from './Components/Addsubcategory';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App w-[100%] h-[100vh]">
      
     
        <Routes>
          <Route path='/' element={<Login />}></Route>

          <Route path='/home' element={<Homepage/>}></Route>
          <Route path='/dashboard' element={<Protected><Dashboard/></Protected>}></Route>
          <Route path='/products' element={<Protected><Productpage/></Protected> }></Route>
          <Route path='/orders' element={<Protected><Orderpage/></Protected> }></Route>
          <Route path='/account' element={<Protected><Accountpage/></Protected> }></Route>
          <Route path='/category' element={<Protected><Category/></Protected>  }></Route>
          <Route path='/brands' element={<Protected><Brands/> </Protected>}></Route>
          <Route path='/viewCategory' element={<Protected><CategoryEditData/> </Protected>}></Route>
          <Route path='/addCategory' element={<Protected><Addcategory/></Protected>}></Route>
          <Route path='/sub_category' element={<Protected><Sub_category/></Protected>  }></Route>
          <Route path='/viewSubCategory' element={<Protected><Sub_category_edit_data/></Protected>}></Route>
          <Route path='/addSubCategory' element={<Protected><Addsubcategory/></Protected>  }></Route>
 

          
</Routes>
        
      </div>
    
    </BrowserRouter>
  );
}

export default App;
