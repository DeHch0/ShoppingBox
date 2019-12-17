import React, { Component, useState, useEffect } from 'react';
import getService from '../../../Getters/getProducts';
import CreateProductForm from '../../Forms/Product/Create'
import {useHistory} from 'react-router-dom';


const Create = () => {
    const history = useHistory();
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState(null);
    const [categories, setCategories] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        getService.load('category')
        .then(data => {
            setLoader(false);
            setCategories(data);
           
        })
        .catch(err => {
            setError(err);
        });
    })

    return (
        loader ? <div>Loading...</div> :
        <div><CreateProductForm categories={categories} history={history} /></div>
    )

}
    export default Create;