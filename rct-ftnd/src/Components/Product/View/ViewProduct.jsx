import React , {useState , useEffect} from 'react';
import './view.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ViewProduct = (posts) => {


    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    // this.state = {
    //     size: '',
    //     quantity: 1,
    // }

    useEffect(() => {
        console.log(posts);
    })

   const submitBucket = (e) => {
    e.preventDefault();
        let bucketObj = {
            id: posts._id,
            size,
            quantity 
        }

        sessionStorage.setItem(bucketObj.id, JSON.stringify({
            id: posts._id,
            size,
            quantity 
        }))
        posts.bucket();

        // console.log(Object.keys(sessionStorage));
    }

    return (

    <div className="details">
    <div className="detail-img">
        <img src={posts.imageUrl} alt=""/>
    </div>
    <div className="detail-info">

        <div className="brand">{posts.brand}</div>

        <div className="model">
            {posts.name}
        </div>

        <div className="price">
            {posts.price}$
        </div>

    <form onSubmit={submitBucket}>
        <div className="size">
            <div>Chose Size:</div>
            <ul>
                <li><button type="button" onClick={(e)=>{setSize('S')}}>S</button></li>
                <li><button type="button" onClick={(e)=>{setSize('M')}}>M</button></li>
                <li><button type="button" onClick={(e)=>{setSize('L')}}>L</button></li>
                <li><button type="button" onClick={(e)=>{setSize('XL')}}>XL</button></li>
            </ul>
        </div>

        <div className="quantity">
           <div>Quantity</div>
                <button type="button" onClick={() => {setQuantity(quantity - 1)}}>-</button>
                <input data-min="1" data-max="0" type="text" name="quantity" value={quantity} readonly="true"/>
                <button type="button" onClick={() => {setQuantity(quantity + 1)}}>+</button>
        </div>

        <button type="submit">Add To Bucket</button>
        </form>

        {posts.isLogged ? <button><Link to={`/edit/${posts._id}`}>Edit</Link></button> : null}
    </div>
   
</div>
)
}

export default ViewProduct;