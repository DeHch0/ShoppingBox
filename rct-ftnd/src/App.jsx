import React, { Component, Fragment } from 'react';

import Navigation from './Components/Common/Nav';
import ProductsList from './Components/Product/ProductsList/';
import LoginForm from './Components/Forms/User/Login';
import EditProductForm from './Components/Product/Edit/Edit';
import View from './Components/Product/View/View';
import Remove from './Components/Product/Remove/Remove';
import RegisterForm from './Components/Forms/User/Register'
import CreateProductForm from './Components/Forms/Product/Create'
import Footer from './Components/Common/Footer';
import CreateCategoryForm from './Components/Forms/Category/Create';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Post extends Component {


  render() {
    return(
      <Router>

      <Navigation/>

      <Route path='/' exact component={ProductsList} />
      <Route path='/create' exact component={CreateProductForm} />
      <Route path='/register' exact component={RegisterForm} />
      <Route path='/login' exact component={LoginForm} />
      <Route path='/edit/:id' exact component={EditProductForm} />
      <Route path='/view/:id' exact component={View} />
      <Route path='/remove/:id' exact component={Remove} />
      <Route path='/category/create' exact component={CreateCategoryForm} />
      

      <Footer/>
      </Router>
    )
  }

}


export default Post
