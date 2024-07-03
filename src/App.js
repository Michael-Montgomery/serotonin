// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Packages from './pages/packages/packages';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Checkout from './pages/checkout/checkout';
import Confirmation from './pages/confirmation/confirmation';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/packages/:gender' element={<Packages></Packages>}></Route>
      <Route path='/contact' element={<Contact></Contact>}>contact</Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      <Route path='/confirmation/:orderNumber' element={<Confirmation></Confirmation>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
