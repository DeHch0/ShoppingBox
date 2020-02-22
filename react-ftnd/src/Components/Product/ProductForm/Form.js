import React from 'react';

const Form = () => {
    return (
        <form onSubmit={this.handleSubmit} action="">
            <label htmlFor="name">Name: </label>
            <input
                type='text'
                name='name'
                id='name'
                value={this.state.name}
                onChange={this.handleOnChange}
                required
            />
            <br />
            <label htmlFor="description">Description: </label>
            <input
                type='text'
                name='description'
                id='description'
                value={this.state.description}
                onChange={this.handleOnChange}
                required
            />
            <br />
            <label htmlFor="imageUrl">ImageUrl: </label>
            <input
                type='text'
                name='imageUrl'
                id='imageUrl'
                value={this.state.imageUrl}
                onChange={this.handleOnChange}
                required
            />
            <br />
            <label htmlFor="price">Price: </label>
            <input
                type='text'
                name='price'
                id='price'
                value={this.state.price}
                onChange={this.handleOnChange}
                required
            />
            <br />
            <button type='submit'>Submit</button>

        </form>
    )
}

export default Form;