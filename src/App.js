import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductDetails from './Components/Layouts/Product/ProductDetails';

function App() {
  return (
    <BrowserRouter >
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className='container container-fluid'>
            <ToastContainer theme='dark' />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
            </Routes>
          </div>
        </HelmetProvider>
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
