import React, {useState, useEffect} from 'react';
import getService from '../../Requester/requester'
import BucketCard from './BucketCard';

const removeItem = (id) => {
    window.sessionStorage.removeItem(id)
}

const BucketView = (bucket) => {
    const [items, setItems] = useState(null);

//  window.sessionStorage.removeItem(_id)
    useEffect(() => {
        let sessionStorageItems = Object.keys(window.sessionStorage);
            
        getService.load('products/collection', 'POST' , sessionStorageItems)
        .then(data => setItems(data))
        .catch(err => console.log(err))
    }, [])



    return (
        // <div><BucketCard /> </div>
        <table>
        <tr>
          <th>Brand</th>
          <th>Name</th>
          <th>price</th>
          <th>Size</th>
          <th>Quality</th>
          <th>Remove</th>

        </tr>
        {/* <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr> */}
         {items ? items.map(item => <BucketCard {...item} bucket={bucket} /> ) : <div>No Products in Bucket !</div>}
      </table>

//  items ? <main><div className="grid-container" key='row1'>{items.map(item => <ProductCart {...item} /> )}</div></main> : <div>Loading...</div>
    )
}


export default BucketView