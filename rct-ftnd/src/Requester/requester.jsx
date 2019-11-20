const getService = {
    load: function(route = 'products', method = 'GET', data = {}) {
        

            console.log('data from requester.jsx' + JSON.stringify(data))
        return fetch(`http://localhost:8080/${route}` , {
            method,
            credentials: 'include',
            headers: {
                // 'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body: JSON.stringify(data),
        } )
        .then(res => res.json())
        // .catch(err => console.log(err));
    }
};

export default getService;