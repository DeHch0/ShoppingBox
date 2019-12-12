import React, { Component } from 'react';
import getService from '../../../Requester/requester';
// import { Redirect } from 'react-router';
import './login-style.css';
import { Redirect } from 'react-router-dom';


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        error: null,
        setLogin: this.props.setIsLogged,
        isLogged: this.props.isLogged
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.setState({ error: null });
        let usernameInput = this.state.username;
        let passwordInput = this.state.password;

        // if (passwordInput.length < 6 || passwordInput > 20) {
        //     this.setState({ error: 'Password must be betwen 6 and 20 chars !' });
        //     setTimeout(() => {
        //         this.setState({ error: null })
        //     }, 4000)
        //     return;
        // }
        if (usernameInput.length < 5 || usernameInput >= 12) {
            this.setState({ error: 'Username must be betwen 5 and 12 chars !' });
            setTimeout(() => {
                this.setState({ error: null })
            }, 4000)
            return;
        } else {
                    this.props.login(this.state)
            .then((data) => <Redirect to='/' />)
            .catch(err => {
                this.setState({ error: err });
                setTimeout(() => {
                    this.setState({ error: null })
                }, 4000)

            });
        }


    }



    handleOnChange = ({ target }) => {
        const { value, id } = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        // this.props.history.push("/");
        const { username, password, error } = this.state;
        return (
            <main>
                <div class="wrapper">

                    {error ?
                        <div className='errorNotification'>{error}</div>
                        : null}
                    <div class="login-form">

                        <h2>Login</h2>
                        <form onSubmit={this.handleLogin}>

                            <div class="username">
                                <label for="username"><img src="https://img.icons8.com/windows/96/000000/user.png" /></label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Username..."
                                    value={username}
                                    onChange={this.handleOnChange} />
                            </div>

                            <div class="password">
                                <label for="password"><img src="https://img.icons8.com/material-rounded/96/000000/lock.png" /></label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password..."
                                    onChange={this.handleOnChange}
                                    value={password}
                                />
                            </div>

                            <button className="login-button" type="submit">Login</button>
                        </form>
                    </div>
                </div>

            </main>
            // <form onSubmit={this.handleLogin} action="">
            //     <label htmlFor="username">Username: </label>
            //     <input
            //         type='text'
            //         name='username'
            //         id='username'
            //         value={username}
            //         onChange={this.handleOnChange}
            //         required
            //     />
            //     <br />
            //     <label htmlFor="password">Password: </label>
            //     <input
            //         type='password'
            //         name='password'
            //         id='password'
            //         value={password}
            //         onChange={this.handleOnChange}
            //         required
            //     />
            //     <br />
            //     <button type='submit'>Submit</button>

            // </form>
        )
    }
}

export default LoginForm;