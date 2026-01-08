import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'rc-slider/assets/index.css';
import ProductDetails from './Components/Layouts/Product/ProductDetails';
import ProductSearch from './Components/Layouts/Product/ProductSearch';
import Login from './Components/User/Login';
import Register from './Components/User/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileThunk } from './Redux/Actions/authAction';
import MyProfile from './Components/User/MyProfile';
import ProtectRoute from './Routes/ProtectRoute';
import UpdateProfile from './Components/User/UpdateProfile';
import UpdatePassword from './Components/User/UpdatePassword';
import ForgotPassword from './Components/User/ForgotPassword';
import ResetPassword from './Components/User/ResetPassword';
import Cart from './Components/Cart/Cart';
import Shipping from './Components/Cart/Shipping';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfileThunk())
  }, [dispatch])
  return (
    <BrowserRouter >
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className='container container-fluid'>
            <ToastContainer theme='dark' autoClose={2000}  />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/myprofile' element={<ProtectRoute><MyProfile /></ProtectRoute>} />
              <Route path='/myprofile/update' element={<ProtectRoute><UpdateProfile /></ProtectRoute>} />
              <Route path='/myprofile/update/password' element={<ProtectRoute><UpdatePassword /></ProtectRoute>} />
              <Route path='/password/reset' element={<ForgotPassword />} />
              <Route path='/password/reset/:token' element={<ResetPassword />} />
              <Route path='/search/:keyword' element={<ProductSearch />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/shipping' element={<ProtectRoute><Shipping /></ProtectRoute>} />
            </Routes>
          </div>
        </HelmetProvider>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
