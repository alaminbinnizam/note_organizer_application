import { Route, Routes } from 'react-router-dom';
import Home from './User/Home';
import About from './Components/About';
import ForgotPassword from './Components/ForgotPassword';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Contact from './Components/Contact';
import Pagenotefound from './Components/Pagenotefound';
import Login from './Components/Login';
import Signup from './Components/Signup'
import PrivateRoute from './Routes/Private';
import Notes from './User/Notes';
import CreateNote from './User/CreateNote';
import CreateCategory from './User/CreateCategory';
import UpdateNote from './User/UpdateNote';


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
         <Route path='/user' element={<PrivateRoute />}>
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='create-note' element={<CreateNote />} />
          <Route path='notes' element={<Notes />} />
          <Route path='update-note/:id' element={<UpdateNote />} />
        </Route>
       



      </Routes>
   </>
  );
}

export default App;
