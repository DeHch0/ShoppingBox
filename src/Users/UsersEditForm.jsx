import React, { useState, useEffect, Fragment } from 'react'


const UsersEditForm = () => {


    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [userId, setUserId] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [success, setSuccess] = useState(null);
    let id = window.location.pathname.split('/')[3];


    const handleLogin = (event) => {
        event.preventDefault();
        let updateObj = {
            userId,
            username,
            email,
            admin: isAdmin
        };
        console.log(updateObj);

        fetch('http://localhost:8080/user/edit', {
            method: 'POST',
            credentials: 'include',
            headers: {
                // 'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(updateObj),
        })
        .then(data => data.json())
        .then(data => setSuccess(data.success))
        // .then(data => console.log(data));

    }
    
    // const usernameChange = ({ target }) => {
    //     const { value, id } = target;
    
    //     setUsername(evant.target.value);
    // }

    useEffect(() => {
        console.log('useEffect');
        fetch(`http://localhost:8080/user/user/${id}`)
            .then(data => data.json())
            .then(userInfo => {
                setUser(userInfo);
                setUsername(userInfo.username);
                setEmail(userInfo.email);
                setIsAdmin(userInfo.admin);
                setUserId(userInfo._id);
                console.log(userInfo);
            })
            .catch(err => console.log(err));

    }, [])
    return (
        <Fragment>

                {success ? <div>{success}</div> : null}
                <div class="login-form">
                    <form onSubmit={handleLogin}>

                        <div>
                            <label for="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Username..."
                                value={username}
                                onChange={({target}) => setUsername(target.value)} />
                        </div>

                        <div>
                            <label for="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder="email..."
                                value={email}
                                onChange={({target}) => setEmail(target.value)} />
                                />
                        </div>

                        Admin:<input
                        type="checkbox" 
                        name="isAdmin" 
                        checked={isAdmin} 
                        value={isAdmin}
                        onChange={() => setIsAdmin(!isAdmin)} />
                        />
                        <br/>

                        <button className="login-button" type="submit">Edit</button>
                    </form>
                </div>
                        </Fragment>
    )
}

export default UsersEditForm