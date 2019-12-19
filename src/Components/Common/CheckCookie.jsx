import React from 'react';

const CheckCookie = () => {
    let cookies = document.cookie;
    if (cookies) {
        return true
    }
    return false;
}

export default CheckCookie;