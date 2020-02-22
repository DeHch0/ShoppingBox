import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
const UserList = (user) => {


    return (
        <tr>
            <td>{user._id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>

            <td>{user.admin ? 'true' : 'false'}</td>
            <td><Link to={`edit/${user._id}`}>Edit</Link></td>
            <td><Link to={`remove/${user._id}`}>Delete</Link></td>
        </tr>
    )
}

export default UserList;