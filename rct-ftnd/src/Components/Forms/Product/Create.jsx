import React, { Component } from 'react';
import getService from '../../../Requester/requester';
import Cookies from 'js-cookie';
import CreateInputField from './CreateInputField'
import './create-product.css'

class CreateProductForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            brand: '',
            imageUrl: '',
            price: 0,
            category: '',
            error: this.props.error || '',
            quality: '',
            // badge: null,
            // promotion: false,
        }
    }
        
    handleSubmit = (event) => {
        event.preventDefault();

        this.state.creator = Cookies.get('username');

        getService.load('products', 'POST', this.state)
            .then(data => {
                this.setState({error: data.error})
            })
            // .then(() => this.props.history.push('/'))
            // .then(data => console.log('No Errors' + data))
            .catch(err => this.setState({error: err.error}));
        // console.log(this.state);
    }

    handleOnChange = ({ target }) => {
        const { value, id } = target;

        this.setState({
            [id]: value,
        })
    }

    render() {
        const { name, brand, imageUrl, price, category, error, quality, gender } = this.state;
        return (
            <div className="create-form">
            {error !== '' ?  
          <div>{error}</div> :null }
          <form onSubmit={this.handleSubmit} action="">
              <label htmlFor="name">Name: </label>
              <input
                  type='text'
                  name='name'
                  id='name'
                  value={name}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="brand">Brand: </label>
              <input
                  type='text'
                  name='brand'
                  id='brand'
                  value={brand}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="imageUrl">ImageUrl: </label>
              <input
                  type='text'
                  name='imageUrl'
                  id='imageUrl'
                  value={imageUrl}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="price">Price: </label>
              <input
                  type='text'
                  name='price'
                  id='price'
                  value={price}
                  onChange={this.handleOnChange}
                  required
              />
              <br />
              <label htmlFor="category">Category: </label>
              <select name="category" onChange={this.handleOnChange} required id="category">
              <option selected='selected' value='' ></option>
                  {this.props.categories.map(category => {
                 return  <option  value={category._id}>{category.name}</option>
                  })}
                  
              </select>
              <br />
              <label htmlFor="gender">For(Gender): </label>
              <select name="gender" onChange={this.handleOnChange} required id="gender">
              <option selected='selected' value='' ></option>
              <option value='male' >Male</option>
              <option value='female' >Female</option>
              <option value='boys' >Boy</option>
              <option value='girls' >Girl</option>
                  
                  })}
                  
              </select>
              <br />
              {/* <label htmlFor="promotion">Promotion</label>
              <input className='promotionField' type="checkbox" name="promotion" value={promotion}/> */}
              <br />

              <button type='submit'>Submit</button>
        
          </form>
        </div> 
        )
    }
}

export default CreateProductForm;