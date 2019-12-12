import React, {useState, useEffect} from 'react';
import ProductCart from '../../ProductCard/'


class BucketView extends React.Component {

    state = {
        items: []
    }


    componentDidMount() {
        let productsArr = [];
        let counter = 0;
        let sessionStorageItems = Object.keys(window.sessionStorage);

        sessionStorageItems.map(id => {
            fetch(`http://localhost:8080/products/${id}`)
            .then(data=> data.json())
            .then (product => {
                productsArr[counter] = product;
                counter++;
            })
    })
    console.log(productsArr);
    this.setState({items: [...productsArr]})

    console.log(this.state.items);
}

    render() {
        return (
            <div>Hello</div>
        )
    }
}

// const BucketView = () => {
//     const [bucketItems , setBucketItems] = useState()

//     useEffect(() => {
//         let productsArr = {};
//         let counter = 0;
//         let sessionStorageItems = Object.keys(window.sessionStorage);

//         sessionStorageItems.map(id => {
//             fetch(`http://localhost:8080/products/${id}`)
//             .then(data=> data.json())
//             .then (product => {
//                 productsArr[counter] = product;
//                 counter++;
//             })
//         })

//         console.log(productsArr);

//         setBucketItems(productsArr);

//         console.log(bucketItems);
//     }, [])


//     return (
//     bucketItems ? <div>{bucketItems.map((item) => <div>item.name</div>)}</div> : <div>Loading...</div>
//     )
// }

export default BucketView