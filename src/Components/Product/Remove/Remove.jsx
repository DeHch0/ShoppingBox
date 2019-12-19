import React, { Component, useState, useEffect } from 'react';
import getService from '../../../Requester/requester';
import {useHistory} from 'react-router-dom';



const Remove = (bucket) => {
  const history = useHistory();
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    console.log(this.props.match.params)
    getService.load(`products/${this.props.match.params.id}`, 'DELETE').then(posts => {
      history.push('/');
      bucket.setBucketItems(bucket.bucketItems - 1)
    })
  });

  return (
    null
  )
}


// class Remove extends Component {
//     state = {
//       posts: null,
//       history: useHistory(),
//     }
  
//     componentDidMount() {
//         console.log(this.props.match.params)
//       getService.load(`products/${this.props.match.params.id}`, 'DELETE').then(posts => {
//           console.log('Deleted !');
//           this.state.history.push('/');
//         this.setState({ posts })
//       })
  
//       console.log('mounting');
//     }
  
//     render() {
//       const { posts } = this.state;
//     let returned =  posts ? <div className="row" key='row1'>asd</div> : <div>No Posts !</div>
  
//       return (
  
//       <div className="container">
      
//          {returned}
//         </div>
  
//       )
    
//     }
  
//   }

export default Remove;