import React, { Component } from 'react';
import getService from '../../../Getters/getProducts';
import productCard from '../ProductCard/index'
import ProductCard from '../ProductCard/index';

class View extends Component {
    state = {
      posts: null
    }
  
    componentDidMount() {
        console.log(this.props.match.params)
      getService.load(`products/${this.props.match.params.id}`, 'GET').then(posts => {
        this.setState({ posts })
      })
  
      console.log('mounting');
    }
  
    render() {
      const { posts } = this.state;
    let returned =  posts ? <div className="row" key='row1'>{<ProductCard {...posts}/>}</div> : <div>No Posts !</div>
  
      return (
  
      <div className="container">
      
         {returned}
        </div>
  
      )
    
    }
  
  }

export default View;