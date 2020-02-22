import React, { Component } from 'react';
import getService from '../../../Requester/requester'

class RegisterForm extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        error: null
    }

    handleRegister = (event) => {
        event.preventDefault();
        console.dir(this.state);

        getService.load('user/register' , 'POST' , this.state)
        .then((data) =>  {
            if(data.error) {
                this.setState({error: data.error})
                return;
            }
            console.log('**** Logged ****');
        })
        // .then(() =>  this.props.history.push('/login'))
        .catch(err=> {
            console.log(err);
            this.setState({error: err.error})
    })
    }

    handleOnChange = ({target}) => {
        const {value, id} = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        const { email, username, password,error } = this.state;
        return (

            <main>
            <div class="wrapper">

                {error ? <div>{error}</div> : null}
                <div class="login-form">

                    <h2>Register</h2>
                    <form onSubmit={this.handleRegister}>

                    <div class="username">
                            <label for="email"><img src="./img/user.png" alt="" /></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email..."
                                value={email}
                                onChange={this.handleOnChange} />
                        </div>

                        <div class="username">
                            <label for="username"><img src="./img/user.png" alt="" /></label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username..."
                                value={username}
                                onChange={this.handleOnChange} />
                        </div>

                        <div class="password">
                            <label for="password"><img src="./img/lock.png" alt="" /></label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password..."
                                onChange={this.handleOnChange}
                                value={password}
                            />
                        </div>

                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>

        </main>
//             <form onSubmit={this.handleRegister} action="">
//                 <label htmlFor="email">Email: </label>
//                 <input
//                 type='email'
//                 name='email'
//                 id='email'
//                 value={email}
//                 onChange={this.handleOnChange}
//                 required
//                 />
//                 <br/>
// <label htmlFor="username">First Name: </label>
//                 <input
//                 type='text'
//                 name='username'
//                 id='username'
//                 value={username}
//                 onChange={this.handleOnChange}
//                 required
//                 />
//                 <br/>
// <label htmlFor="password">Password: </label>
//                 <input
//                 type='password'
//                 name='password'
//                 id='password'
//                 value={password}
//                 onChange={this.handleOnChange}
//                 required
//                 />
//                 <br/>
//                 <button type='submit'>Submit</button>
                
//             </form>
        )
    }
}

export default RegisterForm;