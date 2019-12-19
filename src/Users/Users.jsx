import React , {useState, useEffect} from 'react';
import UserList from './UserList';
import './user-style.css';

const Users = () => {

    const [usersList, setUsersList] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/user/all')
        .then(data => data.json())
        .then(users => {
            setUsersList(users);
        })
        .catch(err => {
            console.log(err);
        })
    })
    

    return (
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Admin</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>

        {usersList ? usersList.map(user => <UserList {...user}/>) : <div>No Users !</div>}
        </table>
    )

}

export default Users;