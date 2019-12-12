import React, { Component } from 'react';
import getService from '../../../Getters/getProducts';
import CreateProductForm from '../../Forms/Product/Create'

class Create extends Component {

    state = {
        loader: true,
        products: null,
        categories: null,

    }


    componentDidMount() {
            getService.load('category')
            .then(data => {
                this.setState({
                    loader:false,
                    category: data 
                })
                console.log(this.state);
            })
            .catch(err => {
                
                    this.setState({
                        errors: true,
                        errorsMessage: err
                    })
                    console.log(this.state);
            });

    }    


    render() {
        return (
            this.state.loader ? <div>Loading...</div> :
            <div><CreateProductForm categories={this.state.category} /></div>
        )
    }

}
    export default Create;