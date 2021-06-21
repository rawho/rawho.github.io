import React, { useState } from "react"
import {Link} from "gatsby"
import "./Sidebar.css"

const Sidebar = () => {

  const [click, setclick] = useState(false)  
  const navToggler = e => {
    if(click){
      setclick(false)
    } else{
      setclick(true)
    }
  }

  return (
    <div className={click ? "aside open" : "aside"}>
      <div onClick={navToggler} className={click ? "nav-toggler open": "nav-toggler"}>
        <span></span>
      </div>
      <div className="aside-inner" style={{overflowY: "hidden"}}>
        <div className="logo">
          <a href="/">Rahul</a>
        </div>

        <ul className="nav">
          <li>
            <Link to="/" activeClassName="active">
              <i className="fa fa-home"></i> Home
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active">
              <i className="fa fa-user"></i> About
            </Link>
          </li>
          <li>
            <Link to="/certificates" activeClassName="active">
              <i className="fa fa-list"></i> certificates
            </Link>
          </li>
          <li>
            <Link to="/portfolio" activeClassName="active">
              <i className="fa fa-briefcase"></i> Projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" activeClassName="active">
              <i className="fa fa-envelope"></i> Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" activeClassName="active">
              <i className="fa fa-comments"></i> Contact
            </Link>
          </li>
          <li>
            <Link to="/support" activeClassName="active">
              <i className="fa fa-credit-card"></i> support me
            </Link>
          </li>
        </ul>
        <div className="copyright-text">&copy; 2020 Rahul T CET</div>
      </div>
      
    </div>

    
  )
}

export default Sidebar
