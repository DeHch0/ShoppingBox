import React, { Component } from 'react';
import getService from '../../../Requester/requester';

class Remove extends Component {
    state = {
      posts: null
    }
  
    componentDidMount() {
        console.log(this.props.match.params)
      getService.load(`products/${this.props.match.params.id}`, 'DELETE').then(posts => {
          console.log('Deleted !');
        this.setState({ posts })
      })
  
      console.log('mounting');
    }
  
    render() {
      const { posts } = this.state;
    let returned =  posts ? <div className="row" key='row1'>asd</div> : <div>No Posts !</div>
  
      return (
  
      <div className="container">
      
         {returned}
        </div>
  
      )
    
    }
  
  }

export default Remove;