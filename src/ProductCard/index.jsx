import React, { Component } from 'react';
import './style.css';
import {
  BrowserRouter,
  Link
} from "react-router-dom";

class ProductCard extends Component {

  // routeChange(event) {
  //   console.log('in' + event.target);
  // }


  render() {
    const { _id, name, price, imageUrl, brand, isLogged } = this.props;
    // console.log('Am i Logged ? ' + this.props);
    return (
      <Link key='product-card-link-view}' to={`../view/${_id}`}>
      <div className="card" key='product-card-card'>
        {/* <div className="message">
          BestSeller
          </div> */}
        <div className="img" key='product-card-img'>
          <img key='product-card-img-url' src={imageUrl} alt="" />
        </div>
        <div className="info" key='product-card-info'>
          <div className="brand" key='product-card-brand'>
            <span key='product-card-span-brand'>{brand}</span>
          </div>
          <div className="name" key='product-card-name'>
            <span key='product-card-span-name'>{name}</span>
          </div>

          {/* <div className="size">
            from <span>S</span> to <span>XL</span>
          </div> */}

          <div className="price" key='product-card-price'>
            {price} лв.
          </div>

          {/* {isLogged? <button>Logged !</button> :  <button>Not Logged !</button>} */}
        </div>
      </div>
      </Link>

      // <div className="item">
      //   <div className="card">
      //     <img src={imageUrl} alt="" />
      //     <div>{name}</div>
      //     <div>{description}</div>
      //     <div>Price: ${price}</div>
      //     <Link to={`view/${_id}`} classNameName="btn btn-primary">View</Link>
      //     <Link to={`edit/${_id}`} classNameName="btn btn-warning">Edit</Link>
      //     <Link to={`remove/${_id}`} classNameName="btn btn-danger">Delete</Link>
      //   </div>
      // </div>

      //     <div key={_id} classNameName="card col-3" >
      //     <img classNameName="card-img-top" 
      //         src={imageUrl}
      //         alt="Card image cap"/>
      //     <div classNameName="card-body" >
      // <h5 classNameName="card-title" >{name}</h5>
      // <h5 classNameName="card-text" >Price: <span>{price}</span> lv/kg</h5>
      // {/* <Link to="/views/{_id}">Home</Link> */}
      //         <Link to={`view/${_id}`} classNameName="btn btn-primary">View</Link>
      //         <Link to={`edit/${_id}`} classNameName="btn btn-warning">Edit</Link>
      //         <Link to={`remove/${_id}`} classNameName="btn btn-danger">Delete</Link>
      //         {/* <a href="#" classNameName="btn btn-danger" >Delete</a> */}
      //     </div>
      //     </div>
    )

  }

}


export default ProductCard