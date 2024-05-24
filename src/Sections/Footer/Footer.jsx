import React from 'react'
import './Footer.scss'
import footer_logo from '../../assets/sandun/sandun_logo.svg'
import user_icon from '../../assets/icons/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
          <img className="footer__logo" src={footer_logo} alt="" />
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Sandun Kanangama. All rights reserved.</p>
        <div className="footer-bottom-right">
            {/* <p>Term of Services</p>
            <p>Privacy Policy</p> */}
            {/* <p>Connect with me</p> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
