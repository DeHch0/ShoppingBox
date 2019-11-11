import React, { Component } from 'react';
import './style.css';


class ProductCard extends Component {




  render() {
      const {_id, name, price} = this.props;
    return (
        <div className="card col-3" >
        <img className="card-img-top" 
            src="https://az836796.vo.msecnd.net/media/image/product/en/large/0000000004664.jpg"
            alt="Card image cap"/>
        <div className="card-body" >
    <h5 className="card-title" >{name}</h5>
    <h5 className="card-text" >Price: <span>{price}</span> lv/kg</h5>
            <a href="#" className="btn btn-primary" >View</a>
            <a href="#" className="btn btn-warning" >Edit</a>
            <a href="#" className="btn btn-danger" >Delete</a>
        </div>
        </div>
    )

  }

}


export default ProductCard