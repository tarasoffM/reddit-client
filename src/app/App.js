import React, { use, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '../features/user/userSlice';
import './App.css';
import Card from '../features/cards/Card';
import Login from '../features/user/Login';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';


const CLIENTID = 'Tt3lGeSNEQInQgOBGMiQxQ';
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

  localStorage.setItem('code', '');

  useEffect(() => {
    
    const querySring = window.location.search;
  
    // check to see if we're in the callback URL and if so, get the code
    if (querySring.includes('code')) {
      localStorage.setItem('code', (new URLSearchParams(window.location.search).get('code')));

    } else if (localStorage.getItem('code') === '') {
      window.location.href = userAuthorizationRedirect;
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
