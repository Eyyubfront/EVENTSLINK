import { IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from '@mui/material';
import { BiChevronDown } from "react-icons/bi";
import human from "../../assets/images/iconsphoto/human.png"
import bag from "../../assets/images/iconsphoto/bag.png"
import search from "../../assets/images/iconsphoto/search.png"
const BurgerMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
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
      <div id="burgermenu">
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{ color: "white" }}
          className="menu-button"
        >
          {open ? <Close /> : <MenuIcon />}
        </IconButton>
        <div className={`dialog ${open ? 'open' : ''}`}>
          <div className="burgermenubox" sx={{ background: "black", color: "white" }}>
            <Stack flexDirection="row" justifyContent="flex-end">
              <IconButton
                sx={{ color: "white" }}
                edge="end"
                onClick={() => setOpen(false)}
              >
                <Close />
              </IconButton>
            </Stack>

            <Stack sx={{ marginTop: "20%" }} alignItems="center" flexDirection="column" gap="30px" textAlign="center">
              <div className="burger__navlink">
                <Link sx={{textDecoration:"none"}} className='burgerlink' to="/events">
                  <p className='navlink'>Events</p>
                </Link>
                <Link sx={{textDecoration:"none"}} className='burgerlink' to="/aboutus">
                  <p className='navlink'>About Us</p>
                </Link>
                <Link sx={{textDecoration:"none"}} className='burgerlink' to="/contactus">
                  <p className='navlink'>Contact Us</p>
                </Link>
              </div>
              <div className="burger__right">
                <div className="navbar__language">
                  <button onClick={toggleDropdown} className="dropdown-btn">
                    {selectedLanguage} <BiChevronDown />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <p onClick={() => handleLanguageChange('EN')}>EN</p>
                      <p onClick={() => handleLanguageChange('AZ')}>AZ</p>
                    </div>
                  )}
                </div>
                <div className="burger__icons">
                <img className='iconsphoto' src={search} alt="" />
            <img className='iconsphoto' src={human} alt="" />
            <img className='iconsphoto' src={bag} alt="" />
                </div>
              </div>
            </Stack>
          </div>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
