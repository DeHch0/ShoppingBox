import React, { Component, Fragment } from 'react';
import './style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class ProductCard extends Component {

  routeChange(event) {
    console.log('in' + event.target);
  }


  render() {
    const { _id, name, price, imageUrl, brand, isLogged } = this.props;
    console.log('Am i Logged ? ' + this.props);
    return (

      <div className="card">
        <div className="message">
          BestSeller
          </div>
        <div className="img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="info">
          <div className="brand">
            <span><Link to={`view/${_id}`}>{brand}</Link></span>
          </div>
          <div className="name">
            <span>{name}</span>
          </div>

          <div className="size">
            from <span>S</span> to <span>XL</span>
          </div>

          <div className="price">
            {price}$
          </div>

          {/* {isLogged? <button>Logged !</button> :  <button>Not Logged !</button>} */}
        </div>
      </div>


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