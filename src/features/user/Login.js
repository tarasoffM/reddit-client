import { React, useState } from 'react';

const CLIENTID = 'Tt3lGeSNEQInQgOBGMiQxQ';
const URLSTATE = 'SomeRandomString';
const REDIRECTURI = 'http://localhost:3000/';
const DURATION = 'temporary';
const SCOPE_STRING = 'read';
const RESPONSE_TYPE = 'code';

const userAuthorizationRedirect = 
`https://www.reddit.com/api/v1/authorize?client_id=${CLIENTID}&response_type=code&state=${URLSTATE}&redirect_uri=${REDIRECTURI}&duration=${DURATION}&scope=${SCOPE_STRING}`;

const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = userAuthorizationRedirect;
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