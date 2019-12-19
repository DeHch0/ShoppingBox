import React, { useState, useEffect } from 'react';


const BucketCard = (item) => {

    const [itemRemove, setItemRemove] = useState(false);
    const [itemSize, setItemSize] = useState('')
    const [itemQuality, setItemQuality] = useState(0)


    // useEffect(() => {
        
    // }, [setItemRemove])

    useEffect(() =>{
        console.log(item);
        let product = JSON.parse(window.sessionStorage.getItem(item._id));
        if(product.size && product.quantity){
        setItemSize(product.size);
        setItemQuality(product.quantity);
        }
    })

    const removeItem = () => {
        item.bucket.history.push('/')
        window.sessionStorage.removeItem(item._id);
        
    }

    return (

        <tr>
            <td>{item.brand}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>{itemSize}</td>
            <td>{itemQuality}</td>
            <th><button onClick={removeItem}>Remove</button></th>
        </tr>

    )
}

export default BucketCard;