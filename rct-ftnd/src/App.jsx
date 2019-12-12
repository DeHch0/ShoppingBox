import React, { Component, Fragment, useState, useEffect } from 'react';

import Navigation from './Components/Common/Nav';
import Header from './Components/Common/Header';
import ProductsList from './ProductsList';
import LoginForm from './Components/Forms/User/Login';
import EditProductForm from './Components/Product/Edit/Edit';
import View from './Components/Product/View/View';
import Remove from './Components/Product/Remove/Remove';
import RegisterForm from './Components/Forms/User/Register'
import Create from './Components/Product/Create/Create'
import Footer from './Components/Common/Footer';
import CreateCategoryForm from './Components/Forms/Category/Create';
import ProductsSort from './Components/Product/Sort/ProductsSort';
import RouteProtection from './RouteProtection/RouteProtection';
import { login as userLogin, logout as userLogout, checkAdmin as auth } from './userService';
import Logout from './Components/Forms/User/Logout';
import BucketView from './Components/BucketView/BucketView'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  // useHistory
} from "react-router-dom";
import Bucket from './Bucket/Bucket';
// import { useHistory } from "react-router-dom";

// function render(title, Cmp, { isLogged, ...otherProps}, isProtected) {
//   return function (props) {
//     return !isProtected && !isLogged ?<Cmp {...props} {...otherProps} /> : <Redirect to="/" />
//   };
// }

const cookieParser = () => {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}
const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bucketItems, setbucketItems] = useState(0);

  const bucket = () => {
    let sessionStorageItems = Object.keys(window.sessionStorage);
    let sessionStorageItemsLength = sessionStorageItems.length
    setbucketItems(sessionStorageItemsLength);

    // return sessionStorageItemsLength;
  }

  const checkIsAdmin = () => {
    auth()
    .then(data => {
      setIsAdmin(data.result);
    })
    .catch(err => {
      setIsAdmin(err.result)
    });
  };

  const login = (data) => {
    return userLogin(data).then(() => {
      setIsLogged(true);
      checkIsAdmin()
      // console.log('after setIsLogged');
      // history.push('/');
    });
  }

  const logout = () => {
    return userLogout().then(() => {
      setIsLogged(false);
      checkIsAdmin()
      // console.log('after setIsLogged');
      // <Redirect to='/'></Redirect>
    });
  }

  useEffect(() => {
    const cookies = cookieParser();
    const checkLogged = !!cookies['auth_cookie'];
    setIsLogged(checkLogged);
    checkIsAdmin();
    bucket();
  } , [])
  {/* //   {isLogged && <Route path="/">
      //           <Navigation />
      //           <ProductsList />
                
      //         </Route>} */}
  return (


    <Router>
      {isAdmin ? <div>opalq</div> : <div>not opalq</div>}
      <Navigation isLogged={isLogged} bucket={bucketItems} />

      {/* <Route path='/' exact>
          {isLogged ? <div>Logged</div> : <div>Not Logged !</div> }
         <ProductsList isLogged={isLogged}/>
      </Route> */}



      {/* <Route path='/' exact>
          {isLogged ? <div>Logged</div> : <div>Not Logged !</div> }
         <ProductsList isLogged={isLogged}/>
      </Route> */}


      <Route path='/' exact>
        <ProductsList isLogged={isLogged} />
      </Route>


      <Route path='/create' exact>
   {isLogged ? <Create /> : <Redirect to='/' />}
      </Route>

      <Route path='/logout' exact>
    {isLogged ? <Logout logout={logout} /> : <Redirect to='/' /> }
      </Route>

      <Route path='/register' exact>
          {isLogged ? <Redirect to='/' /> : <RegisterForm />}
      </Route>

      <Route path='/edit/:id' exact>
    {isLogged ? <EditProductForm /> : <Redirect to='/' /> }
      </Route>

      <Route path='/login' exact>

        <LoginForm login={login} />
      </Route>


      <Route path='/remove/:id' exact>
        {isLogged ? <Remove/> : <Redirect to='/login' />}
      </Route>


      <Route path='/view/:id' exact>

        <View isLogged={isLogged} bucket={bucket}  />
      </Route>

      {/* <Route path='/category/create' exact>

        <CreateCategoryForm />
      </Route> */}

<Route path='/bucket' exact>
        <BucketView />
      </Route>

      <Route path='/category/create' exact>
        {isLogged ? <CreateCategoryForm isLogged={isLogged} /> : <Redirect to='/login' />}
      </Route>

      <Route path='/male/all' exact>

        <ProductsSort />
      </Route>

      <Route path='/women/all' exact>

        <ProductsSort />
      </Route>


      <Route path='/kids/all' exact>
        <ProductsSort />
      </Route >


      <Footer />
    </Router>
  )
}


export default App


// class App extends Component {
//   constructor(props) {
//     super(props);
//     const cookies = parseCookeis();
//     const isLogged = !!cookies['auth_cookie'];
//     this.state = { isLogged };
//   }



//   render() {
//     const { isLogged } = this.state;

//     return (
// <Router>
//   

//           {isLogged ? <div>Logged</div> : <div>Not Logged !</div>}
//         {isLogged && <Route path="/">
//                 <Navigation />
//                 <ProductsList />

//               </Route>}


//     {/* <Route path='/' exact>
//       {!isLogged ? <Redirect to="/register" /> : <Fragment><Navigation isLogged={isLogged} /> <ProductsList/></Fragment> }
//     </Route> */}


//       <Route path='/create' exact>
//         <Navigation />
//         <Create />
//       </Route>

//       <Route path='/register' exact>
//         <Navigation />
//         <RegisterForm />
//       </Route>
//       <Route path='/edit/:id' exact>
//         <Navigation />
//         <EditProductForm />
//       </Route>
// {/* 
//       <Route path='/login' exact>
//         <Navigation />
//         <LoginForm />
//       </Route> */}
//       <Route path="/login" render={render('Login', LoginForm, { isLogged, login: this.login })} />


//       <Route path='/remove/:id' exact>
//         <Navigation />
//         <Remove />
//       </Route>
//       <Route path='/view/:id' exact>
//         <Navigation />
//         <View />
//       </Route>

//       <Route path='/category/create' exact>
//         <Navigation />
//         <CreateCategoryForm />
//       </Route>

//       <Route path='/male/all' exact>
//         <Navigation />
//         <ProductsSort />
//       </Route>

//       <Route path='/women/all' exact>
//         <Navigation />
//         <ProductsSort />
//       </Route>

//       <Route path='/kids/all' exact>
//         <Navigation />
//         <ProductsSort />
//       </Route>
//       <Route path='/*' component={() => {return (<div>Error 404 !</div>)}} />

// const login = (data) => {
//     return userService.login(data).then(() => {
//       this.setState({ isLogged: true });
//       // history.push('/');
//     });
//   }
//       <Footer/>
//       </Router>
//     )
// }
// }