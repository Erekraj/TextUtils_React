import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className={`navbar  navbar-expand-lg navbar-$(props.mode)bg-dark`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent"></div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item" >
          <a className="nav-link active" aria-current="page" href="/">Aboutus</a>
        </li></ul>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-primary" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

Navbar.propTypes = { title: PropTypes.string.isRequired,
                     Aboutus: PropTypes.string}  //no error bcz def prop is set
//Navbar.defaultprops = {title: settitlehere}