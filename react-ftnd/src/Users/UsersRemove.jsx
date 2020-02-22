import React, {useEffect} from 'react';


const UsersRemove = () => {
    let id = window.location.pathname.split('/')[3];

    fetch(`http://localhost:8080/user/remove/${id}`)
    .then(data => data.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    })

    return (
        <div>Opa</div>
    )
}

export default UsersRemove;