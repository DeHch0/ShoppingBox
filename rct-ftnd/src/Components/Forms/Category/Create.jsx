import React, { Component } from 'react';
import getService from '../../../Requester/requester';
import Cookies from 'js-cookie';

class CreateProductForm extends Component {
    state = {
        name: '',
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.dir(this.state);

        this.state.creator = Cookies.get('username');

        console.log(this.state);
        // console.log(Cookies.get('username'));

        getService.load('category', 'POST', this.state)
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
        const { name } = this.state;
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
                
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default CreateProductForm;