

import Home from "./pages/Home";
import Employment from "./pages/Employment";
import { Route, Routes,BrowserRouter } from 'react-router-dom';
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Customer from "./pages/Customer";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage"
import ChangepassPage from "./pages/ChangepassPage";
import EditPage from "./pages/EditPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />

    <Route path='/Employment' element={<Employment />} />
    <Route path='/AboutUs' element={<AboutUs />} />
    <Route path='/ContactUs' element={<ContactUs />} />
    <Route path='/Customer' element={<Customer />} />
    <Route path='/Login' element={<Loginpage />} />
    <Route path='/Signup' element={<Signuppage />} />
    <Route path='/Changepass' element={<ChangepassPage />} />
    <Route path='/EditPage' element={<EditPage />} />
    
    







    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
