import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss'
function Navbar() {
    return (
        <div className='navbar-container'>
            <div className='navbar'>
                <div className='navbar-left'>
                    <img src=''></img>
                </div>
                <div className='navbar-right'>
                    <ul className='navbar-links-container'>
                        <NavLink to='/home' className='navbar-link-item'>
                            Home
                        </NavLink>
                        <NavLink to='/shop' className='navbar-link-item'>
                            Shop
                        </NavLink >
                        <NavLink to='/contact' className='navbar-link-item'>
                            Contact
                        </NavLink>
                        <NavLink to='/login'className='navbar-link-item'>
                            Login
                        </NavLink>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
