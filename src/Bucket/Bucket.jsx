import React, {useState, useEffect} from 'react';

const Bucket = (setBucketItems) => {
    const [bucketLength, setBucketLenth] = useState(0);

    useEffect(() => {
        // setBucketLenth(Object.keys(window.sessionStorage).length)
        // setBucketItems.setBucketItems(bucketItems);
        let sessionItems = Object.keys(window.sessionStorage)
        setBucketItems.setBucketItems(sessionItems.length);
        // console.log(sessionItems.length);
    }, []) 

    return (
        // setBucket(window.sessionStorage.length)
    <span>{bucketLength}</span>
    )
}

export default Bucket;