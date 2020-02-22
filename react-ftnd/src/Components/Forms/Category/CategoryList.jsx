import React , {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import UserList from './UserList';
// import './user-style.css';

const CategoryList = () => {

    const [usersList, setUsersList] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8080/category')
        .then(data => data.json())
        .then(users => {
            setUsersList(users);
        })
        .catch(err => {
            console.log(err);
        })
    })
    

    return (
        <div className='categories-container'>

        <button><Link to='../category/create'>Create Category</Link></button>
        <table>
            <tr>
                <th>ID</th>
                <th>Name</th>
                {/* <th>Edit</th> */}
                <th>Delete</th>
            </tr>

        {usersList ? usersList.map(user => {
            return(
                <tr>
                    <td>{user._id}</td>
                    <td>{user.name}</td>
                    {/* <td><Link to={`edit/${user._id}`}>Edit</Link></td> */}
                    <td><Link onClick={() => {
                        fetch(`http://localhost:8080/category/${user._id}`, {
                            method: 'DELETE',
                        })
                        .then(data => {
                            
                        })
                    }} to='/'>Delete</Link></td>
                </tr>)
        }) : <div>No Users !</div>}
        </table>
        </div>
    )

}

export default CategoryList;