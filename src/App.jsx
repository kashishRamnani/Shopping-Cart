import { Outlet, useLocation } from 'react-router-dom';
import './App.css';
import NavItems from './components/NavItems';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); 

  return (
    <>
      <NavItems />
      
      {location.pathname === '/' && (
        <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center text-center">
          <h1 className="fw-bold fs-3">HELLO! WELCOME TO SHOPPING CART</h1>
        </div>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
