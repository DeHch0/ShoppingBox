import React , {Fragment, useState, useEffect} from 'react';
import Bucket from '../../Bucket/Bucket';
import './nav-style.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import './nav-style.css'

const Navigation = (isLogged) => {

    // const [auth, setAuth] = useState(isLogged.isLogged);

    useEffect(() => {
      // console.log('Nav status is ' + isLogged.bucketItems);
    }, [isLogged])


    return (
    <Fragment>
      <header>
        {/* <Bucket /> */}
    <nav className="first-nav">
      <ul>
       <li>
          <Link to="/">HOME</Link>  
        </li><span>|</span>
       <li> 
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="logo"><a href="#">SHOPIFY</a></li>
        <li>
        {isLogged.isLogged ? <Link to="/create">CREATE</Link> : <Link to="/login">LOGIN</Link> }
        </li><span>|</span>
        <li>
        {isLogged.isLogged ? <Link to="/logout">LOGOUT</Link> : <Link to="/register">REGISTER</Link> }
        </li>
      </ul>
    </nav>
    
    <div className="second-nav">
      <nav>
      <ul class="second-nav">
        <li><Link to="/male/all">Мъже</Link></li>
        <li><Link to="/women/all">Жени</Link></li>
        <li><Link to="/kids/all">Деца</Link></li>
        <li><Link to="/brands/all">Марки</Link></li>
        <li><Link to="/offers">Промоции</Link></li>
    <li><Link to='../../../bucket'>{isLogged.bucket}</Link></li>
        </ul>
      </nav>
    </div>

    
    {/* <Header /> */}

    </header>
    </Fragment>

    )
}

export default Navigation
