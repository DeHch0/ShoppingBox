import React, { Component } from 'react';
import getService from '../../../Requester/requester';
// import { Redirect } from 'react-router';

class LoginForm extends Component {
    state = {
        username: '',
        password: '',
    }

    handleLogin = (event) => {
        event.preventDefault();

        getService.load('user/login', 'POST', this.state)
            .then(() => console.log('Logged !'))
            .then(() =>  this.props.history.push('/'))
            .catch(err => { console.log('Problem !' + err) });
    }

    handleOnChange = ({ target }) => {
        const { value, id } = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        // this.props.history.push("/");
        const { username, password } = this.state;
        return (
            <form onSubmit={this.handleLogin} action="">
                <label htmlFor="username">Username: </label>
                <input
                    type='text'
                    name='username'
                    id='username'
                    value={username}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={password}
                    onChange={this.handleOnChange}
                    required
                />
                <br />
                <button type='submit'>Submit</button>

            </form>
        )
    }
}

export default LoginForm;