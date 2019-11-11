import React, { Component, Fragment } from 'react';

import Navigation from './Components/Navigation/Nav';
import ProductsList from './Components/ProductsList';
import Footer from './Components/Footer/Footer';


class Post extends Component {


  render() {
    return(

      <Fragment>
        
          <Navigation />
          <ProductsList />
          <Footer />

      </Fragment>

    )
  }

}


export default Post
