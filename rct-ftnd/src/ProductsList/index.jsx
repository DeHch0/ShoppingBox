import React, { Component, Fragment } from 'react';
import getService from '../Getters/getProducts/index'
import ProductCard from '../ProductCard'
// import '../ProductCard/style.css';


class ProductsList extends Component {

  // const [auth, setAuth] = useState(isLogged.isLogged);
  state = {
    posts: null,
    isLogged: this.props.isLogged,
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

    console.log('mounting');
  }

  render() {
    const { posts, isLogged } = this.state;
    let returned =  posts ? <main><div className="grid-container" key='row1'>{posts.map((post) => <ProductCard isLogged={isLogged.isLogged} {...post}/>)}</div></main> : <main><div>No Posts !</div></main>

    return (

    <div className="container">
      <Fragment>

       {returned}

      </Fragment>
      </div>

    )
  
  }

}


export default ProductsList
