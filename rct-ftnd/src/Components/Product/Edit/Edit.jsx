import React, { Component } from 'react';
import EditProductForm from './EditProductForm';
import getService from '../../../Getters/getProducts';
import checkCategories from './checkCategories';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class EditProduct extends Component {

  state = {
    loader: true,
    product: {},
    categories: {},
  }

  componentDidMount() {
    let id = window.location.pathname.toString().split('/')[2];
    getService.load(`products/${id}`).then(product => {
      this.setState({
        product
        // loader: false,
         })
    })
    .catch(e => console.log(e));

    getService.load('category').then(category => {
        let categories = checkCategories(this.state.product.category, category);

      this.setState({
        categories,
        loader: false,
         })
    })
    .catch(e => console.log(e));
  }


render() {
      return (
        this.state.loader ? <div>Loading</div> 
        :<EditProductForm product={this.state.product} categories={this.state.categories}/>
      )
}
  
  }

export default EditProduct;