import React from 'react'
import { CiMail } from "react-icons/ci";
import { Link } from '@mui/material';
const Footer = () => {
  return (
    <div id="footer">
      <div className="footer__container">
        <div className="footer__name">
          EVENTSLINK
        </div>
        <div className="footer__bottom">
          <div className="footer__navlink">
            <Link className='linkline' to="/events">
              <p className='navlink'>Events</p>
            </Link>
            <Link className='linkline' to="/aboutus">
              <p className='navlink'>About us</p>
            </Link>
            <Link className='linkline' to="/contactus">
              <p className='navlink'>Contact us</p>
            </Link>
          </div>
          <div className="footer__mail">
            <div className="mail__icon">
              <CiMail />
            </div>
            <p className='mailadres'>eventslink@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
