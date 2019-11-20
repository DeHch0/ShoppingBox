import React, { Component } from 'react';
import EditProductForm from './EditProductForm';
import getService from '../../../Getters/getProducts';

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
  }

  componentDidMount() {
    getService.load('products').then(product => {
      this.setState({
        product: {
          id: product[0]._id,
          name: product[0].name,
          description: product[0].description,
          imageUrl: product[0].imageUrl,
          price: product[0].price,
        },
        loader: false,
         })
    })
  }


render() {
      return (
        this.state.loader ? <div>Loading</div> 
        :<EditProductForm product={this.state.product}/>
      )
}
  
  }

export default EditProduct;