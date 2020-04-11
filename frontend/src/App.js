import React from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Home from './pages/home/Home';
import ShoppingCart from './pages/shop/shoppingCart/ShoppingCart';
import ShopCategory from './pages/shop/shopCategory/ShopCategory';
import ProductCheckout from './pages/shop/productCheckout/ProductCheckout';
import ProductDetails from './pages/shop/productDetails/ProductDetails';
import Confirmation from './pages/shop/confirmation/Confirmation';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Contact from './pages/contact/Contact';


import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
function App() {
    return (
        <div>
          
          <Router>
            <Header />

            <Route exact path='/'component={Home}/>
            <Route path='/shopcategory'component={ShopCategory}/>
            <Route path='/shoppingcart'component={ShoppingCart}/>
            <Route path='/productdetails' component={ProductDetails}/>
            <Route path='/productcheckout' component={ProductCheckout}/>
            <Route path='/confirmation' component={Confirmation}/>
					  <Route path='/login' component={Login}/>
					  <Route path='/logout' component={Home}/>
					  <Route path='/signup' component={Signup}/>
					  <Route path='/contact' component={Contact}/>
            
            <Footer />
          </Router>
          
        </div>
    );
}

export default App;
