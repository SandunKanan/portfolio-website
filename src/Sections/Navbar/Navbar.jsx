import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

import './Navbar.scss'
import logo from '../../assets/sandun/sandun_logo.svg'
import underline from '../../assets/icons/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/icons/menu_open.svg'
import menu_close from '../../assets/icons/menu_close.svg'

const Navbar = () => {

  const [menu,setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
  const closeMenu = () => {
    menuRef.current.style.right="-300px";
  }

  return (
    <div className='navbar'>
      <div className='logo-box'>
        <img src={logo} alt="" className='logo'/>
      </div>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
        <li><Link className='anchor-link' to='/' onClick={() => setMenu("home")}><p>Home</p></Link><img className={menu === "home" ? "nav__selected" : "nav__non-selected"} src={underline} alt='' /></li>
        <li><Link className='anchor-link' to='/about' onClick={() => setMenu("about")}><p>About Me</p></Link><img className={menu === "about" ? "nav__selected" : "nav__non-selected"} src={underline} alt='' /></li>
        <li><Link className='anchor-link' to='/portfolio' onClick={() => setMenu("work")}><p>Portfolio</p></Link><img className={menu === "work" ? "nav__selected" : "nav__non-selected"} src={underline} alt='' /></li>
        <li><Link className='anchor-link' to='/contact' onClick={() => setMenu("contact")}><p>Contact</p></Link><img className={menu === "contact" ? "nav__selected" : "nav__non-selected"} src={underline} alt='' /></li>
      </ul>
      <AnchorLink className="nav-connect" href='#contact'><div className='anchor-link' offset={50}>Connect With Me</div></AnchorLink>
    </div>
  )
}

export default Navbar
