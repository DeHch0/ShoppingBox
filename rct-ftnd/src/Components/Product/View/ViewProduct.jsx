import React , {useState , useEffect, Fragment} from 'react';
import getService from '../../../Requester/requester';

import './view.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
  } from "react-router-dom";

const ViewProduct = (posts) => {

    const history = useHistory();
    const [size, setSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [error, setError] = useState(null);


    const remove = () => {
        getService.load(`products/${posts._id}`, 'DELETE').then(posts => {
            history.push('/');
        })
    }

   const submitBucket = (e) => {
    e.preventDefault();

    if(size === '') {
        setError('Please chose size !')
    }
    else if(quantity == 0 || quantity < 0 ) {
        setError('Quantity should be positive number !');
    } else {

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
    }
        // console.log(Object.keys(sessionStorage));
    }

    return (
<Fragment>
    {error ? <div>{error}</div> : null}
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
            {posts.price} лв.
        </div>

{posts.isLogged ?
    <form onSubmit={submitBucket}>
        <div className="size">
            <div>Chose Size:</div>
            {posts.category !== '5df53d304b439e174822c59c' ?
            <ul>
                <li><button type="button" onClick={(e)=>{setSize('S')}}>S</button></li>
                <li><button type="button" onClick={(e)=>{setSize('M')}}>M</button></li>
                <li><button type="button" onClick={(e)=>{setSize('L')}}>L</button></li>
                <li><button type="button" onClick={(e)=>{setSize('XL')}}>XL</button></li>
            </ul>
            :
            <ul>
            <li><button type="button" onClick={(e)=>{setSize(39)}}>39</button></li>
            <li><button type="button" onClick={(e)=>{setSize(40)}}>40</button></li>
            <li><button type="button" onClick={(e)=>{setSize(41)}}>41</button></li>
            <li><button type="button" onClick={(e)=>{setSize(42)}}>42</button></li>
        </ul>}
        </div>

        <div className="quantity">
           <div>Quantity</div>
                <button type="button" onClick={() => {setQuantity(quantity - 1)}}>-</button>
                <input data-min="1" data-max="0" type="text" name="quantity" value={quantity} readonly="true"/>
                <button type="button" onClick={() => {setQuantity(quantity + 1)}}>+</button>
        </div>

        <button type="submit">Add To Bucket</button>
        </form>
        : <div>Ако искате да поръчате този продукт моля влезте в <Link to='../login'>акаунта си !</Link></div> }

        {posts.isAdmin ? <button className='btn-edit'><Link to={`/edit/${posts._id}`}>Edit</Link></button> : null}
        {/* {posts.isLogged ? <button className='btn-remove'><Link to={`/remove/${posts._id}`}>Remove</Link></button> : null} */}
        {posts.isAdmin ? <button onClick={remove} className='btn-remove'>Remove</button> : null}
    </div>
   
</div>
</Fragment>
)
}

export default ViewProduct;