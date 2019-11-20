import React, { Component } from 'react';
import getService from '../../../Requester/requester';
import Cookies from 'js-cookie';

class EditProductForm extends Component {

    constructor(props) {
        super(props)
     
        this.state = {
            name: this.props.name || '',
            description: this.props.description || '',
            imageUrl: this.props.imageUrl || '',
            price: this.props.price || '',
        }
    }
        
    handleSubmit = (event) => {
        event.preventDefault();
        console.dir(this.state);

        this.state.creator = Cookies.get('username');

        console.log(this.state);

        // console.log(Cookies.get('username'));
        getService.load(`products/${this.props_id}`, 'PUT', this.state)
            // .then(data => data.json())
            .then(data => console.log( data))
            .then(() => this.props.history.push('/'))
            // .then(res => res.json())
            // .then(data => console.log('No Errors' + data))
            .catch(err => console.log('Ouch Errors' + err));
    }

    handleOnChange = ({ target }) => {
        const { value, id } = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        const { name, description, imageUrl, price } = this.state;
        return (
            <form onSubmit={this.handleSubmit} action="">
                <label htmlFor="name">Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={name}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <label htmlFor="description">Description: </label>
                <input
                    type='text'
                    name='description'
                    id='description'
                    value={description}
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
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default EditProductForm;