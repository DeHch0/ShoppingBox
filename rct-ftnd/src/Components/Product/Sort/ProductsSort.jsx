import React, { useState, useEffect } from 'react';
import {withRouter} from 'react-router-dom';
import { spawn } from 'child_process';
import ProductCard from '../../../ProductCard'
import './sort.css';
// import getService from '../../../Getters/getProducts'

const ProductsSort = () => {

    let path = window.location.pathname;

    let splittedPath = path.split('/');
    // let currPath = splittedPath[1];
    let searchCategory = splittedPath[1];
    console.log(splittedPath[1]);

    switch(searchCategory) {
        case 'women': searchCategory = 'female';break;
        case 'kids': searchCategory = 'boys';break;

        default: searchCategory = 'male';break;
    }

    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        'mounting';
        fetch(`http://localhost:8080/products/gender/${searchCategory}`)
        // getService.load(`get/${searchCriteria}`)
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
        .catch((err) => {
            console.log(' *** OPSSS Error in Sorting JSX =( ***'+ err);
        });
    } , []);

    return (

        // posts ? <main><div className="grid-container" key='row1'>{posts.map((post) => <ProductCard {...post}/>)}</div></main> : <main><div>No Posts !</div></main>
    products 
    ? <main><div className="grid-container" key='row1'>{products.map((product) => <div><ProductCard {...product}/></div>)}</div></main>
    : <div>Error !</div>
    
    //    <div>Loading...</div>
    )
}

export default ProductsSort;