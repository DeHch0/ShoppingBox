import React, { Component } from 'react';
import getService from '../Getters/getProducts/index'
import ProductCard from '../ProductCard'
// import '../ProductCard/style.css';


class ProductsList extends Component {

  // const [auth, setAuth] = useState(isLogged.isLogged);
  state = {
    posts: null,
    isLogged: this.props.isLogged
  }


  componentDidMount() {
    // const {isLogged} = this.state;
    getService.load('products')
    .then(posts => {
      this.setState({ posts })
      // console.log(this.state.posts);
    })
    .catch(err => {
      console.log(err);
    })

    // console.log('mounting');
  }

  render() {
    const { posts, isLogged } = this.state;
    // let returned =  posts ? <main key='product-list-mainClass'><div key='product-card-grid-container' className="grid-container" key='row1'>{posts.map((post) => <ProductCard isLogged={isLogged.isLogged} {...post}/>)}</div></main> : <main key='product-list-main'><div key='product-list-onError'>No Posts !</div></main>

    return (

    <div key='product-list-container' className="container">
        {
          posts
          ?
           <main key='product-list-mainClass'>
             <div key='product-card-grid-container' className="grid-container" key='row1'>
               {posts.map((post) => <ProductCard isLogged={isLogged.isLogged} {...post}/>)}
               </div>
               </main>
          : 
          <main key='product-list-main'>
            <div key='product-list-onError'>
              No Posts !
              </div>
              </main>
  }

      </div>

    )
  
  }

}


export default ProductsList
