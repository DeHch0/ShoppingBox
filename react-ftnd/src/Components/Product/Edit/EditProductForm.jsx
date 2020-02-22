import React, { Component } from 'react';
import getService from '../../../Requester/requester';
// import Cookies from 'js-cookie';

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

class EditProductForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            id: this.props.product._id,
            name: this.props.product.name,
            brand: this.props.product.brand,
            imageUrl: this.props.product.imageUrl,
            price: this.props.product.price,
            category: this.props.product.category,
            error : null,
            success: null
        }
    }



    handleSubmit = (event) => {
        event.preventDefault();
        //   console.dir(this.state);
        //   this.state.creator = Cookies.get('username');

        console.log(this.state);

        getService.load(`products/${this.state.id}`, 'PUT', this.state)
            .then(data => {
                if(data.success) {
                   this.setState({success: data.success}) ;
                   this.props.history.push('/');
                }
                else {
                    this.setState({error: data.error}) 
                }


            })
            // .then(res => res.json())
            // .then(data => console.log('No Errors' + data))
            .catch(err => this.setState({error: err.error}));
    }

    handleOnChange = ({ target }) => {
        const { value, id } = target;
        this.setState({
            [id]: value,
        })
    }

    render() {
        // const { name, brand, imageUrl, price,error, success } = this.state;
        const { name, brand, imageUrl, price,error, success, category } = this.state;
        return (

    error ? <div>{error}</div> : success ? <div>{success}</div> : null,


            this.props.product && this.props.categories ?
            <form onSubmit={this.handleSubmit}>


                <label htmlFor="brand">Brand: </label>
                <input
                    key='brand'
                    type='text'
                    name='brand'
                    id='brand'
                    value={brand}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <label htmlFor="name">Name: </label>
                <input
                    key='name'
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={this.handleOnChange}
                    required
                />
                <br />

                <label htmlFor="imageUrl">ImageUrl: </label>
                <input
                    type='text'
                    name='imageUrl'
                    id='imageUrl'
                    value={imageUrl}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <label htmlFor="price">Price: </label>
                <input
                    type='text'
                    name='price'
                    id='price'
                    value={price}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <label htmlFor="category">Category: </label>
                <select name="category" onChange={this.handleOnChange} required id="category">
                    <option selected='selected' value={this.props.categories[0][0].id}>{this.props.categories[0][0].name}</option> */}
                    {this.props.categories[1].map(category => {
                         return <option value={category.id}>{category.name}</option>
                     })}

                </select> 
                <br />
                <button type='submit'>Submit</button>

            </form>
                    : null 
        )
    }

}


export default EditProductForm;