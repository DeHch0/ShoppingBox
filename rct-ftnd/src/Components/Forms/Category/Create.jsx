import React, { Component } from 'react';
import getService from '../../../Requester/requester';
import Cookies from 'js-cookie';
import {Redirect, BrowserHistory, useHistory} from 'react-router-dom';

class CreateProductForm extends Component {

    constructor(props) {
        super(props)
    }
    state = {
        name: '',
        error: null,
        creator: Cookies.get('username'),
        success: null,
    }

    handleSubmit = (event) => {
        event.preventDefault();

        getService.load('category', 'POST', this.state)
            // .then(data => data.json())
            .then(data => {
                if(data.error) {
                    this.setState({error: data.error});
                    return;
                }
                if(data.success) {
                   
                }
            })
            .catch(err => this.setState({error: err.error}));

    }

    handleOnChange = ({ target }) => {
        const { value, id } = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        const { name, error } = this.state;
        return (
            <form onSubmit={this.handleSubmit} action="">

        {error ? <div>{error}</div> : null}

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
                
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default CreateProductForm;