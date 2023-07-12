import React from 'react'
import "../styles/Navbar.css"
import logo from "../logoImg/orange-logo.png"
import searchIcon from "../logoImg/search-interface-symbol.png"
// import {Link} from "react-router-dom"


const Navbar = () => {
  return (
    <div className="nav">
        <div className="logo">

        <a href="/">
            <img id="logoImage" src={logo} alt="Logo" />
        </a>
        </div>
        <a className='navlinks' href="/miphones">Mi Phones</a>        
        <a className='navlinks' href="/redmiphones">Redmi Phones</a>
        <a className='navlinks' href="/tv">TV</a>
        <a className='navlinks' href="/laptops">Laptops</a>
        <a className='navlinks' href="/lifestyle">Fitness & Lifestyle</a>
        <a className='navlinks' href="/home">Home</a>
        <a className='navlinks' href="/audio">Radio</a>
        <a className='navlinks' href="/accessories">Accessories</a>

        <div >
            <input className="searchbox" type="text" name="search" placeholder="Search Products" />
            <img id="searchImg" className="search-icon" src={searchIcon} alt="search" />
        </div>

        </div>

  )
}

export default Navbar