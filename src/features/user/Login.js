import { React, useState } from 'react';




const handleSubmit = (e) => {
    e.preventDefault();
    
};

export default function Login () {


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
};