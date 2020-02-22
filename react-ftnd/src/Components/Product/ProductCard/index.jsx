import React, { Component } from 'react';
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
      const {_id, name, price, imageUrl} = this.props;
    return (
        <div key={_id} className="card col-3" >
        <img className="card-img-top" 
            src={imageUrl}
            alt="Card image cap"/>
        <div className="card-body" >
    <h5 className="card-title" >{name}</h5>
    <h5 className="card-text" >Price: <span>{price}</span> lv/kg</h5>
    {/* <Link to="/views/{_id}">Home</Link> */}
            <Link to={`view/${_id}`} className="btn btn-primary">View</Link>
            <Link to={`edit/${_id}`} className="btn btn-warning">Edit</Link>
            <Link to={`remove/${_id}`} className="btn btn-danger">Delete</Link>
            {/* <a href="#" className="btn btn-danger" >Delete</a> */}
        </div>
        </div>
    )

  }

}


export default ProductCard