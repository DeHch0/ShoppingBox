import React, { Component } from 'react';
import getService from '../../Getters/getProducts/index'
import ProductCard from '../ProductCard'
import '../ProductCard/style.css';


class ProductsList extends Component {
  state = {
    posts: null
  }

  componentDidMount() {
    getService.load().then(posts => {
      this.setState({ posts })
    })

    console.log('mounting');
  }

  render() {
    const { posts } = this.state;

    let returned =  posts ? <div className="row">{posts.map((post) => <ProductCard {...post}/>)}</div>: <div>No Posts !</div>

    return (

    <div className="container">
    
       {returned}
      </div>

    )
  
  }

}


export default ProductsList
