import React , {Fragment, useEffect} from 'react';
import './nav-style.css'

import {
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
       <li key='home'>
          <Link to="/">НАЧАЛО</Link>  
        </li>
        <span>|</span>
       <li  key='about'> 
          <Link to="/about">ЗА НАС</Link>
        </li>
        <li key='logo' className="logo"><a href="/">SHOPIFY</a></li>
        <li  key='login'>
        {isLogged.isLogged ? <Link to="/bucket">КОЛИЧКА({isLogged.bucket})</Link> : <Link to="/login">LOGIN</Link> }
        </li><span>|</span>
        <li  key='register'>
        {isLogged.isLogged ? <Link to="/logout">ИЗХОД</Link> : <Link to="/register">REGISTER</Link> }
        </li>
      </ul>
    </nav>
    
    <div className="second-nav">
      <nav>
      <ul className="second-nav">
        <li><Link to="/male/all">Мъже</Link></li>
        <li><Link to="/female/all">Жени</Link></li>
        <li><Link to="/boys/all">Момчета</Link></li>
        <li><Link to="/girls/all">Момичета</Link></li>
    {/* <li><Link to='../../../bucket'>{isLogged.bucket}</Link></li> */}
    {isLogged.isAdmin ? <li><Link to="/category/all">Категории</Link></li> : null }
    {isLogged.isAdmin ? <li><Link to="/create">Създай Продукт</Link></li> : null }
    {isLogged.isAdmin ? <li><Link to="/users/all">Потребители</Link></li> : null }
        </ul>
      </nav>
    </div>

    
    {/* <Header /> */}

    </header>
    </Fragment>

    )
}

export default Navigation
