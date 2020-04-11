import React from 'react'
import {Link} from 'react-router-dom';
export default function Header () {

const handleChange = e =>{
	console.log(e.target.value)
}
return(
  	<header className="header_area sticky-header">
  		<div className="main_menu">
  			<nav className="navbar navbar-expand-lg navbar-light main_box">
  				<div className="container">
  					<a className="navbar-brand logo_h" href="/"><Link to ='/'><img src="img/logo.png" alt=""/></Link></a>
  					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
  					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  						<span className="icon-bar"></span>
  						<span className="icon-bar"></span>
  						<span className="icon-bar"></span>
  					</button>
  					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
  						<ul className="nav navbar-nav menu_nav ml-auto">
							
							<li className="nav-item active"><Link to='/'><a className="nav-link" href='/'>Home</a></Link></li>
							
  							<li className="nav-item submenu dropdown">
  								<a href='/shopcategory' className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"aria-expanded="false">Shop</a>
  								<ul className="dropdown-menu">
									<li className=" nav-item"><Link to='/shopcategory'><a className='nav-link' href='/shopcategory'>Shop Category</a></Link></li>
									<li className=" nav-item"><Link to='/productdetails'><a className='nav-link' href='/productdetails'>Product Details</a></Link></li>
									<li className=" nav-item"><Link to='/productcheckout'><a className='nav-link' href='/productcheckout'>Product Checkout</a></Link></li>
									<li className=" nav-item"><Link to='/shoppingcart'><a className='nav-link' href='/shoppingcart'>Shopping Cart</a></Link></li>
									<li className=" nav-item"><Link to='/confirmation'><a className='nav-link' href='/confirmation'>Confirmation</a></Link></li>
  								</ul>
  							</li>
							<li className=" nav-item"><Link to='/login'><a className='nav-link' href='/shopcategory'>Login</a></Link></li>
							<li className=" nav-item"><Link to='/profile'><a className='nav-link' href='/productdetails'>Profile</a></Link></li>
							<li className=" nav-item"><Link to='/orders'><a className='nav-link' href='/productcheckout'>Orders</a></Link></li>
							<li className=" nav-item"><Link to='/wishlist'><a className='nav-link' href='/shoppingcart'>Wishlist</a></Link></li>
							<li className=" nav-item"><Link to='/logout'><a className="nav-link" href='logout'>Logout</a></Link></li>
							<li className=" nav-item"><Link to='/contact'><a className="nav-link" href='contact'>Contact</a></Link></li>
  						</ul>
  						<ul className="nav navbar-nav navbar-right">
  							<li className="nav-item"><Link to='/shoppingcart'><a href="/shoppingcart" className="cart"><span className="ti-bag"></span></a></Link></li>
  							<li className="nav-item">
  								<button className="search"><span className="lnr lnr-magnifier" id="search"></span></button>
  							</li>
  						</ul>
  					</div>
  				</div>
  			</nav>
  		</div>
  		<div className="search_input" id="search_input_box">
  			<div className="container">
  				<form className="d-flex justify-content-between" >
  					<input type="text" className="form-control" id="search_input" placeholder="Search Here" onChange={handleChange}/>
  					<button type="submit" className="btn"></button>
  					<span className="lnr lnr-cross" id="close_search" title="Close Search"></span>
  				</form>
  			</div>
  		</div>
  	</header>
  );
}
