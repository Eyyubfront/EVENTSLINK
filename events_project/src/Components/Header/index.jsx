import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi"; 
import BurgerMenu from '../Burgermenu';
import { Link } from '@mui/material';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div id="navbar">
        <div className="navbar__container">
          <div className="navbar__left">
            <h2>EVENTS<span className='linksname'>LINK</span></h2>
           <div className="navbar__navlink">
            <Link sx={{textDecoration:"none"}} className='linkline' to="/events">
              <p className='navlink'>Events</p>
            </Link>
            <Link sx={{textDecoration:"none"}} className='linkline' to="/aboutus">
              <p className='navlink'>About us</p>
            </Link>
            <Link sx={{textDecoration:"none"}} className='linkline' to="/contactus">
              <p className='navlink'>Contact us</p>
            </Link>     
           </div>
          </div>
          <div className="navbar__right">
            <div className="navbar__language">
              <button onClick={toggleDropdown} className="dropdown-btn">
                {isDropdownOpen ? 'AZ' : 'EN'} <BiChevronDown />
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                <p>EN</p>
                <p>AZ</p>
              </div>
            </div>
            <div className="navbar__icons">
              <CiSearch />
              <IoMdPerson />
              <FaShoppingBag />
            </div>
          </div>
          <BurgerMenu/>
        </div>
      </div>
    </>
  );
};

export default Header;
