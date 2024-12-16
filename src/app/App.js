import React, { use, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated } from '../features/user/userSlice';
import './App.css';
import Card from '../features/cards/Card';
import Login from '../features/user/Login';
import { getAccessToken } from '../features/user/userSlice';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';


const CLIENTID = 'Tt3lGeSNEQInQgOBGMiQxQ';
// will need to change this to a more secure method
const URLSTATE = 'SomeRandomString';
const REDIRECTURI = 'http://localhost:3000/';
const DURATION = 'temporary';
const SCOPE_STRING = 'read';
const RESPONSE_TYPE = 'code';
const AUTHENDPOINT = 'https://www.reddit.com/api/v1/authorize';

const userAuthorizationRedirect = 
`${AUTHENDPOINT}
?client_id=${CLIENTID}
&response_type=${RESPONSE_TYPE}
&state=${URLSTATE}
&redirect_uri=${REDIRECTURI}
&duration=${DURATION}
&scope=${SCOPE_STRING}`;




function App() {
  
  const authenticated = useSelector(isAuthenticated);
  const dispatch = useDispatch();

  //localStorage.setItem('code', '');

  useEffect(() => {
    
    const querySring = window.location.search;
  
    // check to see if we're in the callback URL and if so, get the code
    if (querySring.includes('code')) {
      localStorage.setItem('code', (new URLSearchParams(window.location.search).get('code')));
    // check to see if we have a code, if not, redirect to the login page
    } else if (localStorage.getItem('code') === '') {
      window.location.href = userAuthorizationRedirect;
    }  
    
    // check to see if we have a token, if not, get one
    if (!localStorage.getItem('token')) {
      dispatch(getAccessToken(localStorage.getItem('code')));
    }

  }, []);

  if (!authenticated) {

    return (
      <Login />
    )

  } else {

    return (
      <div className="App">
        <Card cardMedia={cardMedia} profilePic={profilePic} />
      </div>
    );
  }
}

export default App;
