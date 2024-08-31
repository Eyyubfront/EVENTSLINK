import React, { useState } from 'react';
import { BiChevronDown } from "react-icons/bi"; 
import BurgerMenu from '../Burgermenu';
import { Link } from '@mui/material';
import human from "../../assets/images/iconsphoto/human.png"
import bag from "../../assets/images/iconsphoto/bag.png"
import search from "../../assets/images/iconsphoto/search.png"
const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
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
                {selectedLanguage} <BiChevronDown />
              </button>
              <div className={`dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
                <p onClick={() => handleLanguageChange('EN')}>EN</p>
                <p onClick={() => handleLanguageChange('AZ')}>AZ</p>
              </div>
            </div>
            <div className="navbar__icons">
            <img className='iconsphoto' src={search} alt="" />
            <img className='iconsphoto' src={human} alt="" />
            <img className='iconsphoto' src={bag} alt="" />
            </div>
          </div>
          <BurgerMenu/>
        </div>
      </div>
    </>
  );
};

export default Header;
