import React, { Component } from 'react';
import getService from '../../../Requester/requester';
import Cookies from 'js-cookie';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class EditProductForm extends Component {

    constructor(props){
        super(props)

         this.state = {    
      id: this.props.product.id,
      name: this.props.product.name,
      description: this.props.product.description,
      imageUrl: this.props.product.imageUrl,
      price: this.props.product.price,
  }   
    }


  
  handleSubmit = (event) => {
      event.preventDefault();
    //   console.dir(this.state);
    //   this.state.creator = Cookies.get('username');
  
      console.log(this.state.id);
    
      getService.load(`products/${this.state.id}`, 'PUT', this.state)
          // .then(data => data.json())
          .then(data => console.log( data))
          .then(() => this.props.history.push('/'))
          // .then(res => res.json())
          // .then(data => console.log('No Errors' + data))
          .catch(err => console.log('Ouch Errors' + err));
  }
  
  handleOnChange = ({ target }) => {
      const { value, id } = target;
  
      this.setState({
          [id]: value,
      })
  }
  
  render() {
        // console.log(this.props.product);
        // if(!this.state.product) {
        //   getService.load('products').then(product => {
        //     this.setState({
        //        product,
        //        name: product.name,
        //        })
        //   })
        // }
  
  
      const { name, description, imageUrl, price } = this.state;

      console.log(this.props);
      return (
          <form onSubmit={this.handleSubmit} action="">
              <label htmlFor="name">Name: </label>
              <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="description">Description: </label>
              <input
                  type='text'
                  name='description'
                  id='description'
                  value={description}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="imageUrl">ImageUrl: </label>
              <input
                  type='text'
                  name='imageUrl'
                  id='imageUrl'
                  value={imageUrl}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="price">Price: </label>
              <input
                  type='text'
                  name='price'
                  id='price'
                  value={price}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="category">Category: </label>
                <select name="category" onChange={this.handleOnChange} required id="category">
                <option selected='selected' value={this.props.categories[0][0]}>{this.props.categories[0][0]}</option> */}
                    {this.props.categories[1].map(category => {
                   return  <option  value={category}>{category}</option>
                    })}
                    
                </select>
                <br />
              <button type='submit'>Submit</button>
  
          </form>
      )
  }
    
    }


export default EditProductForm;