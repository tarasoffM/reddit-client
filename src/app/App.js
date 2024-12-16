import React, { use, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { isAuthenticated } from '../features/user/userSlice';
import './App.css';
import Card from '../features/cards/Card';
import Login from '../features/user/Login';
import { getAccessToken } from '../features/user/userSlice';

import cardMedia from '../data/assets/card-image.jpg';
import profilePic from '../data/assets/morty.jpg';


const clientID = 'Tt3lGeSNEQInQgOBGMiQxQ';
const clientSecret = 'eJL9vNd0AoOqORX9oJ4yVjr4ibaWkA';
// will need to change this to a more secure method
const URLSTATE = 'SomeRandomString';
const REDIRECTURI = 'http://localhost:3000';
const DURATION = 'temporary';
const SCOPE_STRING = 'read';
const RESPONSE_TYPE = 'code';
const AUTHENDPOINT = 'https://www.reddit.com/api/v1/authorize';

const userAuthorizationRedirect = 
`${AUTHENDPOINT}
?client_id=${clientID}
&response_type=${RESPONSE_TYPE}
&state=${URLSTATE}
&redirect_uri=${REDIRECTURI}
&duration=${DURATION}
&scope=${SCOPE_STRING}`;




function App() {
  
  const authenticated = useSelector(isAuthenticated);
  const dispatch = useDispatch();


  useEffect(() => {
    const queryString = window.location.search;
    const credentials = btoa(`${clientID}:${clientSecret}`);
    let code = new URLSearchParams(queryString).get('code');

    if (code) {
      localStorage.setItem('code', code);
      // remove the code from the URL
      window.history.pushState('', '', REDIRECTURI);
    } else {
      code = localStorage.getItem('code');
    }

    if (code) {
      // Exchange the code for an access token
      fetch('https://www.reddit.com/api/v1/access_token', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${credentials}`
        },
        body: new URLSearchParams({
          grant_type: 'authorization_code',
          code: code,
          redirect_uri: REDIRECTURI
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        localStorage.setItem('token', data.access_token);
        //dispatch(getAccessToken(data.access_token));
      })
      .catch(error => {
        console.error('Error fetching access token:', error);
      });
    } else {
      window.location.href = userAuthorizationRedirect;
    }
  }, [dispatch]);

  if (!localStorage.getItem('token')) {

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

