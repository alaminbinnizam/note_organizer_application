import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ForgotPassword from './Components/ForgotPassword';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Contact from './Components/Contact';
import Pagenotefound from './Components/Pagenotefound';
import Login from './Components/Login';
import Signup from './Components/Signup'

function App() {
  return (
   <>
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Pagenotefound />} />

        {/* user protected route */}
        {/* <Route path='/user' element={<PrivateRoute />}>
          <Route path='employees' element={<Employees />} />
          <Route path='employee/:id' element={<SingleEmployee />} />
          <Route path='deviceLogs' element={<DeviceLogs />} />
          <Route path='devices' element={<Devices />} />
          <Route path='deviceReturn' element={<DeviceReturn />} />
          <Route path='deviceTransfer' element={<DeviceTransfer />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='create-device' element={<CreateDevice />} />
          <Route path='create-employees' element={<CreateEmployees />} />
        </Route>
       */}



      </Routes>
   </>
  );
}

export default App;
