import { Box, IconButton, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from '@mui/material';
import { CiSearch } from "react-icons/ci";
import { FaShoppingBag } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

const BurgerMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
                <Link className='burgerlink' to="/events">
                  <p className='navlink'>Events</p>
                </Link>
                <Link className='burgerlink' to="/aboutus">
                  <p className='navlink'>About Us</p>
                </Link>
                <Link className='burgerlink' to="/contactus">
                  <p className='navlink'>Contact Us</p>
                </Link>
              </div>
              <div className="burger__right">
                <div className="navbar__language">
                  <button onClick={toggleDropdown} className="dropdown-btn">
                    EN <BiChevronDown />
                  </button>
                  {isDropdownOpen && (
                    <div className="dropdown-menu">
                      <p>EN</p>
                      <p>AZ</p>
                    </div>
                  )}
                </div>
                <div className="burger__icons">
                  <CiSearch />
                  <IoMdPerson />
                  <FaShoppingBag />
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
