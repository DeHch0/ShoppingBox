const getService = {
    load: function(route) {
        return fetch(`http://localhost:8080/${route}` )
        .then(res => res.json())
    }
};

export default getService;