import React from 'react';

const CreateInputField = (name, value, type, handleChange) => {
    return (

            <input
                type={type}
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                required
            />
    )
}

export default CreateInputField