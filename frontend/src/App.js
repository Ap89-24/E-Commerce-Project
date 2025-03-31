import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import Shopcattegory from './Pages/Shopcattegory';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import Loginsignup from './Pages/Loginsignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/manbanner.png'
import women_banner from './Components/Assets/womenbanner.png'
import kids_banner from './Components/Assets/kidsbanner.png'



function App() {
  return (
    <div>
      <BrowserRouter>
       <Navbar/>

       
       
       <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcattegory banner={men_banner} category="men"/>}/>
        <Route path='/womens' element={<Shopcattegory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<Shopcattegory banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Loginsignup/>}/>
       </Routes>
       <Footer/>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
