import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import Slider from "../../elements/Slider/Slider";
import Login from "../../Pages/login/Login.jsx";
import Cart from "../../Pages/cart/Cart.jsx";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {

  const defaultStyle = {color: "red"};
  const activeStyle = {color: "black"};

  const [offset, setOffset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <>
     <Slider/>
      <nav className={offset? "Navbar scrollNavbar" : "Navbar"} >
        <div className="search-logo-icons">
          <div className="searchBar">
            <FontAwesomeIcon icon={faSearch} className="searchIcon" />
            <input type="text" placeholder="search" />
          </div>
          <div className="logo">
            <a href="/">
              <img  
                src="https://bellavitaorganic.com/cdn/shop/files/Bella_Vita_Logo_360_E_2x_d60de42b-fa50-45b3-b490-be70ac1fffa1.png?height=30&v=1689596709"
                alt="logo"
              />
            </a>
          </div>
          <div className="icons">
            <Login/>
            <Cart/>
          </div>
        </div>
        <div className="links">
          <ul>
            <li><NavLink to='/products' >CRAZY DEALS</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? defaultStyle : activeStyle } to='/products' >SHOP ALL</NavLink></li>
            <li><NavLink to='/products' >BESTSELLERS</NavLink></li>
            <li><NavLink to='/products' >PERFUMES</NavLink></li>
            <li><NavLink to='/products' >BATH & BODY</NavLink></li>
            <li><NavLink to='/products' >NEW ARRIVALS</NavLink></li>
            <li><NavLink to='/products' >SKINCARE</NavLink></li>
            <li><NavLink to='/products' >GIFTING</NavLink></li>
            <li><NavLink style={({isActive}) => isActive ? defaultStyle : activeStyle } to='/' >HOME</NavLink></li>
          </ul>
        </div>
      </nav>
      
      
    </>
  );
};

export default Navbar;
