import React , {Fragment} from 'react';
import RegisterForm from '../Forms/User/Register';
import LoginForm from '../Forms/User/Login';
import CreateProductForm from '../Forms/Product/Create';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import './nav-style.css'

const Navigation = () => {
    return (

    <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          {/* <button><Link to={`create/${_id}`}>Create Product</Link></button> */}
        {/* <li><a href="#"><i className="fi-xnsuxl-house-solid"></i>Home</a></li>
        <li><a href="#"><i className="fi-cwldxl-exclamation-mark"></i>About</a></li>
        <li><a href="#"><i className="fi-xwluxl-label-wide"></i>Products</a></li>
        <li><a href="#"><i className="fi-xnsuxl-phone-solid"></i>Contact</a></li>
        <li><a href="#"><i className="fi-cnsuxl-user-circle-solid"></i>Profile</a></li> */}
        </ul>
    </nav>

    )
}

export default Navigation
