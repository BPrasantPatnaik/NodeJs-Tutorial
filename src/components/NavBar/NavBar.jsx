import React, { useState, useRef } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.jpg';
import nav_dropdown from '../Assets/nav_dropdown.png';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <Link to='/' onClick={() => { setMenu("home") }} style={{ textDecoration: 'none' }} className="nav-logo">
        <img src={logo} alt="logo" />
      </Link>


      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />

    
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("introduction") }}>
          <Link to='/introduction' style={{ textDecoration: 'none' }}>Introduction</Link>
          {menu === "introduction" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("setup") }}>
          <Link to='/setup' style={{ textDecoration: 'none' }}>Setup</Link>
          {menu === "setup" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("modules") }}>
          <Link to='/modules' style={{ textDecoration: 'none' }}>Modules</Link>
          {menu === "modules" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("npm") }}>
          <Link to='/npm' style={{ textDecoration: 'none' }}>NPM</Link>
          {menu === "npm" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("server") }}>
          <Link to='/web-server' style={{ textDecoration: 'none' }}>Web Server</Link>
          {menu === "server" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("filesystem") }}>
          <Link to='/file-system' style={{ textDecoration: 'none' }}>File System</Link>
          {menu === "filesystem" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("debugging") }}>
          <Link to='/debugging' style={{ textDecoration: 'none' }}>Debugging</Link>
          {menu === "debugging" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("events") }}>
          <Link to='/events' style={{ textDecoration: 'none' }}>Events</Link>
          {menu === "events" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("express") }}>
          <Link to='/express' style={{ textDecoration: 'none' }}>Express.js</Link>
          {menu === "express" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("static-resources") }}>
          <Link to='/static-resources' style={{ textDecoration: 'none' }}>Static Resources</Link>
          {menu === "static-resources" ? <hr /> : <></>}
        </li>
        <li onClick={() => { setMenu("database") }}>
          <Link to='/database' style={{ textDecoration: 'none' }}>Database</Link>
          {menu === "database" ? <hr /> : <></>}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
