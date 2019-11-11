const getService = {
    load: function() {
        return fetch('http://localhost:8080/products' )
        .then(res => res.json())
    }
};

export default getService;