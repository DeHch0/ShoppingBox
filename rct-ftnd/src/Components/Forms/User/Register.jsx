import React, { Component } from 'react';
import getService from '../../../Requester/requester'

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
    }

    handleRegister = (event) => {
        event.preventDefault();
        console.dir(this.state);

        getService.load('user/register' , 'POST' , this.state)
        .then(() =>  {
            debugger; 
            this.props.history.push('/login');
        })
        // .then(() =>  this.props.history.push('/login'))
        .catch(err=> {console.log('Registration Error !' + err)})
    }

    handleOnChange = ({target}) => {
        const {value, id} = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        const { email, username, password } = this.state;
        return (
            <form onSubmit={this.handleRegister} action="">
                <label htmlFor="email">Email: </label>
                <input
                type='email'
                name='email'
                id='email'
                value={email}
                onChange={this.handleOnChange}
                required
                />
                <br/>
<label htmlFor="username">First Name: </label>
                <input
                type='text'
                name='username'
                id='username'
                value={username}
                onChange={this.handleOnChange}
                required
                />
                <br/>
<label htmlFor="password">Password: </label>
                <input
                type='password'
                name='password'
                id='password'
                value={password}
                onChange={this.handleOnChange}
                required
                />
                <br/>
                <button type='submit'>Submit</button>
                
            </form>
        )
    }
}

export default RegisterForm;