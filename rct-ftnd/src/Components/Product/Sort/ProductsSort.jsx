import React, { useState, useEffect } from 'react';
import ProductCard from '../../../ProductCard'

const ProductsSort = () => {

    let path = window.location.pathname;

    let splittedPath = path.split('/');
    let searchCategory = splittedPath[1];
    console.log(splittedPath[1]);

    // switch(searchCategory) {
    //     case 'women': searchCategory = 'female';break;
    //     case 'boys': searchCategory = 'boys';break;
    //     case 'girls': searchCategory = 'girls';break;
    //     case 'kids': searchCategory = 'kids';break;
    //     default: searchCategory= 'male';break;
    // }

    const [products, setProducts] = useState(null);
    
    useEffect(() => {
        'mounting';
        fetch(`http://localhost:8080/products/gender/${searchCategory}`)
        .then(data => data.json())
        .then((data) => {
            console.log(data);
            setProducts(data);
        })
        .catch((err) => {
            console.log(' *** OPSSS Error in Sorting JSX =( ***'+ err);
        });
    }, []);

    return (

        // posts ? <main><div className="grid-container" key='row1'>{posts.map((post) => <ProductCard {...post}/>)}</div></main> : <main><div>No Posts !</div></main>
    products 
    ? <main><div className="grid-container" key='row1'>{products.map((product) => <div><ProductCard {...product}/></div>)}</div></main>
    : <div>Error !</div>
    
    //    <div>Loading...</div>
    )
}

export default ProductsSort;