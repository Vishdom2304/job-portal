import React from 'react'
import logo from "../static/logo192.png"
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between mx-2">
        <div className="navbar-brand">
          <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          <Link className="navbar-brand"to="/">FeetWings</Link>
        </div>
     
        <div id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link text-dark" aria-current="page" href="#">Our Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Insights</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Smart Yarn</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-dark" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
