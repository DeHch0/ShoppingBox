import Cookie from 'js-cookie';


const login = (data) => {
  return fetch(`http://localhost:8080/user/login`, {
    body: JSON.stringify(data),
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    credentials: 'include'
  }).then(res => res.text()
  .then(text => res.status === 200 ? text : Promise.reject(text)));
}


const logout = () => {

  return fetch(`http://localhost:8080/user/logout`, {
    method: 'POST',
    credentials: 'include'
  })
    .then(res => res.text());
}

const checkAdmin = () => {

  let username = Cookie.get('username');
  return fetch(`http://localhost:8080/user/${username}`)
  .then(res => res.json())
}


export {
  login,
  logout,
  checkAdmin
};