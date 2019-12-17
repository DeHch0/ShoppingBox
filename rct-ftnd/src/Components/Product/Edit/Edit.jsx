import React, { Component, useState, useEffect } from 'react';
import EditProductForm from './EditProductForm';
import getService from '../../../Getters/getProducts';
import checkCategories from './checkCategories';
import {useHistory} from 'react-router-dom';



const EditProduct = () => {
  const history = useHistory();
  const [loader, setLoader] = useState(true);
  const [products, setProducts] = useState({});
  const [categories, setCategories] = useState({});


  useEffect(() => {
    let id = window.location.pathname.toString().split('/')[2];
    getService.load(`products/${id}`).then(product => {
      setProducts(product);


         getService.load('category').then(category => {
          let categorie = checkCategories(product.category, category);
        setCategories(categorie);
        setLoader(false);
      })
      .catch(e => console.log(e));

    })
    .catch(e => console.log(e));
  })


  return (
    loader ? <div>Loading</div> 
    :<EditProductForm product={products} history={history} categories={categories}/>
  )

}


export default EditProduct;